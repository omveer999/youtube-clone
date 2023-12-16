import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentList from "./CommentList";
import ReactPlayer from "react-player";
import { useState } from "react";
import { YOUTUBE_CHANNEL_API, YOUTUBE_VIDEO_BY_ID } from "../utils/config";
import LikeIcon from "../icons/LikeIcon";
import DisLikeICon from "../icons/DisLikeIcon";
import RelatedVideo from "./RelatedVideo";
import EyeIcon from "../icons/EyeIcon";
const VideoWatch = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const videoId = params.get("v");
  const [videosDetail, setVideosDetail] = useState();
  const [channelDetail, setChannelDetail] = useState();
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const hashtagRegex = /#(\w+)/g;

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const videoData = await fetch(YOUTUBE_VIDEO_BY_ID + videoId);
      const videoDetail = await videoData.json();
      setVideosDetail(videoDetail);

      // Check if the videoDetail has a channelId before making the second request
      const channelId = videoDetail?.items[0]?.snippet?.channelId;
      if (channelId) {
        const channelData = await fetch(YOUTUBE_CHANNEL_API + channelId);
        const channelDetail = await channelData.json();
        setChannelDetail(channelDetail);
      }
    };
    fetchData();
  }, [videoId]); // Make sure to include videoId as a dependency

  const formatNumber = (number) => {
    const suffixes = ["", "k", "M", "B", "T"]; 
    let magnitude = 0;
    while (number >= 1000) {
      number /= 1000;
      magnitude++;
    }
    return number ? number.toFixed(1) + suffixes[magnitude] : 0;
  };
  const convertToLinksAndHashtags = (text) => {
    return text.split(/\r?\n/).map((line, lineIndex) => (
      <div key={lineIndex}>
        {line.split(urlRegex).map((part, index) => {
          // Check if the part is a URL
          if (index % 2 === 1) {
            return (
              <a
                className="cursor-pointer text-blue-500"
                key={index}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
              >
                {part}
              </a>
            );
          } else {
            // Check if the part is a hashtag
            const highlightedPart = part
              .split(hashtagRegex)
              .map((hashPart, hashIndex) =>
                hashIndex % 2 === 1 ? (
                  <span
                    key={hashIndex}
                    className="text-blue-500"
                  >{`#${hashPart}`}</span>
                ) : (
                  hashPart
                )
              );
            return <span key={index}>{highlightedPart}</span>;
          }
        })}
      </div>
    ));
  };
  if (!videosDetail) return null;
  return (
    <div className="mt-[100px] flex">
      <div className="ml-20  w-[850px] h-96 p-4">
        <div>
          <ReactPlayer
            className=" rounded-3xl"
            height="450px"
            width="800px"
            url={"https://www.youtube.com/embed/" + videoId}
            playing={true}
            controls={true}
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
          <div className="w-full">
            <h3 className="font-semibold py-2 text-lg">
              {videosDetail?.items[0]?.snippet?.title}
            </h3>
            <div className="w-full flex justify-between ">
              <div className="flex">
                <img
                  className="rounded-full shadow-sm w-14 "
                  src={
                    channelDetail?.items[0]?.snippet?.thumbnails?.default?.url
                  }
                />
                <div className="pl-2">
                  <h3 className="font-semibold text-lg">
                    {channelDetail?.items[0]?.snippet?.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {" "}
                    {formatNumber(
                      channelDetail?.items[0]?.statistics?.subscriberCount
                    )}{" "}
                    subscribers
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center p-1 bg-gray-100 rounded-l-full border-r cursor-pointer ">
                  <LikeIcon />{" "}
                  <span className="pl-2">
                    {formatNumber(
                      videosDetail?.items[0]?.statistics?.likeCount
                    )}
                  </span>
                </div>
                <div className="flex items-center p-1 bg-gray-100 rounded-r-full cursor-pointer">
                  {" "}
                  <DisLikeICon />
                </div>

                <div className="flex  p-1 items-center bg-gray-100 cursor-pointer rounded-full">
                   <EyeIcon/> <span className="pl-2">{formatNumber(videosDetail?.items[0]?.statistics?.viewCount)}</span>
                </div>
              </div>
            </div>
            <div className="whitespace-pre-wrap bg-gray-100 px-2 py-2 mb-4 rounded-lg line-clamp-5 hover:line-clamp-none my-3">
              {(videosDetail?.items[0]?.snippet?.description)?convertToLinksAndHashtags(
                videosDetail?.items[0]?.snippet?.description
              ):null}
            </div>
          </div>
        </div>

        <div>{/* <CommentList /> */}</div>
      </div>
      <div className="w-1/4">
        <RelatedVideo
          videoCategoryId={videosDetail?.items[0]?.snippet?.categoryId}
        />
      </div>
    </div>
  );
};

export default VideoWatch;

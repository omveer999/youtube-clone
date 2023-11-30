import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideo] = useState([]);
  async function getVideos() {
    let data = await fetch(YOUTUBE_VIDEO_API);
    data = await data.json();
    setVideo(data);
  }
  useEffect(() => {
    getVideos();
  }, []);
  // getVideos();

  const formatNumber = (number) => {
    const suffixes = ["", "k", "M", "B", "T"]; 
    let magnitude = 0;
    while (number >= 1000) {
      number /= 1000;
      magnitude++;
    }
    return number ? number.toFixed(1) + suffixes[magnitude] : 0;
  };

  return (
    <div className="flex flex-wrap h-auto overflow-auto justify-center items-center">
      {videos?.items?.map((video) => {
        const url = video?.snippet?.thumbnails?.high?.url;
        const title = video?.snippet?.title;
        const channelTitle = video?.snippet?.channelTitle;
        const viewCount = formatNumber(video?.statistics?.viewCount);
        let obj = { url, title, channelTitle,viewCount };
        return (
          <Link key={video.id} to={`watch?v=${video.id}`}>
            {" "}
            <VideoCard {...obj} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;

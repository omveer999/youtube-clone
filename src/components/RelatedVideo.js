import { useEffect } from "react";
import { useState } from "react";
import { YOUTUBE_RELATED_VIDEO_API } from "../utils/config";
import HorizontalVideoCard from "./HorizontalVideoCard";
import { Link } from "react-router-dom";
const RelatedVideo = ({ videoCategoryId }) => {
  const [videos, setVideo] = useState([]);
  async function getVideos() {
    let data = await fetch(YOUTUBE_RELATED_VIDEO_API + videoCategoryId);
    data = await data.json();
    setVideo(data);
  }
  useEffect(() => {
    getVideos();
  }, []);
  const formatNumber = (number) => {
    const suffixes = ["", "k", "M", "B", "T"]; 
    let magnitude = 0;
    while (number >= 1000) {
      number /= 1000;
      magnitude++;
    }
    return number ? number.toFixed(1) + suffixes[magnitude] : 0;
  };
  return videos?.items?.map((video) => {
    const url=video?.snippet?.thumbnails?.high?.url;
    const title=video?.snippet?.title;
    const channelTitle=video?.snippet?.channelTitle;
    const viewCount=formatNumber(video?.statistics?.viewCount);
    let obj={url,title,channelTitle,viewCount};

    return(
        <Link key={video.id} to={`/watch?v=${video.id}`}> <HorizontalVideoCard {...obj}   /></Link>
  )});
};

export default RelatedVideo;

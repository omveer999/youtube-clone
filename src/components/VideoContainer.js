import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/config";
import VideoCard from "./VideoCard";

const VideoContainer=()=>{
    const [videos,setVideo]=useState([]);
   async function getVideos(){
       let data= await fetch(YOUTUBE_VIDEO_API);
        data=await data.json();
        console.log("data");
        setVideo(data);
        console.log(data);
    }
    useEffect(()=>{
        getVideos();
    },[])
    // getVideos();

 
     
    return  (
        <div className="flex flex-wrap h-auto overflow-auto justify-center items-center">
            {
                videos?.items?.map((video)=>{
                    const url=video?.snippet?.thumbnails?.high?.url;
                    const title=video?.snippet?.title;
                    const channelTitle=video?.snippet?.channelTitle;
                    let obj={url,title,channelTitle};
                    console.log("objectt",obj);
                 return  <VideoCard {...obj}   />     
                })
            }
        </div>
    )
}

export default VideoContainer;
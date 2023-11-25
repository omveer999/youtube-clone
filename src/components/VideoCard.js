const VideoCard=({url,title,channelTitle})=>{
    console.log({url,title,channelTitle});
    return (
    <div className="w-[250px] m-2  shadow-lg shadow-gray-300    rounded-xl">
        <img alt="product" className="rounded-t-xl" src={url} />
        <div  className="p-2">
        <h3 className="font-bold cursor-pointer line-clamp-2">{title}</h3>
        <h4 className="text-gray-400 text-sm font-semibold p-2">{channelTitle}</h4>
        </div>
    </div>
    )
}

export default VideoCard;
const VideoCard = ({ url, title, channelTitle,viewCount }) => {
  return (
    <div className="w-[250px] m-2  shadow-lg shadow-gray-300    rounded-xl">
      <img alt="product" className="rounded-t-xl" src={url} />
      <div className="p-2">
        <h3 className="font-bold cursor-pointer line-clamp-2">{title}</h3>
        <div className="text-gray-400 text-sm  flex justify-between">
          <h4 className="line-clamp-1">{channelTitle}</h4>
          <h4>{viewCount} views</h4>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

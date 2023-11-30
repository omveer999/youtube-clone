const HorizontalVideoCard=({url,title,channelTitle,viewCount})=>(
    <div className="w-full bg-gray-100 m-2  flex flex-row  shadow-sm shadow-gray-300    rounded-xl">
    <div className="w-1/3">
      <img
        alt="product"
        className="rounded-xl"
        src={url}
      />
    </div>
    <div className="px-1 w-2/3">
      <h3 className="font-semibold cursor-pointer line-clamp-2">
        {title}
      </h3>
      <div className="text-gray-400 text-sm  flex justify-between">
        <h4 className="line-clamp-1">
        {channelTitle}
      </h4>
      <h4>{viewCount} views</h4>
      </div>

    </div>
  </div>
);

export default HorizontalVideoCard;
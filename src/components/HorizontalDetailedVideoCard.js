const HorizontalDetailedVideoCard = ({
  url,
  title,
  channelTitle,
  viewCount,
}) => (
  <div className="w-full bg-gray-100 m-2  flex flex-row  shadow-sm shadow-gray-300    rounded-xl">
    <div className="w-1/3">
      <img alt="Video" className="rounded-xl" src={url} />
    </div>
    <div className="px-2 py-4 w-2/3">
      <h3 className="font-semibold  cursor-pointer text-xl ">{title}</h3>
      <div className=" my-3 flex items-center">
        <div className=" mr-3">
          <img src={url} className="rounded-full w-12 h-12" />
        </div>
        <div className="">
          <h4 className="font-semibold justify-items-center">{channelTitle}</h4>
        </div>
      </div>
    </div>
  </div>
);

export default HorizontalDetailedVideoCard;

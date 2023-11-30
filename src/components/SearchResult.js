import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HorizontalDetailedVideoCard from "./HorizontalDetailedVideoCard";

const SearchResult = () => {
  const [searchParam] = useSearchParams();
  const query = searchParam.get("search_query");
  console.log(query);

  const [results, setResults] = useState([]);
  async function getResults() {
    let data = await fetch(YOUTUBE_SEARCH_API + query);
    data = await data.json();
    setResults(data);
  }
  useEffect(() => {
    getResults();
  }, [query]);

  console.log(results, "results");
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
    <div className="flex flex-col mt-20 ml-[180px] w-4/5 justify-center justify-items-center">
      {results?.items?.map((video) => {
        const url = video?.snippet?.thumbnails?.high?.url;
        const title = video?.snippet?.title;
        const channelTitle = video?.snippet?.channelTitle;
        const viewCount = formatNumber(video?.statistics?.viewCount);
        let obj = { url, title, channelTitle, viewCount };

        return (
          <div className="w-full">
            <Link className="" key={video.id} to={`/watch?v=${video.id}`}>
              {" "}
              <HorizontalDetailedVideoCard {...obj} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;

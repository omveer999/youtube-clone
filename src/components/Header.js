import { useDispatch, useSelector } from "react-redux";
import HamburgerMenu from "../icons/HamburgerMenu";
import MicIcon from "../icons/MicIcon";
import UserIcon from "../icons/UserIcon";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTION_KEY } from "../utils/config";
import SearchIcon from "../icons/SearchIcon";
import { setSuggestionsList } from "../utils/suggestionSlice";
import { Link, useSearchParams } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const searchCache=useSelector((state)=>state.suggestions);
  const [suggestion, setSuggestion] = useState([]);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSuggestion = async () => {
    let data = await fetch(YOUTUBE_SUGGESTION_KEY + searchQuery);
    data = await data.json();
    setSuggestion(data[1]);
    dispatch(setSuggestionsList({
        [searchQuery]:suggestion
    }));
  };

  useEffect(() => {
   const debounceTimer= setTimeout(()=>{
    if(searchCache[searchQuery]){
        setSuggestion(searchCache[searchQuery]);
    }else{
        getSuggestion();
    }
    },200)

   return ()=>(
    clearTimeout(debounceTimer)
   )
  }, [searchQuery]);

  return (
    // <h1>Header</h1>
    <>
      <div className="flex justify-between items-center z-[9999] bg-white  w-full fixed">
        <div className="menu flex p-2">
          <button onClick={toggleMenuHandler} className=" px- cursor-pointer">
            {" "}
            <HamburgerMenu />
          </button>
          {/* <YoutubeIcon/> */}
          <h1 className="font-extrabold  p-2 font-roboto text-2xl">
            You
            <span className="bg-red-600 rounded-md text-white p-1">Tube</span>
          </h1>
        </div>
        <div className="p-2 py-3 flex items-center">
          <div >
           <div className="flex items-center">
           <input
              type="search"
              className="p-2 border-2 rounded-l-full w-80"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <a   href={"/results?search_query="+searchQuery}>
            <button className="bg-gray-300 border-2 py-2 px-4 rounded-r-full" >
            {
                    <SearchIcon/>
                }
            </button>
            </a>
           </div>
            {suggestion != null && suggestion!="" ? (
              <div className="bg-white rounded-xl w-80 shadow   fixed  py-4">
                <ul>
                  {suggestion?.map((suggestedKey,index) => (
                    <li  key={index} className=""><a  href={"/results?search_query="+suggestedKey} className="py-1 hover:bg-gray-200 px-3 flex"><span className="mr-2"><SearchIcon/></span>  {suggestedKey}</a></li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="ml-2 p-2 bg-gray-300 rounded-full">
            <MicIcon />
          </div>
        </div>
        <div className="p-2">
          <UserIcon />
        </div>
      </div>
    </>
  );
};

export default Header;

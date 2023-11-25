import { useDispatch } from "react-redux";
import HamburgerMenu from "../icons/HamburgerMenu";
import MicIcon from "../icons/MicIcon";
import UserIcon from "../icons/UserIcon";
import { toggleMenu } from "../utils/appSlice";
// import ButtonList from "./ButtonList";
// import YoutubeIcon from "../icons/YoutubeIcon";

const Header=()=>{
    const dispatch=useDispatch();
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
   
    return(
        // <h1>Header</h1>
         <>
          <div className="flex justify-between items-center bg-white  w-full fixed">
            <div className="menu flex p-2">
             <button  onClick={toggleMenuHandler} className=" px- cursor-pointer"> <HamburgerMenu /></button> 
               {/* <YoutubeIcon/> */}
               <h1 className="font-extrabold  p-2 font-roboto text-2xl">You<span className="bg-red-600 rounded-md text-white p-1">Tube</span></h1>
            </div>
            <div className="p-2 py-3 flex items-center">
                    <div>
                    <input type="search" className="p-2 border-2 rounded-l-full" />
                    <button className="bg-gray-400 border-2 p-2 rounded-r-full">Search </button>
                    </div>
                   <div className="ml-2 p-2 bg-gray-300 rounded-full">
                        <MicIcon  />
                   </div>
                   
            </div>
            <div className="p-2">
                <UserIcon/>
            </div>
        </div>
       
         </>
    );
}

export default Header;
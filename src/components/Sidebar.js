import { useSelector } from "react-redux";

const Sidebar=()=>{
    const isMenuOpen=useSelector((state)=>state.app.isMenuOpen);
    console.log("isMenuopen",isMenuOpen);
    if(!isMenuOpen)return null;

    return (
       
        <div className="shadow-sm w-[140px] font-roboto font-semibold  mt-3 top-16 fixed">
            <ul className="px-2 py-4">
                <li className="py-2">News</li>
                <li className="py-2">Sports</li>
                <li className="py-2">Games</li>
                <li className="py-2" >Bhajans</li>
                <li className="py-2">Politics</li>
                <li className="py-2">Movies</li>
                <li className="py-2">Webseries</li>
                <li className="py-2">Shorts</li>
                <li className="py-2">Music</li>
                <li className="py-2">Podcasts</li>
            </ul>
        </div>
    )
}

export default Sidebar;
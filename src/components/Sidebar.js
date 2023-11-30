import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar=()=>{
    const isMenuOpen=useSelector((state)=>state.app.isMenuOpen);
    if(!isMenuOpen)return null;

    return (
       
        <div className="shadow-sm w-[140px] font-roboto font-semibold  mt-3 top-16 fixed">
            <ul className=" py-4">
                <li className="p-2 hover:text-blue-400"><Link to={"/"}>Home</Link></li>
                <li className="p-2  hover:text-blue-400"><Link to={"/results?search_query=trending"}>Trending</Link> </li>
                <li className="p-2  hover:text-blue-400"><Link to={"/results?search_query=trending"}>Music</Link> </li>
                <li className="p-2  hover:text-blue-400"><Link to={"/results?search_query=trending"}>Learning</Link></li>
                <li className="p-2  hover:text-blue-400"><Link to={"/results?search_query=trending"}>Shopping</Link></li>
                <li className="p-2  hover:text-blue-400"><Link to={"/results?search_query=Movies"}>Movies</Link></li>
                <li className="p-2  hover:text-blue-400"><Link to={"/results?search_query=Gaming"}>Gaming</Link></li>
                <li className="p-2  hover:text-blue-400"><Link to={"/results?search_query=News"}>News</Link></li>
                <li className="p-2  hover:text-blue-400"><Link to={"/results?search_query=Sports"}>Sports</Link></li>
                <li className="p-2  hover:text-blue-400"><Link to={"/results?search_query=Learning"}>Learning</Link></li>
                <li className="p-2  hover:text-blue-400"><Link to={"/results?search_query=Fashion & Beauty"}>Fashion & Beauty</Link></li>
                <li className="p-2  hover:text-blue-400"><Link to={"/results?search_query=Podcasts"}>Podcasts</Link></li>

            </ul>
        </div>
    )
}

export default Sidebar;
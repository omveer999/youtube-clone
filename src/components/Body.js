import { Outlet } from "react-router-dom";
// import Main from "./Main";
import Sidebar from "./Sidebar";

const Body=()=>{
    return (
        <div className="flex">
            <Sidebar/>
            {/* <Main/> */}
            <Outlet/>
        </div>
    )
}

export default Body;
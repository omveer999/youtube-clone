import Main from "./Main";
import Sidebar from "./Sidebar";

const Body=()=>{
    return (
        <div className="flex">
            <Sidebar/>
            <Main/>
        </div>
    )
}

export default Body;
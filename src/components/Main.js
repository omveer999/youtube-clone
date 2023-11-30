import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
const Main=()=>{
    return (
        <div className="">
            <div className="mt-20  left-[100px] p-2 w-11/12 fixed bg-white ">
               <ButtonList/>
            </div>
            <div className="mt-[150px]">
               <VideoContainer/>
            </div>
        </div>
       
    )
}

export default Main;
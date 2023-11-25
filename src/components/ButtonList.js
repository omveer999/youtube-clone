const ButtonList=()=>{
    const buttonList=["All","Music","Mixes","Arjit Singh","Mantras","Rituals","Live","DJ Mix","Tamil Cinema", "Dramedy"];
    return(
        <div className="justify-center flex ">
            {
                  buttonList.map((name,index)=>(<button key={index} className="bg-gray-300 px-4 py-2 rounded-full mx-2 font-semibold">{name}</button>))
            }
        </div>
       
       
    )
}

export default ButtonList;
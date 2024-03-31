import Attach from "../assets/img/attach.png"
const TypeMessage = ()=>{
    return(
        <div className="h-[10%] bg-white flex">
            <input type="text" placeholder=" Type Something..." className="w-[80%] h-full outline-none"/>
            <div className="flex items-center">
                <input type="file" id="file" className="w-0 h-0 overflow-hidden cursor-pointer"/>
                <label htmlFor="file" className="cursor-pointer">
                    <img src={Attach} alt=""/>
                </label>
                <button className="rounded-sm bg-blue-400 ml-4 px-2 py-1 text-white" >Send</button>
            </div>
        </div>
    )
}
export default TypeMessage
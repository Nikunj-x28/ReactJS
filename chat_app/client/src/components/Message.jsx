import Johncena from "../assets/johncena.jpeg"
const Message = ()=>{
    return(
        <div className="flex items-center">
            <div className="flex-col items-center p-2">
                <img src={Johncena} alt="profile-pic" className="h-8 w-8 rounded-xl"/>
                <p>Just Now</p>
            </div>
            <div className="bg-white rounded-tl-md rounded-br-md p-2 ml-4">
                <p>Hello how are you</p>
            </div>
        </div>
    )
}
export default Message;
import Messages from "./Messages";
import TypeMessage from "./TypeMessage";
import MessageNavBar from "./MessageNavBar";
const Chat = ()=>{
    return(
        <div className="w-8/12 rounded-tr-md rounded-br-md bg-purple-400">
            <MessageNavBar/>
            <Messages/>
            <TypeMessage/>
        </div>
    )
}
export default Chat;
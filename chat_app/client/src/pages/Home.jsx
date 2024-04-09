import SideBar from "../components/SideBar";
import Chat from "../components/Chat";
import MessageContext from "../context/MessageContext";
import { useState, useEffect ,useContext} from "react";
import { Socketcontext } from "../context/SocketContext";
import io from 'socket.io-client';
import { connectSocket } from "../utils/constants";
const Home = () => {

    const {socket,setSocket,setUnreadMessages,currentFriendId} = useContext(Socketcontext);
    const userDataString = localStorage.getItem('userData');
    const userData = JSON.parse(userDataString);
        
    // message context    
    const [messages, setMessages] = useState([]);
    const [clicked,setClicked] = useState("");
    
    useEffect(() => {
            if(!socket) {
                setSocket(io(connectSocket+userData.data.User._id));
            }
            else{
                // Event listener for incoming messages
                socket.on('newMessage', (data) => {
                    console.log("Message Came")
                    // Check if the message is from the currently selected friend
                    if (data.senderId !== currentFriendId) {
                        // Update the list of unread messages if the sender is not the current friend
                        setUnreadMessages((prevUnreadMessages) => {
                            if (!prevUnreadMessages.includes(data.senderId)) {
                                return [...prevUnreadMessages, data.senderId];
                            }
                            return prevUnreadMessages;
                        });
                    } else {
                        console.log("In socket ",currentFriendId)
                        console.log(data.message)
                        setMessages([...messages, data]);
                    }
                });
            }
    }, [socket,currentFriendId]);

    return (
            <MessageContext.Provider value={{ messages, setMessages ,clicked,setClicked}}>
                <div className="bg-purple-200 flex justify-center items-center h-screen">
                    <div className="bg-purple-400 rounded-md h-[80%] w-4/6 flex">
                            <SideBar/>
                            <Chat/>
                    </div>
                </div>
            </MessageContext.Provider>
    );
};

export default Home;

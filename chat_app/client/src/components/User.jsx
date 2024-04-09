import johncena from "../assets/johncena.jpeg"
import { useContext, useEffect } from "react"
import MessageContex from "../context/MessageContext"
import { Socketcontext } from "../context/SocketContext"
import { getOneUserConversation } from "../utils/constants"
const User = ({fullname,id})=>{
    const {setMessages,clicked,setClicked} = useContext(MessageContex)
    const {setCurrentFriendId} = useContext(Socketcontext)
    const handleClick =()=>{
        setClicked(id)
    }
    useEffect(()=>{
        if(clicked!==id) return;
        const caller = async ()=>{
                        console.log("clicked"+id)
                        try {
                            const accessToken = localStorage.getItem("token")
                            const response = await fetch(getOneUserConversation+id, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization':`Bearer ${accessToken}`
                                },
                            });
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            } else {
                                const responseData = await response.json();
                                // console.log('Response:', responseData);
                                setMessages(responseData.data)
                                setCurrentFriendId(id)
                                setClicked(false)
                            }
                        } catch (error) {
                            console.error('There was a problem with your fetch operation:', error);
                        }
                    }
        caller()
    },[clicked]);
    return(
        <div className="shadow-md flex-col h-18 hover:bg-gray-200 transition duration-300 ease-in-out transform"
        onClick={handleClick}>
            <div className="flex items-center p-2">
                <img src={johncena} alt="profile pic" className="w-8 h-8 rounded"/>
                <p className="px-4">{fullname}</p>
            </div>
            <p className="pl-4">Latest Message</p>
        </div>
    )
}
const highlightUser = (WrappedComponent) => {
    // Returns a component
    return ({fullname,id}) => {
        return (
            <div>
                <label className="absolute bg-black text-white ml-1 mt-1 p-1 rounded-lg
                z-10">🚀</label>
                <WrappedComponent fullname={fullname} id={id} />
            </div>
        );
    };
};
export {highlightUser}
export default User
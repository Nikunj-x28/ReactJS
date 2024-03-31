import { getAllUserData } from "../utils/constants";
import { useEffect, useContext} from "react";
import UserContext from "../context/UserContext.js"
const ChatMenu = ()=>{
    const {userData} = useContext(UserContext)
    useEffect(()=>{
        const loadChat = async ()=>{
            try {
                const response = await fetch(getAllUserData, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                } else {
                    console.log("it worked ")
                    const responseData = await response.json();
                    console.log('Response:', responseData);
                }
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        }
        loadChat();
    },[])
    return(
        <div className="overflow-y-auto max-h-96">
            
        </div>
    )
}
export default ChatMenu;
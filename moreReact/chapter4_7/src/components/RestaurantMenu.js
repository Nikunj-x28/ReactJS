import { useEffect,useState} from "react";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import StupidAPI from "./StupidAPI";
import Shimmer from "./Shimmer";
const RestaurantMenu = ()=>{
        const [resInfo, setResInfo]  = useState(null);
        const {resId} = useParams();
        // console.log(resId)
        useEffect(()=>{
            fetchMenu();
        },[]);
        const fetchMenu = async ()=>{
            const data = await fetch(MENU_API+resId);
            const json = await data.json();
            setResInfo(json);
        }
        // console.log(resInfo?.data?.cards.length)
        if(resInfo === null) 
            return <Shimmer/> 
        if(resInfo?.data?.cards?.length === 3){
            return(
                <StupidAPI resInfo={resInfo} one={0} two={2}/>
            )  
        }else{
            return(
                <StupidAPI resInfo={resInfo} one={2} two={5}/>
            ) 
        }
}
export default RestaurantMenu;
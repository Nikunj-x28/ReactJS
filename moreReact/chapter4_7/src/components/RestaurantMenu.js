import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import StupidAPI from "./StupidAPI";
import Shimmer from "./Shimmer";
const RestaurantMenu = ()=>{
        // this use param hook gets data from the URL and returns it
        const {resId} = useParams();
        // console.log(resId)
        const resInfo = useRestaurantMenu(resId);
        console.log(resInfo?.data?.cards)
        if(resInfo === null) 
            return <Shimmer/> 
        if(resInfo?.data?.cards?.length === 3){
            return(
                <StupidAPI resInfo={resInfo} one={0} two={2}/>
            )  
        }else if(resInfo?.data?.cards?.length === 6){
            return(
                <StupidAPI resInfo={resInfo} one={2} two={5}/>
            ) 
        }else{
            return(
                <StupidAPI resInfo={resInfo} one={2} two={4}/>
            )
        }
}
export default RestaurantMenu;
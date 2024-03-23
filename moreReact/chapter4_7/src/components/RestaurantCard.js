import {CDN_URL} from "../utils/constants";
import { useState } from "react";
const RestaurantCard = ({resData})=>{
    const [isHovered,setIsHovered] = useState(false)
    const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
    } = resData?.info;
    return (
        <div className="m-4 p-4 w-[250px] h-[400px] bg-gray-300 rounded-md">
            <img 
            className="w-[220px] h-[200px] rounded-xl
            p-2 transition-all duration-500 hover:scale-110"
            alt ="restaurant logo"
            src={CDN_URL+cloudinaryImageId}
            onMouseEnter={(e) => setIsHovered(true)}
            onMouseLeave={(e) => setIsHovered(false)}
            />
            <div className={`h-[180px] flex flex-col justify-between px-2 py-0.5 ${isHovered ? 'shadow-lg' : ''}`}>
                <h3 className={`text-xl font-bold ${isHovered ? 'text-blue-600' : 'text-black'} transition-colors duration-300`}>{name}</h3>
                <h5 className={`text-sm ${isHovered ? 'text-gray-700' : 'text-gray-500'} transition-colors duration-300`}>{cuisines.join(", ")}</h5>
                <h4 className={`text-sm ${isHovered ? 'text-yellow-600' : 'text-gray-700'} transition-colors duration-300`}>{`${avgRating} stars ✨`}</h4>
                <h4 className={`text-sm ${isHovered ? 'text-green-600' : 'text-gray-700'} transition-colors duration-300`}>{costForTwo}</h4>
                <h4 className={`text-sm ${isHovered ? 'text-purple-600' : 'text-gray-700'} transition-colors duration-300`}>{`${resData?.info.sla.deliveryTime}  minutes 🚀`}</h4>
            </div>
        </div>
    )
}
// Higher order component
const withPopularLabel = (WrappedComponent) => {
    // Returns a component
    return ({ resData }) => {
        return (
            <div>
                <label className="absolute bg-black text-white ml-3 mt-2 p-1.5 rounded-lg">Most Popular</label>
                <WrappedComponent resData={resData} />
            </div>
        );
    };
};
export {withPopularLabel}
export default RestaurantCard;
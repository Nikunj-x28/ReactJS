import {CDN_URL} from "../utils/constants";
const RestaurantCard = ({resData})=>{
    const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
    } = resData?.info;
    return (
        <div className="res-card">
            <img 
            className="res-logo"
            alt ="restaurant logo"
            src={CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h4>{`${avgRating} stars ✨`}</h4>
            <h4>{costForTwo}</h4>
            <h4>{`${resData?.info.sla.deliveryTime}  minutes 🚀`}</h4>
        </div>
    )
}
export default RestaurantCard;
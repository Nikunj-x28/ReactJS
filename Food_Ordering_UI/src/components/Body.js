import { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard ,{withPopularLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Filter from "./Filter";
import useRating from "../utils/useRating";
import useOnlineStattus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurants";
import OfflinePage from "./OfflinePage";
const Body =()=>{
// useState is used to create a state variable
// State Variable is local to that component

    // following is also a valid syntax
    // const arr = useState(resList);
    // const [restaurants,setRestaurants] = arr;
    
    const isOnline = useOnlineStattus();
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const restaurants = useRestaurants({setFilteredRestaurants});
    const RestaurantPromoted = withPopularLabel(RestaurantCard);
    
    if(isOnline === false)
        return (<OfflinePage/>);

    return (filteredRestaurants&&filteredRestaurants.length === 0)?<>
         <Filter restaurants={restaurants}
            setFilteredRestaurants={setFilteredRestaurants}/>
        <Shimmer/>
    </>
    :(
        
        <div className="body">
            {console.log(restaurants)}
            <Filter restaurants={restaurants}
            setFilteredRestaurants={setFilteredRestaurants}/>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant)=>{
                        const rating = useRating(restaurant.info.totalRatingsString); // Calculate rating here
                        return (
                            <Link
                                key={restaurant.info.id}
                                to={"./restaurant/" + restaurant.info.id}
                                className="link-reset">
                                {
                                    rating > 2000 // Use the calculated rating here
                                        ? <RestaurantPromoted resData={restaurant} />
                                        : <RestaurantCard resData={restaurant} />
                                }

                            </Link>
                        );
                    })
                }
            </div>
        </div>
    )
}
export default Body;
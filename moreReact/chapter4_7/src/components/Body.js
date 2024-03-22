import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import useOnlineStattus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurants";
import OfflinePage from "./OfflinePage";
import useRestaurants from "../utils/useRestaurants";
const Body =()=>{
// useState is used to create a state variable
// State Variable is local to that component

    // following is also a valid syntax
    // const arr = useState(resList);
    // const [restaurants,setRestaurants] = arr;
    
    const isOnline = useOnlineStattus();
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const restaurants = useRestaurants({setFilteredRestaurants});
    
    if(isOnline === false)
        return (<OfflinePage/>);

    return (filteredRestaurants.length === 0)?<>
         <Filter restaurants={restaurants}
            setFilteredRestaurants={setFilteredRestaurants}/>
        <Shimmer/>
    </>
    :(
        <div className="body">
            <Filter restaurants={restaurants}
            setFilteredRestaurants={setFilteredRestaurants}/>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant)=>{
                        return(
                        <Link 
                        // key should be on the parent JSX
                        key={restaurant.info.id}
                        to={"./restaurant/"+restaurant.info.id}
                        className="link-reset">
                            <RestaurantCard 
                            resData={restaurant}
                            />
                        </Link>
                        );
                    })
                }
            </div>
        </div>
    )
}
export default Body;
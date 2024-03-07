import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body =()=>{
// useState is used to create a state variable
// State Variable is local to that component

    const [restaurants,setRestaurants] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                  onClick={()=>{
                      const filteredList = restaurants.filter((restaurant)=>{
                        return restaurant.info.avgRating > 4.4;
                      })
                      setRestaurants(filteredList);
                  }}
                >
                  Top Rated Restaurants
                </button>
            </div>
            {/* <div className="Search">Search</div> */}
            <div className="res-container">
                {
                    restaurants.map((restaurant)=>{
                        return(
                        <RestaurantCard
                           key={restaurant.info.id} 
                           resData={restaurant}
                        />
                        );
                    })

                }
            </div>
        </div>
    )
}
export default Body;
import { useState,useEffect } from "react";
import { RES_URL } from "../utils/constants";
const useRestaurants = ({setFilteredRestaurants})=>{
    const [restaurants,setRestaurants] = useState([]);
    useEffect(()=>{
        // runs after the body is rendered
        fetchData();
    },[])
    const fetchData=async ()=>{
        const response = await fetch(
            RES_URL
        );
        const resJson = await response.json();
        setRestaurants(
            // optional chaining
            resJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurants(
            resJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    }
    return restaurants;
}
export default useRestaurants;
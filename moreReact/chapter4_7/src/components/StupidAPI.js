const StupidAPI = ({resInfo,one,two})=>{
    const {
        name,
        cuisines,
        costForTwoMessage
        // search more data in API
        // cloudinaryImageId,
        // avgRating,
        // deliveryTime
    } = resInfo?.data?.cards[one]?.card?.card?.info;
    // console.log(one)
    // console.log(resInfo.data.cards[one].card.card.info)
    const {itemCards} = resInfo?.data?.cards[two]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{costForTwoMessage}</h2>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((item)=>{
                            return(
                                <li key={item.card.info.id}>
                                {item.card.info.name} - {"Rs."}{item.card.info.price/100 ||
                                item.card.info.defaultPrice/100}
                                </li>
                            )
                    })
                }
            </ul>
        </div>
    )    
}
export default StupidAPI;
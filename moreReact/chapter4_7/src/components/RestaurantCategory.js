import ItemList from "./ItemList"
const RestaurantCategory = ({data})=>{
        console.log(data)
        return (
            <div className="w-6/12 mx-auto my-3 p-4 bg-gray-100 shadow-lg flex flex-col justify-between">
                {/* header */}
                <div className="flex justify-between">
                    <span className="font-medium">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {/* Item values */}
                <div>
                    <ItemList items={data.itemCards}/>
                </div>
            </div>
        )
}
export default RestaurantCategory
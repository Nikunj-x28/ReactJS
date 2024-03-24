import { CDN_URL } from "../utils/constants";
const ItemList = ({items})=>{
    return(
        <>
            {
                items&&items.map((item)=>
                            <div key={item.card.info.id}
                            className="p-2 m-2 border-b border-gray-400 text-left flex">
                            <div className="w-9/12">
                                <div className="py-2">
                                    <span className="">{item.card.info.name}</span>
                                    <span>{" - Rs. "}{item.card.info.price?
                                        item.card.info.price/100
                                        :item.card.info.defaultPrice/100
                                    }</span>
                                </div>
                                <div>
                                    <p>{item.card.info.description}</p>
                                </div>
                            </div>
                            <div className="w-3/12">
                                <div className="relative h-32">
                                    <img className="h-full w-full object-cover" src={CDN_URL+item.card.info.imageId} alt="image"/>
                                    <div className="absolute bottom-0 right-0 mb-2 mr-2">
                                        <button className="px-2 py-1 bg-white shadow-lg text-sm">Add +</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            }
        </>
    )
}
export default ItemList;
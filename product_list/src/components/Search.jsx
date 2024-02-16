export default function Search({filtertext,inStock,
onFilterChange,onStockClick}){
     //  console.log(filtertext)
     return(
        <form>
        <input type="text" 
        value={filtertext}
        placeholder="Search..."
        onChange={(e)=>{
            onFilterChange(e.target.value)
        }} />
        <label>
            <input type="checkbox" 
            checked={inStock}
            onChange={(e)=>{
                onStockClick(e.target.checked)
            }}/>
            {' '} Only show products in stock
        </label>
        </form>
     )
}

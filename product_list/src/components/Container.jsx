import Items from './Items.jsx'
export default function Container({products,filtertext,inStock}){
        console.log(filtertext)
        const rows = []
        products.forEach(product => {
            if(filtertext){
                //console.log(filtertext)
                if(product.name.toLowerCase().indexOf(filtertext.toLowerCase()) === -1) return;
            }
            
            if(inStock && !product.stocked) return;
            rows.push(
                <Items key={product.id} data={product} />
            )
        });
        return(
            <>
                <div>
                   Category{'     '}Name{'     '}Price
                </div>
                <div>
                    { rows }
                </div>
            </>
        )
}
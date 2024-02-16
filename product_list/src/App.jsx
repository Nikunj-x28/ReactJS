import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import Container from './components/Container';
const PRODUCTS = [
  {id:1 ,category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {id:2 ,category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {id:3 ,category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {id:4 ,category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {id:5 ,category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {id:6 ,category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];
function App() {
  const [filtertext,setFiltertext] = useState('');
  const [inStock,setInStock] = useState(false);
  return (
    <>
      <Search
         filtertext={filtertext}
         inStock={inStock}
         onFilterChange = {setFiltertext}
         onStockClick = {setInStock}
      />
      <Container products = {PRODUCTS}
        filtertext={filtertext}
        inStock={inStock}
      />
    </>
  )
}

export default App

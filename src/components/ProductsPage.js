import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"
import data from "../data.json"
import { useState } from "react"

export default function ProductsPage(){
    const [products, setProducts] = useState(data)

    function handleChange(search){
        let str = search.toLocaleLowerCase()
        const results = products.filter((element)=> element.name.toLowerCase().includes(str))
        setProducts(results)
    }

    return (
        <>
        <SearchBar handleChange={(param) => handleChange(param)}/>
        <ProductTable products={products}/>
        </>
    )
}
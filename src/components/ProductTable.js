import ProductRow from "./ProductRow"

export default function ProductTable(props){
    return (
        <>
        <ProductRow products={props.products}/>
        </>
    )
}
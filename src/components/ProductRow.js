export default function ProductRow({products}){
    return (
<div className="row justify-content-center">
<div className="col-8" style={{display: "flex", justifyContent: "center"}}>
<table class="table" style={{width:"80%"}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    {products.map((item,i)=>{
        return(
    <tr style={{color: `${item.inStock ? "black": "red"}`}}>
      <th scope="row w-100">{i+1}</th>
      <td>{item.name}</td>
      <td>{item.price}</td>
    </tr>)
    })}
  </tbody>
</table>
</div>
</div>
    )
}
import "./ProductView.css"
import {useParams} from "react-router-dom"
import productdata from "../../data"


function Productview() {

  const {id} = useParams()

  const selectedProduct = productdata.find((ProductObject)=>ProductObject.id ===id)
console.log(selectedProduct)

return (
  <div className="view">
  <h1 className="title">~{selectedProduct.title}~</h1>
  <p className="info">
      <img src={selectedProduct.product.avatar} alt="author" height={"40px"} className="product-img"/>
    
  </p><br/>
  <span className="productinfo"> {selectedProduct.product.name}</span><br/><br/>
  <span className="price">{selectedProduct.price}</span>
  <br/><br/>
  <span className="content" >{selectedProduct.content}</span>
  </div>


)
}

export default Productview
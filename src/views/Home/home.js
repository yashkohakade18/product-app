import "./Home.css";
import productdata from "../../data";
import ProductCard from "../../Components/product card/ProductCard";

function Home() {

  
  return ( 
    
  
    
    <div className="product-container">
    {
      productdata.map((ProductObject, i)=>{
      const {
        id,
        title,
        content,
        product,
        price,
      
      } = ProductObject

      return (
        <ProductCard
        key={i}
        id={id}
        title={title}
        content={content}
        product={product}
        price={price}
        
        />)
      


    
      
    })
  }
    </div>
    
 
  )
}

export default Home
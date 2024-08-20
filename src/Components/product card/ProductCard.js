import "./ProductCard.css";

import {Link} from 'react-router-dom'

function ProductCard({id,title,content,product,price,})
{
    return(
      
        <Link className="product-card" to={`/Product/${id}`} >
          
          <h2 className="product-title">{title}</h2>
         
          <div className="author-card">
            <img src={product.avatar} alt="author" className="author-avatar"/>
          
          </div>
          <p className="product-name">{product.name}</p>
          <p className="product-price">{price}</p> 
     
       </Link>
    )
}

export default ProductCard
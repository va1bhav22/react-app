import React from 'react'
import { Link } from 'react-router-dom'
const ProductCards = ({item}) => {
  return (
    <div className='CardWrapper'>
        <div className='iconWrapper'>
            {/* <div><i class="fa-solid fa-arrow-left"></i></div> */}
            <div className='Title'>{item.title}</div>
            <div><i className="fa-regular fa-heart"></i></div>
        </div>
        <div className='ImgWrapper'>
            <img className='img' src={item.thumbnail} alt="" />
        </div>
        <div className='InfoWrapper'>
           <div className="Product_container">
           <div className='brand'>
                {item.brand}
            </div>
            
            <div className='cat'>
                {item.category}
            </div>
           
            <div>
                
                <div className='Price'>$ {item.price}</div>
            </div>
            <div>
            <Link to={`/disc/${item.id}`}><div><i className="fa-solid fa-arrow-right"></i></div></Link>
        </div>
           </div>
           
        </div>
        
    </div>
  )
}

export default ProductCards
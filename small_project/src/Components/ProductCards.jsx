import React from 'react'

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
           <div>
           <div>
                {item.brand}
            </div>
            
            <div>
                {item.category}
            </div>
           
            <div>
                <div></div>
                <div></div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default ProductCards
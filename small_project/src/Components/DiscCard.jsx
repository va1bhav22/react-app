// const slideRight = () => {
import React from 'react'
import { nanoid } from 'nanoid'
import { useState } from 'react';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
const DiscCard = ({item}) => {
const [cur,setCur]=useState(0);
let img=item.images
let length= img.length
    
if(!Array.isArray(item.images) ||  length <= 0)
{
    return null
}
    
  return (
    <div>
        <div>
            {/* <div><img src={item.thumbnail} alt="" /></div> */}
            
           <div className='slider'>
            <FaArrowAltCircleLeft className='LeftArr' />
            <FaArrowAltCircleRight className='right'  />
          
           {
                item.images?.map((ele,i)=>{
                    return(
                        <img key={nanoid()} src={ele} alt="" className='imges'/>
                    )
                })
            }
           
           </div>
        </div>
        <div>
            <div>
                <div>{item.title}</div>
                <div>{item.brand}</div>
                <div>{item.category}</div>
                <div>{item.description}</div>
                <div>{item.rating}</div>
                <div>{item.stock}</div>
                <div>{item.discountPercentage}</div>
                <div><button>ADD TO CART</button></div>
            </div>
        </div>
    </div>
  )
}

export default DiscCard
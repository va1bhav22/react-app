import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import ProductCards from '../Components/ProductCards'

const  API='https://dummyjson.com/products'
const HomePage = () => {
    let [ApiData,setApiData]= useState([]);
   

    const FetchData=()=>{
  
        axios.get(API)
        .then((res)=>setApiData(res.data.products))
        .catch((err)=>console.log("error:",err))
  }

  console.log(ApiData);
    useEffect(()=>{
        FetchData()
    },[])
    


  return (
    <div className='MainHome'>
      {
        ApiData.map((item)=>{
            return <ProductCards key={item.id} item={item} />
        })
      }
    </div>
  )
}

export default HomePage
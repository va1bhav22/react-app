import React from 'react'
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import { useParams } from 'react-router';
import DiscCard from '../Components/DiscCard';
const DiscriptionPage = () => {
  const [DiscriptionData, setDiscriptionData] = useState({});
  const {id} = useParams();
  console.log(id)
  const getDiscriptionData = () =>{
    axios
    .get(`https://dummyjson.com/products/${id}`)
    .then((res) => {
      setDiscriptionData(res.data)
      console.log(DiscriptionData);
    })
    .catch((e) => {
      console.log(e);
     
    });
  }
  useEffect(() => {
    getDiscriptionData()
  }, []);

  return (
   <DiscCard item={DiscriptionData}/>
  )
}

export default DiscriptionPage
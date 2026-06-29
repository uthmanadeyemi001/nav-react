import React,{useState,useEffect} from 'react'
import axios from 'axios'


export const useProducts = () => {

    const [productsArray , setproductsArray] = useState([])

    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then((res)=>setproductsArray(res.data.products || []))
    },[])

  return {
    productsArray
  }
}

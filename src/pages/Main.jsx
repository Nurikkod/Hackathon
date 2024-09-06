import React from 'react'
import { useState,useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import Details from './Details'


const Main = ({setData}) => {
let arr = [1,2,3,4]
const [products,setProducts] = useState([])
useEffect(() => {
  const getData = async() => {
    let {data} = await axios("https://fakestoreapi.com/products ")
    setProducts(data);
   
   }
   getData()
},[])







const handleClick = () => {
  setData(arr)
}





  return (
    <>

<button onClick={handleClick}>
  Send
</button>
     
  <p>
    spinner
  </p>


<section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
   <div class="container max-w-[780px] mx-auto">

      <div class="flex flex-wrap -mx-4">
        {
          products.map((el) => (
            <Card product = {el}/>
          ))
        }
      
        
      </div>
   </div>
</section> 

      

    </>


  )
}

export default Main
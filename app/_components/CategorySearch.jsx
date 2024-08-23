"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, {useEffect, useState} from "react";
import GloabApi from "../_utils/GloabApi";
import Image from 'next/image'


const CategorySearch = () => {

  const[categoryList, setCategoryList] = useState([]);

  const getCategoryList=() =>{
    GloabApi.getCategory().then(resp =>{
      console.log(resp.data.data)
      setCategoryList(resp.data.data);
    })
  }


  useEffect(() =>{
    getCategoryList()
  },[])





  return (
    <div>
      <div className="items-center flex flex-col mb-10">
        <h2 className="font-bold text-4xl tracking-wide">Search Doctor</h2>
        <h2 className="text-gray-500 text-2xl">
          Find a doctor and schedule your appointment today
        </h2>
        <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
          <Input type="email" placeholder="Search..." />
          <Button type="submit">< Search className = 'h-4 ml-1'/> Search</Button>
        </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 "> 
  {  categoryList.length>0 ?
  
  categoryList.map((item, index) => (
    <div key={index} className="flex flex-col bg-red-100 items-center gap-2 p-2 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
      <Image 
        src={item.attributes?.ImageURL?.data[0]?.attributes?.formats?.medium?.url || item.attributes?.ImageURL?.data[0]?.attributes?.url} 
        alt="icon" 
        height={40} 
        width={40} 
        className="rounded-full"
      />
      <label className="text-sm font-semibold">{item.attributes?.Name}</label>
    </div>
  ))
:
    [1,2,3,4,5,6,7].map((item, index) =>(
      <div className=" h-[120px] bg-slate-600 w-[120px] animate-pulse">
                
         </div>
    ))
}
</div>

   
  </div>
  );
};

export default CategorySearch;

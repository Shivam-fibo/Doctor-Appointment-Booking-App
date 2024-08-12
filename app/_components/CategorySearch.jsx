"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, {useEffect} from "react";
import GloabApi from "../_utils/GloabApi";



const CategorySearch = () => {
  useEffect(() =>{
    getCategoryList
  },[])
  const getCategoryList=() =>{
    GloabApi.getCategory().then(resp =>{
      console.log(resp)
      console.log("testing")
    })
  }
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
    </div>
  );
};

export default CategorySearch;

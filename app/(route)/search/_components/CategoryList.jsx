"use client"
import React, {useEffect, useState} from "react";
import GloabApi from "@/app/_utils/GloabApi";
import Link from "next/link";
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
  } from "lucide-react"
   
  import {
    Command,


    CommandInput,
    CommandItem,
    CommandList,
 
  } from "@/components/ui/command"
import Image from "next/image";
import { usePathname } from "next/navigation";

const CategoryList = () => {
    const[categoryList, setCategoryList] = useState([]);
      const paramas = usePathname();
      const category = paramas.split('/')[2];
      useEffect(() =>{
        getCategoryList();
        console.log(paramas)
        console.log(category)
      },[])



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
    <div className="h-screen flex fixed flex-col mt-5 overflow-hidden">
    <Command className="h-full rounded-lg bg-gray-50 border shadow-md md:min-w-[450px] overflow-auto">
      <CommandInput placeholder="Search..." />
      <CommandList className = "overflow-visible">
  
          {categoryList && categoryList.map((item, index) => (
            <CommandItem key={index}>
              <Link href={'/search/' + item.attributes.Name} className='p-2 flex gap-2 items-center hover:cursor-pointer'>
                <Image width={25} height={25} alt="image" src={item.attributes?.ImageURL?.data[0]?.attributes?.url} />
                <label className="hover:cursor-pointer text-black-200 pl-5">{item.attributes?.Name}</label>
              </Link>
            </CommandItem>
          ))}

      </CommandList>
    </Command>
  </div>
  

  )
}

export default CategoryList
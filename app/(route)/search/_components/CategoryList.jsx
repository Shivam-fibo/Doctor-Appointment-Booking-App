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
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import Image from "next/image";

const CategoryList = () => {
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
    <div className="h-screen flex flex-col fixed mt-5">
 <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {categoryList && categoryList.map((item, index) =>(
            <CommandItem key={index} >
                <Link href={' '} className = 'p-2 flex gap-2 overflow-visible hover:cursor-pointer'>
               <Image width={25} height={25} src={item.attributes?.ImageURL?.data[0]?.attributes?.url} />
                <label className="hover:cursor-pointer text-green-200 pl-5">  {item.attributes?.Name}</label>
                </Link>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
      
      </CommandList>
    </Command>
    </div>
  )
}

export default CategoryList
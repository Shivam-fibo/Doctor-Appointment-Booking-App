import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Header = () => {
  const Menu = [
    {
      id:1,
      name: 'Home',
      path: '/' 
    },
    {
        id:2,
        name: 'Explore',
        path: '/explore'
    },
    {
        id:3,
        name: 'Contact',
        path: '/contact'
    }
  ]
  return (
    <div className = 'flex itmes-center justify-between p-4 shadow-sm'> 
      <div className = 'flex items-center gap-10'>

      <Image 
  src="/logo.svg" 
  width={50} 
  height={50} 
  alt="image" 
/>

      <ul className = 'md:flex gap-8  hidden'> 
        {Menu.map((item, index) =>(
        <Link href = {item.path}>
        <li className = 'hover:text-gray-200 cursor-pointer hover:scale-105 translate-x-1'>{item.name}</li>
        </Link>
          ))}
      </ul>
          </div>
          <Button>Get Started</Button>
    </div>
  );
};

export default Header;

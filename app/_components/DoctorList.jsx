"use client"; 
import React, { useEffect } from "react";
import Image from "next/image";

const DoctorList = ({ doctorList }) => {
  return (
    <div>
      <div className="mb-10">
        <h3 className="font-bold text-xl">Popular Doctor</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-10"> 
        {doctorList.length > 0 ? 
                  doctorList.map((doctor, index) => {
            const imageUrl =  doctor.attributs?.Image?.data[0]?.attributes?.url;
            console.log(imageUrl);
            const name = doctor.attributes?.Name;
            const specialty = doctor.attributes.slider?.data.attributes.Name
            const address = doctor.attributes?.Address
           
            return (
              <div key={index} className="border-[1px] rounded-lg p-3 ">
            
                  <Image
                    src={imageUrl}
                    alt="doctor"
                    height={500}
                    width={500}
                    className="h-[200px] w-full object-cover"
                  />
            
                <div>
                   <h2>Name:{name}</h2>  <h3>Specialty:{specialty}</h3> 
                  <p>Address : {address}</p>
                </div>
                <div className="border-[1px] border-blue-600 rounded-full p-3 px-2 text-center hover:cursor-pointer mt-3 hover:text-gray-50 hover:bg-slate-600">
                  Book Now
                </div>
              </div>
            );
          })
          :
          
             [1,2,3,4,5,6].map((item,index) =>(
               <div className=" h-[220px] bg-slate-600 w-full animate-pulse">
                
         </div>
             ))
         
         }
      </div>
    </div>
  );
};

export default DoctorList;

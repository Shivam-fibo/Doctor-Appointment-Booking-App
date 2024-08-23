"use client"
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import React, { useEffect, useState } from 'react'
import GloabApi from "./_utils/GloabApi";

export default function Home() {
  const[doctorList, setDoctorList] = useState([]);
  const getDoctorList = async () => {
    try {
      const resp = await GloabApi.getDoctor();
      setDoctorList(resp.data.data);
      console.log(resp.data.data);
    

    } catch (error) {
      console.error("Error fetching doctor list:", error);
    }
  };

  useEffect(() => {
    getDoctorList();
  }, []);
  return (
    <div>
     <Hero/>
     <CategorySearch/>
     <DoctorList doctorList = {doctorList} />
    </div>
  );
}

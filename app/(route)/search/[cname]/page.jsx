"use client"

import DoctorList from '@/app/_components/DoctorList'
import GloabApi from '@/app/_utils/GloabApi'
import React, { useEffect, useState } from 'react'

const Search = ({params}) => {
  const[doctorList, setDoctorList] = useState([])
  useEffect(() =>{
    getDoctor()
  },[params.cname])
  const getDoctor = () =>{
    GloabApi.getDoctorByCategory(params.cname).then(response =>{
      console.log(response.data);
      setDoctorList(response.data.data)
    })
  }
  return (
    <div>
      <DoctorList heading = {params.cname} doctorList={doctorList}/>
    </div>
  )
}

export default Search

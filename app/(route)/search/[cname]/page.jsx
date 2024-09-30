"use client"

import DoctorList from '@/app/_components/DoctorList'
import GloabApi from '@/app/_utils/GloabApi'
import React, { useEffect, useState } from 'react'

const Search = ({params}) => {
  const[doctorList, setDocotorList] = useState([])
  useEffect(() =>{
    getDoctor()
  },[])
  const getDoctor = () =>{
    GloabApi.getDoctorByCategory(params.cname).then(response =>{
      setDocotorList(response.data.data)
      console.log(response.data.data)
    })
  }
  return (
    <div>
      <h1>Hello Everyone</h1>
      {/* <DoctorList heading = {params.cname} doctorList={doctorList}/> */}
    </div>
  )
}

export default Search

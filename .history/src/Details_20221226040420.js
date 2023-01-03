import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
  const {empid} = useParams()
  const [records, setRecords] = useState({})

  useEffect(() => {  
    fetch("http://localhost:8000/employee/"+empid).then((res) => {
        return res.json()
    }).then((resp) => { 
        console.log(resp)
        setRecords(resp)

    })

  }, [empid])




  return (
    <div className="grid place-items-center text-2xl bg-slate-400 h-screen">
      
      {records &&
        <div className="mb-2">
          <h1>{records.name}</h1>
          <h1>{records.email}</h1>
          <h1>{records.phone}</h1>
          <h1>{records.dept}</h1>
          <h1>{records.sex}</h1>

        </div>
      }     
        
    </div>
  )
}

export default Details
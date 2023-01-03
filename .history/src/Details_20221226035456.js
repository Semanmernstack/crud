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
    <div>
      
      {records &&
        <h1>{records.name}</h1>
      }     
        
    </div>
  )
}

export default Details
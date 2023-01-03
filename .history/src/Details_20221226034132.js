import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
  const {detailId} = useParams()
  const [records, setRecords] = useState({})

  useEffect(() => {  
    fetch("http://localhost:8000/employee/"+detailId).then((res) => {
        return res.json()
    }).then((resp) => { 
        console.log(resp)
        setRecords(resp)

    })

  }, [detailId])




  return (
    <div>
        
        
     <div>
     {records && 

      <p>{records.name}</p>
     }
     </div>
            

          
        
    </div>
  )
}

export default Details

import React, { useEffect, useState } from 'react'

function List() {  
    const [records, setRecords] = useState("")

    useEffect(() => {  
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json()
        }).then((resp) => { 
            console.log(resp)
            setRecords(resp)

        })

    }, [])
  return (
    <div className="overflow-x-auto lg:max-w-7xl mx-auto  p-2 items-center   ">
        
        <p>Staff Employement List</p>

        
        <table className="  w-[100%]  border-1   " >
            
            <thead>
                <tr className="border-b">
                    <th scope='col' className=" lg:py-6 lg:px-12 py-3 px-6">Id</th>
                    <th scope='col' className=" lg:py-6 lg:px-12 py-3 px-6">Name</th>
                    <th scope='col' className=" lg:py-6 lg:px-12 py-3 px-6">Email</th>
                    <th scope='col' className=" lg:py-6 lg:px-12 py-3 px-6">Sex</th>
                    <th scope='col' className=" lg:py-6 lg:px-12 py-3 px-6">Dept</th>
                    <th scope='col' className=" lg:py-6 lg:px-12 py-3 px-6">Sex</th>
                    
                </tr>
            </thead>
        
            <tbody>
                {
                    records &&
                    records.map((record) => (
                    <tr className="border-b" key={record.id}>
                        <td className=" lg:py-6 lg:px-12 py-3 px-6">{record.id}</td>
                        <td className=" lg:py-6 lg:px-12 py-3 px-6" >{record.name}</td>
                        <td className=" lg:py-6 lg:px-12 py-3 px-6">sey@mail.com</td>
                        <td className=" lg:py-6 lg:px-12 py-3 px-6">male</td>
                        <td className=" lg:py-6 lg:px-12 py-3 px-6">engineering</td>
                        <td className=" lg:py-6 lg:px-12 py-3 px-6">male</td>
                    </tr>
                    ))
                }
                
            </tbody>
            
        </table>
        

    </div>
  )
}

export default List
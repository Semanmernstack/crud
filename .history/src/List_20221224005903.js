
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
    <div className="overflow-x-hidden lg:max-w-7xl mx-auto  p-2 items-center bg-violet-300 h-screen   ">
        
        <p>Staff Employement List</p>

        
        <table className="  w-[100%] bg-violet-300   " >
            
            <thead>
                <tr className="border-b">
                    <th scope='col' className=" lg:py-6 lg:px-12 py-3 px-6">Id</th>
                    <th scope='col' className=" lg:py-6 lg:px-12 py-3 px-6">Name</th>
                    <th scope='col' className=" lg:py-6 lg:px-12 py-3 px-6">Email</th>
                    <th scope='col' className=" lg:py-6 lg:px-12 py-3 px-6">Sex</th>
                    <th scope='col' className=" lg:py-6 lg:px-12 py-3 px-6">Dept</th>
                    <th scope='col' className=" lg:py-6 lg:px-12 py-3 px-6">phone</th>
                    <th scope='col' className=' lg:py-6 lg:px-12 py-3 px-6'>Select</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    records &&
                    records.map((record) => (
                    <tr className="border-b" key={record.id}>
                        <td className=" lg:py-6 lg:px-12 py-3 px-4">{record.id}</td>
                        <td className=" lg:py-6 lg:px-12 py-3 px-4" >{record.name}</td>
                        <td className=" lg:py-6 lg:px-12 py-3 px-4">{record.email}</td>
                        <td className=" lg:py-6 lg:px-12 py-3 px-4">{record.sex}</td>
                        <td className=" lg:py-6 lg:px-12 py-3 px-4">{record.dept}</td>
                        <td className=" lg:py-6 lg:px-12 py-3 px-4">{record.phone}</td>
                        <td className='flex flex-col'>
                            <a href="">Edit</a>
                            <a href="">Remove</a>
                            <a href="">Details</a>
                        </td>
                    </tr>
                    ))
                }
                
            </tbody>
            
        </table>

        
        

    </div>
  )
}

export default List
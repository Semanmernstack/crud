import  axios  from 'axios'
import React, { useEffect, useState } from 'react'

function List() {  
    const [employees, setEmployees] = useState(null)

    useEffect(() => {  
        fetch("http://localhodt:8000/employee").then((res) => {
            return res.json()
        }).then((resp) => {
            console.log(resp)

        })

    }, [])
  return (
    <div className="overflow-x-auto lg:max-w-7xl mx-auto  p-2 items-center   ">
        
        <p>Staff Employement List</p>

        
        <table className="  w-[100%]  border-1   " >
            <div className="">
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
                <tr className="border-b">
                    <td className=" lg:py-6 lg:px-12 py-3 px-6">1</td>
                    <td className=" lg:py-6 lg:px-12 py-3 px-6" >seyi abejide</td>
                    <td className=" lg:py-6 lg:px-12 py-3 px-6">sey@mail.com</td>
                    <td className=" lg:py-6 lg:px-12 py-3 px-6">male</td>
                    <td className=" lg:py-6 lg:px-12 py-3 px-6">engineering</td>
                    <td className=" lg:py-6 lg:px-12 py-3 px-6">male</td>
                </tr>
            </tbody>
            </div>
        </table>
        

    </div>
  )
}

export default List
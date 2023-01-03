
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function List() {  
    const {empid} = useParams()
    const [records, setRecords] = useState("")
    const navigate = useNavigate();

    const loadDetail = (id) => {
        navigate("/employee/details/"+id);
    }
    const loadEdit = (id) => {
        navigate("/employee/edit/"+id);
    }
    const loadDelete = (id) => {
        if(window.confirm("do yu want to remove")) {
            fetch("http://localhost:8000/employee/"+empid,{
                method:"DELETE"

            }).then((res) => {
                alert("succesfull")
            })  
        }       
    }

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
        
        <p className='text-centre justify-center flex mb-3 text-lg text-blue-500 font-serif'> Employement Listing</p>
        <Link className='cursor-pointer border p-1 mb-1 animate-pulse' to="/employee/create">Add New Employee</Link>
        
        <table className="mt-3  w-[100%] bg-violet-900 text-sm md:text-sm lg:text-lg   " >
            
            <thead>
                <tr className="border-b bg-slate-600">
                    <th scope='col' className=" lg:py-6 lg:px-12 py-4 px-6">Id</th>
                    <th scope='col' className=" lg:py-6 lg:px-12 py-4 px-6">Name</th>
                    <th scope='col' className=" lg:py-6 lg:px-12 py-4 px-6">Email</th>
                    <th scope='col' className=" lg:py-6 lg:px-12 py-4 px-6">Sex</th>
                    <th scope='col' className=" lg:py-6 lg:px-12 py-4 px-6">Dept</th>
                    <th scope='col' className=" lg:py-6 lg:px-12 py-4 px-6">phone</th>
                    <th scope='col' className=' lg:py-6 lg:px-12 py-4 px-6'>Select</th>
                    
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
                            <button onClick={() => {loadDetail(record.id)}}>Details</button>
                            <button onClick={() => {loadEdit(record.id)}}>Edit</button>
                            <button onClick={() => {loadDelete(record.id)}}>Remove</button>
                            
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
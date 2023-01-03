
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [sex, setSex] = useState("")
  const [dept, setDept] = useState("")
  const [phone, setPhone] = useState("")
  const navigate = useNavigate()
  const handlesubmit = (e) => {
    e.preventDefault()
    const userData = {id,name,email,sex,dept,phone}
    
    fetch("http://localhost:8000/employee",{
      method:"POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userData),
    }).then((res) => {
        alert('Employee Data Updated')
        navigate("/")
    })
  }
  return (
    <div className="flex flex-col h-screen bg-orange-500  text-center ">
        <div>
            <p className="mb-4 mt-2 text-lg font-extrabold">Staff Overview</p>
        </div>
        <form onSubmit={handlesubmit}>
          <div className="flex text-center p-3 justify-center border max-w-6xl mx-auto  items-center flex-col gap-2">
            <div className="flex flex-col  items-center">
              <span>Id</span>
              <input value={id} onChange={(e) => setId(e.target.value)} className='w-full mt-2 outline-none border-none p-2 rounded-lg'   type="text" />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} className='w-full mt-2 outline-none border-none p-2 rounded-lg' type="text" required />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Email</span>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full mt-2 outline-none border-none p-2 rounded-lg' type="email" required />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Sex</span>
              <input value={sex} onChange={(e) => setSex(e.target.value)} className='w-full mt-2 outline-none border-none p-2 rounded-lg' type="text" required />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Dept</span>
              <input value={dept} onChange={(e) => setDept(e.target.value)} className='w-full mt-2 outline-none border-none p-2 rounded-lg' type="text" required />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Phone</span>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className='w-full mt-2 outline-none border-none p-2 rounded-lg' type="number" required />
            </div>
            <button className="border p-2 w-24 cursor-pointer hover:bg-rose-100">Update</button>
          </div>
        </form>
    </div>
  )
}

export default Create
import e from 'express'
import React, { useState } from 'react'

function Create() {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [sex, setSex] = useState("")
  const [dept, setDept] = useState("")
  const [phone, setPhone] = useState("")

  const handlesubmit = () => {
    e.preventDefault()
    console.log({id,name,email,sex,dept,phone})
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
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full mt-2 outline-none border-none p-2 rounded-lg' type="email" />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Sex</span>
              <input value={sex} onChange={(e) => setSex(e.target.value)} className='w-full mt-2 outline-none border-none p-2 rounded-lg' type="text" />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Dept</span>
              <input value={dept} onChange={(e) => setDept(e.target.value)} className='w-full mt-2 outline-none border-none p-2 rounded-lg' type="text" />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Phone</span>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className='w-full mt-2 outline-none border-none p-2 rounded-lg' type="number" />
            </div>
            <button className="border p-2 w-24 cursor-pointer hover:bg-rose-100">Update</button>
          </div>
        </form>
    </div>
  )
}

export default Create
import React from 'react'

function Create() {
  return (
    <div className="flex flex-col h-screen bg-orange-500  text-center ">
        <div>
            <p className="mb-4 mt-2 text-lg font-extrabold">Staff Overview</p>
        </div>
        <form className="">
          <div className="flex text-center p-3 justify-center border max-w-6xl mx-auto  items-center flex-col gap-2">
            <div className="flex flex-col  items-center">
              <span>Id</span>
              <input className='w-full mt-2 outline-none border-none p-2 rounded-lg'   type="text" />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Name</span>
              <input className='w-full mt-2 outline-none border-none p-2 rounded-lg' type="text" required />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Email</span>
              <input className='w-full mt-2 outline-none border-none p-2 rounded-lg' type="email" />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Sex</span>
              <input className='w-full mt-2 outline-none border-none p-2 rounded-lg' type="text" />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Dept</span>
              <input className='w-full mt-2 outline-none border-none p-2 rounded-lg' type="text" />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Phone</span>
              <input className='w-full mt-2 outline-none border-none p-2 rounded-lg' type="number" />
            </div>
            <button className="border p-2 w-14 cursor-pointer hover:text-rose-100">Update</button>
          </div>
        </form>
    </div>
  )
}

export default Create
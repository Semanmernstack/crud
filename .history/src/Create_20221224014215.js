import React from 'react'

function Create() {
  return (
    <div className="flex flex-col  text-center ">
        <div>
            <p>Staff Overview</p>
        </div>
        <form className="">
          <div className="flex text-center p-3 justify-center  items-center flex-col gap-2">
            <div className="flex flex-col  items-center">
              <span>Id</span>
              <input className='w-full mt-2 outline-none border-none'   type="text" />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Name</span>
              <input className='w-full mt-2 outline-none border-none' type="text" required />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Email</span>
              <input className='w-full mt-2 outline-none border-none' type="email" />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Sex</span>
              <input className='w-full mt-2 outline-none border-none' type="text" />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Dept</span>
              <input className='w-full mt-2 outline-none border-none' type="text" />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Phone</span>
              <input className='w-full mt-2 outline-none border-none' type="number" />
            </div>
            <button>Update</button>
          </div>
        </form>
    </div>
  )
}

export default Create
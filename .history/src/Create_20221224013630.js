import React from 'react'

function Create() {
  return (
    <div className="flex flex-col justify-center text-center ">
        <div>
            <p>Staff Overview</p>
        </div>
        <form className="w-full">
          <div className="flex text-center p-3 justify-center mx-auto items-center flex-col gap-2">
            <div className="flex flex-col w-[500px] items-center">
              <span>Id</span>
              <input type="text" />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Name</span>
              <input type="text" required />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Email</span>
              <input type="email" />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Sex</span>
              <input type="text" />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Dept</span>
              <input type="text" />
            </div>
            <div className="flex flex-col w-[500px] items-center">
              <span>Phone</span>
              <input type="number" />
            </div>
            <button>Update</button>
          </div>
        </form>
    </div>
  )
}

export default Create
import React from 'react'

function Create() {
  return (
    <div className="flex flex-col justify-center text-center ">
        <div>
            <p>Staff Overview</p>
        </div>
        <form className="w-full">
          <div className="flex text-center justify-center mx-auto items-center flex-col gap-2">
            <div>
              <span>Id</span>
              <input type="text" />
            </div>
            <div>
              <span>Name</span>
              <input type="text" required />
            </div>
            <div>
              <span>Email</span>
              <input type="email" />
            </div>
            <div>
              <span>Sex</span>
              <input type="text" />
            </div>
            <div>
              <span>Dept</span>
              <input type="text" />
            </div>
            <div>
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
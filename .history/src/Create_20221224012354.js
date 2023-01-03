import React from 'react'

function Create() {
  return (
    <div>
        <div>
            <p>Staff Overview</p>
        </div>
        <form >
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
        </form>
    </div>
  )
}

export default Create
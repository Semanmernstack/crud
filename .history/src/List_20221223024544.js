import React from 'react'

function List() {
  return (
    <div>
        <div>
            <p>Staff Employement List</p>
        </div>
        <table className='table-auto '>
            <thead>
            <tr className="">
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Sex</th>
                <th>Dept</th>
                <th>Sex</th>
                <th>Action</th>
            </tr>
            </thead>
        
            <tbody>
            <tr className="gap-5 ">
                <td>1</td>
                <td>seyi abejide</td>
                <td>sey@mail.com</td>
                <td>male</td>
                <td>engineering</td>
                <td>male</td>
            </tr>
            </tbody>
        </table>

    </div>
  )
}

export default List
import React from 'react'

function List() {
  return (
    <div>
        <div>
            <p>Staff Employement List</p>
        </div>
        <table className='table-auto gap-5'>
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
            <tr className="">
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
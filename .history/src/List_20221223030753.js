import React from 'react'

function List() {
  return (
    <div className="max-w-6xl mx-auto  p-3 ">
        
        <p>Staff Employement List</p>

        <div className="flex gap-5">
        <table className="table-auto   " >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Sex</th>
                    <th>Dept</th>
                    <th>Sex</th>
                    
                </tr>
            </thead>
        
            <tbody>
                <tr>
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

    </div>
  )
}

export default List
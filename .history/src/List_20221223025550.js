import React from 'react'

function List() {
  return (
    <div className="max-w-6xl mx-auto">
        
        <p>Staff Employement List</p>
        
        <table className="table-auto border-spacing-3">
            <thead>
                <tr>
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
  )
}

export default List
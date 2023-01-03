import React from 'react'

function List() {
  return (
    <div className="overflow-x-auto ">
        
        <p>Staff Employement List</p>

        
        <table className="w-full   " >
            <div className="">
            <thead>
                <tr className="border-l">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Sex</th>
                    <th>Dept</th>
                    <th>Sex</th>
                    
                </tr>
            </thead>
        
            <tbody>
                <tr className="border-l">
                    <td>1</td>
                    <td>seyi abejide</td>
                    <td>sey@mail.com</td>
                    <td>male</td>
                    <td>engineering</td>
                    <td>male</td>
                </tr>
            </tbody>
            </div>
        </table>
        

    </div>
  )
}

export default List
import React from 'react'

function List() {
  return (
    <div className=" p-3 ">
        
        <p>Staff Employement List</p>

        
        <table className="w-full   " >
            <div className="">
            <thead>
                <tr className="gap-5">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Sex</th>
                    <th>Dept</th>
                    <th>Sex</th>
                    
                </tr>
            </thead>
        
            <tbody>
                <tr className="gap-5">
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
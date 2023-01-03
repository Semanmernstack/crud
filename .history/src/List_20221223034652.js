import React from 'react'

function List() {
  return (
    <div className="overflow-x-auto   p-2 items-center   ">
        
        <p>Staff Employement List</p>

        
        <table className="  w-[100%]  border-1   " >
            <div className="">
            <thead>
                <tr className="border-b">
                    <th scope='col' className=" py-6 px-12">Id</th>
                    <th scope='col' className=" py-6 px-12">Name</th>
                    <th scope='col' className=" py-6 px-12">Email</th>
                    <th scope='col' className=" py-6 px-12">Sex</th>
                    <th scope='col' className=" py-6 px-12">Dept</th>
                    <th scope='col' className=" py-6 px-12">Sex</th>
                    
                </tr>
            </thead>
        
            <tbody>
                <tr className="border-b">
                    <td className=" py-6 px-12">1</td>
                    <td className=" py-6 px-12" >seyi abejide</td>
                    <td className=" py-6 px-12">sey@mail.com</td>
                    <td className=" py-6 px-12">male</td>
                    <td className=" py-6 px-12">engineering</td>
                    <td className=" py-6 px-12">male</td>
                </tr>
            </tbody>
            </div>
        </table>
        

    </div>
  )
}

export default List
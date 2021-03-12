import React from "react";


function EmployeeTable({ employees }) {
    return (
        <div className="container">
            {/* <div> {employees[0].phone}</div>
            <div> {employees[0].name.first}</div> */}
            <table className="table table-striped table-sortable text-center">

                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col" data-field="name" data-sortable="true">
                            <span>Name</span>
                        </th>
                        <th scope="col">
                            <span>Phone</span>
                        </th>
                        <th scope="col">
                            <span>Email</span>
                        </th>
                        <th scope="col">
                            <span>Age</span>
                        </th>
                    </tr>
                </thead>
                <tbody>



                    {
                        employees.map((employee) => {


                            return (
                                <tr>
                                    <td className="align-middle"> <img src={employee.picture.thumbnail} alt={employee.name.first} /> </td>
                                    <td className="align-middle"> {`${employee.name.first} ${employee.name.last}`} </td>
                                    <td className="align-middle">{employee.phone}</td>
                                    <td className="align-middle">{employee.email}</td>
                                    <td className="align-middle">{employee.dob.age}</td>
                                </tr>
                            )

                        })

                    }

                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable;
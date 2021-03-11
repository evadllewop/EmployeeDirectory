import React from "react";


function EmployeeTable({ employees }) {
    return (
        <div className="container">
            <table className="table table-dark table-striped table-sortable text-center">

                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col" data-field="name" data-sortable="true">
                            <span onClick={() => employees.sortBy("name", "last", "first")}>
                                Name
            </span>
                        </th>
                        <th scope="col">
                            <span>Phone</span>
                        </th>
                        <th scope="col">
                            <span>Email</span>
                        </th>
                        <th scope="col">
                            <span>DOB</span>
                        </th>
                    </tr>
                </thead>
                <tbody>


                    {employees[0] !== undefined && employees[0].name !== undefined ? (
                        employees.map((employee) => {

                            { console.log(employee.name.first) }
                            let first = employee.name.first;
                            let last = employee.name.last;
                            let employeeName = `${first} ${last}`;
                            // const dob = props.formatDate(employee.dob.date);

                            return (
                                <tr>
                                    <td>
                                        <img src={employee.picture.thumbnail} alt={employeeName} />
                                    </td>
                                    <td>
                                        {employeeName}</td>
                                    <td>
                                        {employee.phone}</td>
                                    <td>
                                        {employee.email}</td>
                                    <td>
                                        {employee.dob}</td>
                                </tr>
                            )

                        })
                    ) : (<> </>)
                    }

                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable;
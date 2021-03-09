import React from "react";

function EmployeeTable(props) {
    return (
        <div className="container">
            <table className="table table-dark table-sortable text-center caption-top">
                <caption>List of Employees</caption>
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col" data-field="name" data-sortable="true">
                            <span onClick={() => props.sortBy("name", "last", "first")}>
                                Name
            </span>
                        </th>
                        <th scope="col">
                            <span onClick={() => props.sortBy("phone")}>Phone</span>
                        </th>
                        <th scope="col">
                            <span onClick={() => props.sortBy("email")}>Email</span>
                        </th>
                        <th scope="col">
                            <span onClick={() => props.sortBy("dob", "date")}>DOB</span>
                        </th>
                    </tr>
                </thead>
                <tbody>...</tbody>
            </table>
        </div>
    )
}

export default EmployeeTable;
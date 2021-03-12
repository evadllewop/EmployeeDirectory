import React, { Component } from "react";
import API from "../utils/API";
import EmployeeTable from "./EmployeeTable";
import SearchBar from "./SearchBar";

class EmployeeMain extends Component {
    state = {
        search: "",
        employees: [{}]
    }

    componentDidMount() {
        API.getEmployees()
            .then((res) =>
                this.setState({
                    employees: res.data.results
                })
            )
            .catch((err) => console.log(err));
    }

    handleInputChange = (e) => {
        const value = e.target.value;
        this.setState({ search: value });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
    };

    render() {

        return (

            <div> {console.log(this.state.employees)}
                <SearchBar
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />

                <div className="container">
                    {this.state.employees !== undefined && this.state.employees.length !== 0 && this.state.employees[0].name !== undefined ? (
                        <EmployeeTable
                            employees={this.state.employees}
                            formatDate={this.formatDate} />
                    ) : (<div> Loading...</div>)}

                </div>
            </div>
        )
    };
}

export default EmployeeMain;
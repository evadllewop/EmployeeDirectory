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
                    // needs props passed
                    <EmployeeTable
                        employees={this.state.employees}
                    />
                </div>
            </div>
        )
    };
}

export default EmployeeMain;
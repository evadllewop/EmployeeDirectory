import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <EmployeeTable />
    </div>
  );
}

export default App;

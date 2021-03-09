import React from "react";
import "../styles/SearchBar.css";

function SearchBar() {
    return (
        <div className="container">
            <nav className="searchBar">
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search Employees"
                        aria-label="Search"
                    />
                </form>
            </nav>
        </div>
    );
}

export default SearchBar;
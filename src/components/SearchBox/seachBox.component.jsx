import React, { Component } from "react";
import "./searchBox.styles.css";

class SearchBox extends Component {
    render() {
        return (
            <div className="search-box">
                <i className="fa fa-search"></i>
                <input
                    type="search"
                    placeholder="Search..."
                    onChange={this.props.onSearchUser}
                />
            </div>
        );
    }
}

export default SearchBox;

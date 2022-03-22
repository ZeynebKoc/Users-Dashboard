import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table/table.component";
import UserCard from "./components/UserCard/userCard.component";
import usersData from "./usersData.json";

class App extends Component {
    state = {
        filteredData: usersData,
        user: {
            name: "",
            phone: "",
            email: "",
            country: "",
            age: "",
            color: "",
            postalZip: "",
            latlng: "",
        },
    };

    onSearchUser = (event) => {
        let searchUser = event.target.value;
        let filteredData = usersData.filter((value) => {
            let fields = [
                "name",
                "phone",
                "email",
                "country",
                "age",
                "color",
                "postalZip",
                "latlng",
            ];
            return fields.some(function (field) {
                return String(value[field])
                    .toLowerCase()
                    .includes(searchUser.toLowerCase());
            });
        });
        this.setState({ filteredData });
    };

    setSelectedUser = (user) => {
        this.setState({ user });
    };

    onSortUserUp = (field) => {
        let sortData = [...this.state.filteredData].sort((a, b) =>
            a[field] < b[field] ? -1 : 1
        );
        this.setState({ filteredData: sortData });
    };

    onSortUserDown = (field) => {
        let sortData = [...this.state.filteredData].sort((a, b) =>
            a[field] > b[field] ? -1 : 1
        );
        this.setState({ filteredData: sortData });
    };
    render() {
        return (
            <div className="app">
                <UserCard selectedUser={this.state.user} />
                <Table
                    onSearchUser={this.onSearchUser}
                    onSortUserUp={this.onSortUserUp}
                    onSortUserDown={this.onSortUserDown}
                    filteredData={this.state.filteredData}
                    setSelectedUser={this.setSelectedUser}
                />
            </div>
        );
    }
}

export default App;

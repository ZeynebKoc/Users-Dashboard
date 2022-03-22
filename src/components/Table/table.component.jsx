import React, { Component } from "react";
import "./table.styles.css";
import SearchBox from "../SearchBox/seachBox.component";

class Table extends Component {
    render() {
        return (
            <div>
                <SearchBox onSearchUser={this.props.onSearchUser} />
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                                <span className="icon-arrow">
                                    <i
                                        className="fas fa-arrow-up"
                                        onClick={() =>
                                            this.props.onSortUserUp("name")
                                        }
                                    ></i>
                                    <i
                                        className="fas fa-arrow-down"
                                        onClick={() =>
                                            this.props.onSortUserDown("name")
                                        }
                                    ></i>
                                </span>
                            </th>
                            <th>
                                Phone
                                <span className="icon-arrow">
                                    <i
                                        className="fas fa-arrow-up"
                                        onClick={() =>
                                            this.props.onSortUserUp("phone")
                                        }
                                    ></i>
                                    <i
                                        className="fas fa-arrow-down"
                                        onClick={() =>
                                            this.props.onSortUserDown("phone")
                                        }
                                    ></i>
                                </span>
                            </th>
                            <th>
                                Email
                                <span className="icon-arrow">
                                    <i
                                        className="fas fa-arrow-up"
                                        onClick={() =>
                                            this.props.onSortUserUp("email")
                                        }
                                    ></i>
                                    <i
                                        className="fas fa-arrow-down"
                                        onClick={() =>
                                            this.props.onSortUserDown("email")
                                        }
                                    ></i>
                                </span>
                            </th>
                            <th>
                                Country
                                <span className="icon-arrow">
                                    <i
                                        className="fas fa-arrow-up"
                                        onClick={() =>
                                            this.props.onSortUserUp("country")
                                        }
                                    ></i>
                                    <i
                                        className="fas fa-arrow-down"
                                        onClick={() =>
                                            this.props.onSortUserDown("country")
                                        }
                                    ></i>
                                </span>
                            </th>
                            <th>
                                Age
                                <span className="icon-arrow">
                                    <i
                                        className="fas fa-arrow-up"
                                        onClick={() =>
                                            this.props.onSortUserUp("age")
                                        }
                                    ></i>
                                    <i
                                        className="fas fa-arrow-down"
                                        onClick={() =>
                                            this.props.onSortUserDown("age")
                                        }
                                    ></i>
                                </span>
                            </th>
                            <th>
                                Color
                                <span className="icon-arrow">
                                    <i
                                        className="fas fa-arrow-up"
                                        onClick={() =>
                                            this.props.onSortUserUp("color")
                                        }
                                    ></i>
                                    <i
                                        className="fas fa-arrow-down"
                                        onClick={() =>
                                            this.props.onSortUserDown("color")
                                        }
                                    ></i>
                                </span>
                            </th>
                            <th>
                                PostalZip
                                <span className="icon-arrow">
                                    <i
                                        className="fas fa-arrow-up"
                                        onClick={() =>
                                            this.props.onSortUserUp("postalZip")
                                        }
                                    ></i>
                                    <i
                                        className="fas fa-arrow-down"
                                        onClick={() =>
                                            this.props.onSortUserDown(
                                                "postalZip"
                                            )
                                        }
                                    ></i>
                                </span>
                            </th>
                            <th>
                                latlng
                                <span className="icon-arrow">
                                    <i
                                        className="fas fa-arrow-up"
                                        onClick={() =>
                                            this.props.onSortUserUp("latlng")
                                        }
                                    ></i>
                                    <i
                                        className="fas fa-arrow-down"
                                        onClick={() =>
                                            this.props.onSortUserDown("latlng")
                                        }
                                    ></i>
                                </span>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.filteredData.map((user) => (
                            <tr
                                key={user.name}
                                onClick={() => this.props.setSelectedUser(user)}
                            >
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.country}</td>
                                <td>{user.age}</td>
                                <td>{user.color}</td>
                                <td>{user.postalZip}</td>
                                <td>{user.latlng}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;

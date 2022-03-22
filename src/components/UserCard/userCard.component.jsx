import React from "react";
import "./userCard.styles.css";
import srcIconPerson from "../../assets/icon-person.png";

class UserCard extends React.Component {
    render() {
        return (
            <div className="user-cart-bg">
                <div className="user-cart-content">
                    <img
                        src={srcIconPerson}
                        className="icon-person"
                        alt="Person Icon"
                    />
                    <div className="name">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            size="30"
                            value={this.props.selectedUser.name}
                        />
                    </div>
                    <div className="line" />

                    <div className="phone">
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            size="30"
                            value={this.props.selectedUser.phone}
                        />
                    </div>
                    <div className="line" />

                    <div className="email">
                        <label>E-mail</label>
                        <input
                            type="email"
                            name="e-mail"
                            size="30"
                            value={this.props.selectedUser.email}
                        />
                    </div>
                    <div className="line" />

                    <div className="country">
                        <label>Country</label>
                        <input
                            type="text"
                            name="country"
                            size="30"
                            value={this.props.selectedUser.country}
                        />
                    </div>
                    <div className="line" />

                    <div className="age">
                        <label>Age</label>
                        <input
                            type="text"
                            name="age"
                            size="30"
                            value={this.props.selectedUser.age}
                        />
                    </div>
                    <div className="line" />

                    <div className="color">
                        <label>Color</label>
                        <input
                            type="text"
                            name="color"
                            size="30"
                            value={this.props.selectedUser.color}
                        />
                    </div>
                    <div className="line" />

                    <div className="postal-zip">
                        <label>Postal Zip</label>
                        <input
                            type="text"
                            name="postalZip"
                            size="30"
                            value={this.props.selectedUser.postalZip}
                        />
                    </div>
                    <div className="line" />

                    <div className="latlng">
                        <label>latlng</label>
                        <input
                            type="text"
                            name="latlng"
                            size="30"
                            value={this.props.selectedUser.latlng}
                        />
                    </div>
                    <div className="line" />
                </div>
            </div>
        );
    }
}

export default UserCard;

import React, { Component } from "react";

class Form extends Component {
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    constructor(props) {
        super(props);

        this.initialState = {
            FirstName: '',
            LastName: '',
            Username: '',
            Password: ''
        };

        this.state = this.initialState;
    }

    render() {
        const { FirstName, LastName, Username, Password } = this.state;
        return (
            <form>
                <label>First name</label>
                <input
                    type="text"
                    name="FirstName"
                    value={FirstName}
                    onChange={this.handleChange} />

                <label>Last name</label>
                <input
                    type="text"
                    name="LastName"
                    value={LastName}
                    onChange={this.handleChange} />

                <label>Username</label>
                <input
                    type="text"
                    name="Username"
                    value={Username}
                    onChange={this.handleChange} />

                <label>Password</label>
                <input
                    type="password"
                    name="Password"
                    value={Password}
                    onChange={this.handleChange} />

                <input
                    type="button"
                    value='Submit'
                    onClick={this.submitForm}
                />
            </form>
        );
    }
}

export default Form;
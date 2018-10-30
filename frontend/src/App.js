import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/user/all', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(result => result.json()).then(response => { this.setState({ users: response.result }) })
    }

    removeUser = username => {
        fetch(`http://localhost:3000/api/user/delete/${username}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const { users } = this.state;
        this.setState({
            users: users.filter((user) => {
                return user.Username !== username;
            })
        })
    }

    handleSubmit = user => {
        fetch(`http://localhost:3000/api/user/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
        this.setState({ users: [...this.state.users, user] });

    }

    render() {
        return (
            <div className='container'>
                <Table userData={this.state.users}
                    removeUser={this.removeUser}
                />

                <Form handleSubmit={this.handleSubmit} />

            </div>
        );
    }
}

export default App;
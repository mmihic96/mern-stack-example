import React, { Component } from 'react';



const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Username</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const rows = props.userData.map((user, i) => {
        return (
            <tr key={i}>
                <td>{user.FirstName}</td>
                <td>{user.LastName}</td>
                <td>{user.Username}</td>
                <td><button onClick={() => props.removeUser(user.Username)}>Delete</button></td>

            </tr>
        );
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const { userData, removeUser, updateUser } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody userData={userData} removeUser={removeUser} updateUser={updateUser} />
            </table>
        );
    }
}

export default Table;
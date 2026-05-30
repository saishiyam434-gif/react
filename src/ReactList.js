import React from "react";

function ReactList() {
    const items = ["apple", "Mango", "Banana", "cherry"];
    const user = [
        { id: 1, name: "John", age: 30 },
        { id: 2, name: "Jane", age: 20 },
        { id: 3, name: "Bob", age: 35 },
    ];
    

    return (
        <div>
            <h1>Fruit List</h1>
            <ul>
                {items.map((f, index) => (
                    <li key={index}>{f}</li>
                ))}
            </ul>
            <ul>
                {user.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age} years old
                    </li>
                ))}
            </ul>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {user.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
            
                ))}
            </table>
<ul>

    {user.map((user) => (
        user.age > 25 ? (
            <li key={user.id}>{user.name} is over 25 years old </li>
        ) : (
            <li key={user.id}>{user.name} is under 25 years old</li>
        )
    ))}
        
</ul>

        </div>
    )
}export default ReactList;

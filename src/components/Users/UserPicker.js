import { useEffect, useState } from 'react';

export default function UserPicker() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchUsers() {
            const usersJSON = await fetch('http://localhost:3001/users');
            const users = await usersJSON.json();
            setUsers(users);
          }
        fetchUsers();
    }, [])

    if (!users || users.length === 0) {
        return <div>Empty Users</div>
    }

    return (
       <select>
           LENGTH {users?.length}
           { users && users.map(({ name, id } ) => <option key={id}>{name}</option>)}
       </select>
    )
}
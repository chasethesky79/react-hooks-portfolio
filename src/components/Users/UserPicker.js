import { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel'

export default function UserPicker() {
    const [users, setUsers] = useState([]);
    const [selected, setSelected] = useState('');
    useEffect(() => {
        async function fetchUsers() {
            const usersJSON = await fetch('http://localhost:3000/users');
            const users = await usersJSON.json();
            setUsers(users);
          }
        fetchUsers();
    }, [])

    if (!users || users.length === 0) {
        return <div>Empty Users</div>
    }
    const handleOnChange = e => setSelected(e.target.value);

    return (
        <FormControl style={{ margin: '10px', minWidth: 100, maxWidth: 400 }}>
            <InputLabel style={{ color: 'white', font: '16px'}}>User Action</InputLabel>
            <Select value={selected} style={{ border: '1px white', maxWidth: 400 }} onChange={handleOnChange}>
                LENGTH {users?.length}
                { users && users.map(({ name, id } ) => <MenuItem style={{ color: 'black', font: '16px' }} key={id} value={id}>{name}</MenuItem>)}
            </Select>
       </FormControl>
    )
}
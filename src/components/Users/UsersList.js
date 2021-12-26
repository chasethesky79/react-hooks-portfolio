import { users } from '../../../src/static.json';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function UsersList() {
    const [userIndex, setUserIndex] = useState(0);

    function handleSelectUser(selectedIndex) {
        setUserIndex(selectedIndex);
    }

    return (
        <div>
            <ul className='items-list-nav users-list-nav'>
                { users.map((b, i) => <li key={b.id} className={i === userIndex ? 'selected': null }>
                    <button className='btn' onClick={() => handleSelectUser(i)}>{b.title}</button>
                </li>)}
            </ul>
            <p>
            <button className='btn' onClick={() => setUserIndex(bookableIndex => (bookableIndex + 1) % users.length)} autoFocus>
                <FaArrowRight/><span>Next</span></button>
            </p>
        </div>
    )

}
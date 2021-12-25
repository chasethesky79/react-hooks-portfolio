import { bookables } from '../../../src/static.json';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function BookablesList() {
    const group = 'Rooms';
    const bookablesInGroup = bookables.filter(bookable => bookable.group === group);
    const [bookableIndex, setBookableIndex] = useState(1);

    function changeBookable(selectedIndex) {
        setBookableIndex(selectedIndex);
    }

    return (
        <>
        <ul className='bookables items-list-nav'>
            { bookablesInGroup.map((b, i) => <li key={b.id} className={i === bookableIndex ? 'selected': null }>
                <button className='btn' onClick={() => changeBookable(i)}>{b.title}</button>
            </li>)}
        </ul>
        <p>
          <button className='btn' onClick={() => setBookableIndex(bookableIndex => (bookableIndex + 1) % bookablesInGroup.length)} autoFocus>
              <FaArrowRight/><span>Next</span></button>
        </p>
        </>
    )

}
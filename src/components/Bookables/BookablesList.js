import { bookables } from '../../../src/static.json';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function BookablesList() {
    const groups = bookables.reduce((acc, element) => {
      if (!acc.includes(element.group)) {
          acc = [...acc, element.group]
      }
      return acc;
    }, []);
    const [group, setGroup] = useState("Kit");
    const bookablesInGroup = bookables.filter(bookable => bookable.group === group);
    const [bookableIndex, setBookableIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
    const bookable = bookablesInGroup[bookableIndex];

    function changeBookable(selectedIndex) {
        setBookableIndex(selectedIndex);
    }

    return (
        <>
        <div>
            <select value={group} onChange={(e) => setGroup(e.target.value)}>{groups.map(g => <option value={g} key={g}>{g}</option>)}</select>
            <ul className='bookables items-list-nav bookables-list-nav'>
                { bookablesInGroup.map((b, i) => <li key={b.id} className={i === bookableIndex ? 'selected': null }>
                    <button className='btn' onClick={() => changeBookable(i)}>{b.title}</button>
                </li>)}
            </ul>
            <p>
            <button className='btn' onClick={() => setBookableIndex(bookableIndex => (bookableIndex + 1) % bookablesInGroup.length)} autoFocus>
                <FaArrowRight/><span>Next</span></button>
            </p>
        </div>
          {bookable && (
              <div className='bookable-details'>
                    <div className='bookable-details-header'>
                        <h2>{bookable.title}</h2>
                        <span className='controls'>
                            <label><input type='checkbox' checked={showDetails} onChange={() => setShowDetails(showDetails => !showDetails)}/>Show Details</label>
                        </span>
                    </div>
                {showDetails && <p>{bookable.notes}</p>}
              </div>
          )}
        </>
    )

}
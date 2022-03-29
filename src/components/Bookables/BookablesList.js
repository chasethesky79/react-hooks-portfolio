import { days, sessions } from '../../../src/static.json';
import { useEffect, useReducer } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { bookablesReducer } from '../../reducers/bookablesReducer';
import { getData } from '../../utils/date-wrangler';

const initialState = {
    bookables: [],
    bookableIndex: 0,
    group: 'Kit',
    showDetails: false,
    isLoading: true,
    error: false
}
export default function BookablesList() {
    const [state, dispatch] = useReducer(bookablesReducer, initialState);
    const { bookables, bookableIndex, group, showDetails, error, isLoading } = state;
    const groups = bookables?.reduce((acc, element) => {
      if (!acc.includes(element.group)) {
          acc = [...acc, element.group]
      }
      return acc;
    }, []);
    const bookablesInGroup = bookables?.filter(bookable => bookable.group === group);
    const bookable = bookablesInGroup[bookableIndex];
    useEffect(() => {
        dispatch({ type: 'FETCH_BOOKABLES_REQUEST' });
        getData("http://localhost:3001/bookables")
          .then(bookables => dispatch( {
              type: 'FETCH_BOOKABLES_SUCCESS',
              payload: bookables
          })).catch(error => dispatch({
              type: 'FETCH_BOOKABLES_ERROR',
              payload: error
          }))
    }, [])

    if(error) {
        return <p>{error?.message}</p>
    }

    if (isLoading) {
      return<p style={{ 'float': 'center' }}>Loading Bookables...</p>
    }

    function changeBookable(selectedIndex) {
        dispatch({ type: 'SET_BOOKABLE_INDEX', payload: selectedIndex });
    }

    return (
        <>
        <div>
            <select value={group} onChange={(e) => dispatch({ type: 'SET_GROUP', payload: e.target.value })}>{groups?.map(g => <option value={g} key={g}>{g}</option>)}</select>
            <ul className='bookables items-list-nav bookables-list-nav'>
                { bookablesInGroup.map((b, i) => <li key={b.id} className={i === bookableIndex ? 'selected': null }>
                    <button className='btn' onClick={() => changeBookable(i)}>{b.title}</button>
                </li>)}
            </ul>
            <p>
            <button className='btn' onClick={ () => dispatch({ type: 'SET_NEXT_BOOKABLE_INDEX' })}  autoFocus>
                <FaArrowRight/><span>Next</span></button>
            </p>
        </div>
          {bookable && (
              <div className='bookable-details'>
                    <div className='bookable-details-header'>
                        <h2>{bookable.title}</h2>
                        <span className='controls'>
                            <label><input type='checkbox' checked={showDetails} onChange={() => dispatch({ type: 'TOGGLE_BOOKABLE_DETAILS' })}/>Show Details</label>
                        </span>
                    </div>
                {showDetails &&
                <div className='bookable-details-info'>
                    <p style={{ textAlign: 'left' }}>{bookable.notes}</p>
                    <h3>Availability</h3>
                    <div className='bookable-details-sections'> 
                        <div>
                            <ul>
                                {bookable.sessions.map((bookableSession, index) => <li key={index}>{sessions[bookableSession]}</li>)}
                            </ul>
                        </div>
                        <div>
                            <ul>
                                {bookable.days.map((bookableDay, index) => <li key={index}>{days[bookableDay]}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>}
              </div>
          )}
        </>
    )

}
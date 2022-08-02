import { userReducer } from '../../reducers/userReducer';
import { useReducer, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { getData  } from '../../utils/date-wrangler';

const initialState = {
    users: [],
    isLoading: true,
    error: false,
    userIndex: 0
}
export default function UsersList() {
    const [state, dispatch] = useReducer(userReducer, initialState);
    const { users, isLoading, error, userIndex } = state;
    useEffect(() => {
        dispatch({ type: 'FETCH_USERS_REQUEST' });
        getData("http://localhost:3000/users")
          .then(bookables => dispatch( {
              type: 'FETCH_USERS_SUCCESS',
              payload: bookables
          })).catch(error => dispatch({
              type: 'FETCH_USERS_ERROR',
              payload: error
          }))
    }, [])

    if(error) {
        return <p>{error?.message}</p>
    }

    if (isLoading) {
      return<p style={{ 'float': 'center' }}>Loading Users...</p>
    }

    function handleSelectUser(selectedIndex) {
        dispatch({ type: 'SET_USER_INDEX', payload: selectedIndex });
    }

    return (
        <div>
            <ul className='items-list-nav users-list-nav'>
                { users.map((b, i) => <li key={b.id} className={i === userIndex ? 'selected': null }>
                    <button className='btn' onClick={() => handleSelectUser(i)}>{b.title}</button>
                </li>)}
            </ul>
            <p>
            <button className='btn' onClick={() => dispatch({ type: 'SET_USER_INDEX', payload: (userIndex + 1) % users.length })} autoFocus>
                <FaArrowRight/><span>Next</span></button>
            </p>
        </div>
    )

}
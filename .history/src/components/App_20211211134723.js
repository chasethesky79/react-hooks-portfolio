import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa';
import BookablesPage from './Bookables/BookablesPage';
import BookingsPage from './Bookables/BookingsPage';
import UsersPage from './Users/UsersPage';
import UserPicker from './Users/UserPicker';


function App() {
  return (
    <Router>
    <div className="App">
    <header>
      <nav>
        <ul>
         <li>
           <Link to='/bookings' className='btn btn-header'>
             <FaCalendarAlt/>
             <span>Bookings</span>
           </Link>
         </li>
         <li>
           <Link to='/bookables' className='btn btn-header'>
             <FaDoorOpen/>
             <span>Bookables</span>
           </Link>
         </li>
         <li>
           <Link to='/users' className='btn btn-header'>
             <FaUsers/>
             <span>Users</span>
           </Link>
         </li>
        </ul>
      </nav>
    </header>
    </div>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import '../App.css';

import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa';
import BookablesPage from './Bookables/BookablesPage';
import BookingsPage from './Bookables/BookingsPage';
import UsersPage from './Users/UsersPage';
import UserPicker from './Users/UserPicker';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <Router>
    <div className="App">
    <header>
      <h1>Welcome to SCILAS portal</h1>
      <UserPicker/>
    </header>
    <Card style={{ maxWidth: 1200, margin: 'auto' }}>
      <CardContent>
        <Typography variant='h4'>SCILAS Goals and Architecture</Typography>
        <Typography style={{ marginTop: '10px', display: 'flex', justifyContent: 'left' }} variant='subtitle1'>
          What is Item Modernization
        </Typography>
        <Typography>
          . Item Modernization is an approach to have system to maintain the SC Item, SC Item-Loc, EIS API, Item-Loc-Vendor Attributes related information
            via Real Time APIs as SSOT. Along with that for any Cross Domain requirement for Item Attributes, there will be a Query Based Aggregate
            API Layer created to query data which is called the SCAggregate API. The SCAggregate API will combine the results from the SC Item API,
            SC Item LOC API and EIS API and return the combined JSON response to the consumer of the SC Aggregate API. It will also cover the Real Time
            Bidirectional Data Sync Up with domain in the supply chain.
        </Typography>
        <Typography style={{ marginTop: '10px', display: 'flex', justifyContent: 'left' }} variant='subtitle1'>
          Why Item Modernization ?
        </Typography>
        <Typography>
          . Enterprise Item has defined and built a new process for ingesting / collecting item information from vendors into Lowe's. This process has changes
            in both process and information from vendors into Lowe's. This process has changes in both process and information vs what our systems have been
            utliizing for many years. The inventory and supply chain business areas need to clearly understand these changes and define how the processes for
            item onboarding and maintenance will work in the future within Lowe's.
        </Typography>
      </CardContent>
    </Card>
    </div>
    </Router>
  );
}

export default App;

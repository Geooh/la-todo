import './index.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Switch, 
} from 'react-router-dom'


import ChecklistDaily from './components/Checklist'
import ChecklistWeekly from './components/ChecklistWeekly'
import Navbar from './components/Navbar'


function App() {

  return (
    <Router>
      <Navbar />
        <div className="bg-container">     
          <h1>Lost Ark Tracker</h1>
          <ChecklistDaily />
          <ChecklistWeekly />
        </div>
    </Router>
  );
}

export default App;

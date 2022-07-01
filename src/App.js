import './index.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Switch, 
} from 'react-router-dom'


import ChecklistDaily from './components/Checklist'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      {/* <Routes> */}
        <Navbar />

        <div className="container">       
          <h1>Lost Ark Tracker</h1>
          <ChecklistDaily />

        </div>
      {/* </Routes> */}
    </Router>
  );
}

export default App;

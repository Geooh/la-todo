import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

import ChecklistDaily from './components/Checklist';
import ChecklistWeekly from './components/ChecklistWeekly';
import TodoApp from './components/TodoApp';

function App() {

  return (
    <Router>

      <h1>Lost Ark Tracker</h1>
      <div className="nav-wrapper">
        <a target="_blank" rel="noreferrer" href="https://lost-ark.maxroll.gg/">Maxroll</a>
        <a target="_blank" rel="noreferrer" href="https://jgallagher.github.io/lostark-refining/">Ability Stone</a>
        <a target="_blank" rel="noreferrer" href="https://loa-todo.com/engrave">Engraving</a>
      </div>
      <TodoApp />
      <div className="bg-container">     
        <br />
        <ChecklistDaily />
        <ChecklistWeekly />
      </div>   

    </Router>
  );
}

export default App;

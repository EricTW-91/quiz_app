import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CreateUser from './pages/createUser';
import Quiz from './pages/quiz';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<CreateUser />} />
          <Route path='/quiz' element={ <Quiz/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

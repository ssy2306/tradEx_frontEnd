import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/300.css';
import Login from './components/loginSignup/login'


function App() {
  return (
    // <div className="App">

    //   <header className="App-header">
    //   </header>
      <Router>
      <Routes> 
        <Route path="/Login" component={Login} />
      </Routes>
    </Router>
      
  );
}

export default App;

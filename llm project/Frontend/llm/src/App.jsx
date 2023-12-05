import './App.css';
import Navbar from './modules/navbar.js';
import MyTextBox from './modules/textbox.js'
function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='TextBox'><MyTextBox /></div>
      
    </div>
  );
}

export default App;

import '../../../llm project/Frontend/llm/src/App.css';
import Navbar from '../../../llm project/Frontend/llm/src/modules/textbox.jsx';
import MyTextBox from '../../../llm project/Frontend/llm/src/modules/textbox.jsx'
function Askbot() {
  return (
    <div className='App'>
      <Navbar />
      <div className='TextBox'><MyTextBox /></div>
      
    </div>
  );
}

export default Askbot;
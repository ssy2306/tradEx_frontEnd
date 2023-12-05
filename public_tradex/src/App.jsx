
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar"


function App() {
  return (  
    <>
    <div  style={{ display: 'flex'}}>
        <Navbar />   
        <Outlet />
    </div>
    </>
  )
}
export default App;

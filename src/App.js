import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Checkout from './Components/Checkout';
import Admin from './Components/Admin'

function App() {
  
  return (
    <Routes>
        <Route path = "/" element={<Homepage/>}/>
        <Route path = '/checkout:link' element={<Checkout/>}/>
        <Route path = '/checkout/admin' element={<Admin/>}/>
        <Route path = '*' element={<Checkout/>}/>
    </Routes>
  );
}

export default App;
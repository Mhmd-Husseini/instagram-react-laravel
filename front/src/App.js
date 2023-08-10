import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';

import Register from './pages/register';
import Login from './pages/Login';
import Home from './pages/Home';
import './utilities.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>  
        <Route path='home'>
        <Route index element={<Home/>}/>
      </Route> 
      <Route path='*' element={<h1>404 - Page does not exist</h1>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

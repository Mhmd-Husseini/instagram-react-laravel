import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';

import Register from './pages/register/index.jsx';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>  
      {/* <Route path='home'>
          <Route index element={<home/>}/>
      </Route> */}
      <Route path='*' element={<h1>404 - Page does not exist</h1>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

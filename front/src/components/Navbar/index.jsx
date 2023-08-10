import React from 'react';
import { ReactComponent as Logo } from '../../logo.svg';
import { useNavigate } from 'react-router-dom';

import './style.css';

const NavBar = ({ search, addPost }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <aside className="nav-container flex-col center align-center">
        <div className='flex-row center'> <Logo alt="logo" width="100" height="100" /></div>
      <button >
          <span>Home</span>
      </button>

      <button onClick={search}>
          <span>Search</span>
      </button>
      
      <button onClick={addPost}>
          <span>Add Post</span>
      </button>

      <button onClick={logout}>
          <span>Logout</span>
      </button>
    </aside>
  )
}

export default NavBar;

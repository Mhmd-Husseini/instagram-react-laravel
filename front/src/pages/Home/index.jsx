import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ReactComponent as Logo } from '../../logo.svg'
import './style.css'
import Navbar from '../../components/Navbar'
import Cards from '../../components/Cards'


const Home = () => {

    return ( 
        <div>
            <div><Navbar /></div> 
            <div className="div"><Cards className='cards flex center wrap'/></div>
        </div>
    );
}
 
export default Home;
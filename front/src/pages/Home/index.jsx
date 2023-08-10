import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ReactComponent as Logo } from '../../logo.svg'
import './style.css'
import Navbar from '../../components/Navbar'


const Home = () => {

    return ( 
        <Navbar/>
    );
}
 
export default Home;
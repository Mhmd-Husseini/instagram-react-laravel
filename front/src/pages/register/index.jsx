import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ReactComponent as Logo } from '../../logo.svg'
import './style.css'
import '../../utilities.css'
const Register = () => {
    const [data,setData]=useState({name:"",email:"",password:""});
    const {name,email,password}=data;
    // const navigate=useNavigate();

    const handleDataChange = (e)=>{
        setData({...data,[e.target.id]:e.target.value});
    }
    const handleDataSubmit = async ()=>{
        try{
            const response=await axios.post("http://127.0.0.1:8000/api/register",data);
            if(response.data['status']=="success"){
                // navigate(`/home`)
                alert('registered')
            }
        }catch(e){
            console.log(e);
        }
    }
    return ( 
    <div className=" flex-row center align-center align-center center page">
        <div className="register flex-col center">
            <div className='flex-col align-center center reg'>
            <div className='flex-row center'> <Logo alt="logo" width="100" height="100" /></div>
                <div className=' register-form flex-col '>
                    <input type="text" id="name" value={name} placeholder="Full Name" onChange={handleDataChange}/>
                    <input type="text" id="email" value={email} placeholder="Email" onChange={handleDataChange}/>
                    <input type="password" id="password" value={password} placeholder="Password" onChange={handleDataChange}/>
                    <button className="register-btn" onClick={handleDataSubmit}>Sign up</button>
                </div>
                <p>People who use our service may have <br></br>uploaded your contact information to Instagram.</p> <p>Learn More</p>
                <p>By signing up, you agree to our Terms ,<br></br> Privacy Policy and Cookies Policy </p>.
            </div>
        </div>
    </div> 
    );
}
 
export default Register;
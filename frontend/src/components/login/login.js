import React,{useState} from "react"
import "./login.css"
import axios from "axios"

import { useHistory } from "react-router-dom";
const Login=()=>{

    const history = useHistory();


    const [user,setUser]=useState({
          
            email:"",
            password:"",
            
        })
    
        // Functions
    const handleChange=e=>{
           
        const {name,value}=e.target
        setUser({
                ...user,
                [name]:value
            })
           
        }

    async function submit(e){
        e.preventDefault();
        try{
            
            await axios.post("http://localhost:3000/login",user)
            .then(res=>{
                if(res.data=='Exist'){
                    history.push("/home")
                }
                else if(res.data=='NotExist'){
                    alert("Detail are not valid")
                }
            })
            .catch(e=>{
                alert("Wrong details")
                console.log(e)
            })
        }
        catch(e){
            console.log(e)
        }
    }     

    return (
      
        <div className="login">
            <h1>Login</h1>
            <input type='text' name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
            <div className="button" onClick={submit}>Login</div>
            <div>or</div>
            <div className="button" onClick={()=>{history.push("/register")}}>Register</div>
        </div>
    )
}

export default Login
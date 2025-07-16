import React,{useState} from "react";
import "./style.css";

const LoginDiv =()=>{
    const [userData,setUserData] = useState(
        {
            userName:"",
            password:""
        })
        const setUserName = (e)=> {
            let copy = {...userData}
            copy.userName = e.target.value 
            setUserData(copy)       
        }
        const setUserPassword = (e)=>{
            let copy = {...userData}
            copy.password = e.target.value 
            setUserData(copy)   
        }
        const handletoLogin = () => {
            console.log(userData)
        }
        return (
            <div className = "main-container">
                <div className = "image-side"> </div>
                <div className = "login-box">
                    <div className = "title-box">
                         <h2>TASTORIA</h2>
                    </div>
                   <div className = "from-box">
                        <input 
                        type = "text" 
                        onChange = {setUserName} 
                        placeholder = "Enter username:"
                    />

                <input 
                type = "text" 
                onChange = {setUserPassword} 
                placeholder = 'Enter password'
                />
                
                    
                <button onClick={handletoLogin}>LOGIN</button>
                </div>
                </div>
            </div>
        )
}

export default LoginDiv
import React,{useState} from 'react';
import LoginDiv from '../components/Login';
import Register from '../components/Register';

const Login = () => {
   
    const[isLogin,setIsLogin]=useState(true);

    return (
        <>
        {isLogin && <LoginDiv/>}
        {!isLogin && <Register/>}
        <div>
            <button onClick={()=>{setIsLogin(!isLogin)}}>{isLogin ? "register" : "Login"}</button>
        </div>
        </>
    )
}

export default Login
import './signin.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SignIn =()=>{
    const navigate = useNavigate();
    const [user,setUser] = useState({
        username:"",
        password:"",
    });
    const [formError,setFormError] = useState({});
    const [submit,setSubmit] = useState(false);
    const handleChange =(e) =>{
        const {name,value} = e.target;
        setUser ({...user,[name]:value})
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        setFormError(validate(user));
        setSubmit(true)
    }
    async function postUser(user){
        await axios.post('https://todo-api-u04q.onrender.com/login',user).then((res) =>{
            console.log(res)
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("username",user.username.split('@')[0]);
            navigate("/todo")
        }).catch((err) =>{
            console.log(err)
            window.alert(err.response.data.message)
        });
    }
    useEffect( () =>{
        if(Object.keys(formError).length === 0 && submit){
            console.log(user)
            postUser(user);
        }
    },[formError])
    const validate = () =>{
        let error = {}
        if(!user.username){
            error.username = "Please Enter Username"
        }
        if(!user.password){
            error.password = "Please Enter Password"
        }
        return error
    }
    return (
        <>
        <div className ="signin-container">
            <h1>Member Login</h1>
            <form method ="POST" onSubmit ={handleSubmit}>
            <div className ="input-container">
                <input type="email" value = {user.username} 
                name = "username" placeholder ="username" onChange={handleChange} />
                <p>{formError.username}</p>
            </div>
            <div className ="input-container">
                <input type="password" value = {user.password} 
                name = "password" placeholder ="password" onChange={handleChange} />
                <p>{formError.password}</p>
            </div>
            <div className= "login-btn">
                <button>LOGIN</button>
            </div>
            </form>
            <Link to ="/signup">
            <div className= "login-btn">
                <button>Register</button>
            </div>
            </Link>
            <p style ={{color:"red"}}>Forget Password</p>
        </div>
        </>
    )
}

export default SignIn;
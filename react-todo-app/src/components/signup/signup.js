import './signup.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Signup =()=>{
    const navigate = useNavigate();
    const [user,setUser] = useState({
        username:"",
        password:"",
        confirmpass:""
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
    async function postUser(user) {
        await axios.post('https://todo-api-u04q.onrender.com/register',user).then((res) =>{
            console.log(res)
            window.alert(res.data.message)
            navigate("/");
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
        if(!user.confirmpass){
            error.confirmpass = "Please Fill The Confirm Password Field"
        }
        else if(user.password !== user.confirmpass){
            error.confirmpass = "Password And Confirm Password Doesn't Match"
        }
        return error
    }
    return (
        <>
        <div className ="signup-container">
            <h1>Register</h1>
            <form method ="POST" onSubmit ={handleSubmit}>
            <div className ="input-container">
                <input type="email" value = {user.username} 
                name = "username" placeholder ="username" onChange={handleChange} />
                <p style ={{color:"red"}}>{formError.username}</p>
            </div>
            <div className ="input-container">
                <input type="password" value = {user.password} 
                name = "password" placeholder ="password" onChange={handleChange} />
                <p style ={{color:"red"}}>{formError.password}</p>
            </div>
            <div className ="input-container">
                <input type="password" value = {user.confirmpass} 
                name = "confirmpass" placeholder ="Confirm Password" onChange={handleChange} />
                <p style ={{color:"red"}}>{formError.confirmpass}</p>
            </div>
            <div className= "register-btn">
                <button>Register</button>
            </div>
            </form>
            <Link to ="/">
            <p style ={{color:"red",cursor:"pointer"}}>Member Login</p>
            </Link>
        </div>
        </>
    )
}

export default Signup;


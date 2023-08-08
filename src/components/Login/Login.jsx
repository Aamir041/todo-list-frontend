import { useState } from "react";
import "./Login.css"
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {

    const [usn,setUsn] = useState("");
    const [pwd,setPwd] = useState("");
    const navigate = useNavigate();
    const [invalid,setInvalid]= useState(false);

    const validInfo = () => (usn.length > 0 && pwd.length > 0);


    const handleSubmit = async(e) => {
        e.preventDefault();


        if(validInfo()) {
            const data = {
                "username":usn,
                "password":pwd
            };

            try{
                
                const response = await axios.post("http://localhost/todolist/login.php",data);
                
                const responseData = response.data;

                if(responseData.status === "success"){
                    navigate("/lists",{state:{user:usn}});
                }
                else{
                    console.log("Invaid info!");
                }

            }
            catch(error){
                console.log(error);
            }
            
        }
        else{
            alert("Invalid Info");
        }

    }

    return(
        <div className="login">
            <h1>Login to access your tasks</h1>
            <form className="login-form">
                <div className="login-feild">
                    <label>Enter Username</label>
                    <input onChange={(e) => setUsn(e.target.value)} type="text" />
                </div>
                <div className="login-feild">
                    <label>Enter Password</label>
                    <input onChange={(e) => setPwd(e.target.value)} type="password" />
                </div>
                
                
                    <Link className="signup-option" exact to="signup"> Create An Account</Link>
                
                
                <button type="submit" onClick={handleSubmit} className="login-button">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;

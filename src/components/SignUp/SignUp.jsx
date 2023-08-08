import { useState } from "react"
import "./SignUp.css"
import axios from "axios";
import { useNavigate } from "react-router";
const SignUp = () => {

    const [usn,setUsn] = useState("");
    const [pwd,setPwd] = useState("");
    const navigate = useNavigate();

    const [errorMessage,setErrorMessage] = useState("");
    const [invalid,setInvalid] = useState(false); 

    const validInfo = () => (usn.length > 0 && pwd.length > 0);

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        if(validInfo()){
            const data = {
                "username":usn,
                "password":pwd
            }

            try{
                const response = await axios.post("http://localhost/todolist/register.php",data);

                const responseData = response.data;

                if(responseData.status === "success"){
                    setErrorMessage("");
                    setInvalid(false);
                    navigate('/lists', {state:{user:usn}});
                }
                else if(responseData.status === "invalid" || responseData.status === "failed"){
                    setErrorMessage(responseData.message);
                    setInvalid(true);
                }
            }
            catch(error){
                console.log(error);
            }
            
        }
        else{
            alert("Please set email or password.");
        }
    }
    
    return(
        <div className="signup">
            
            {
                invalid &&
                <div className="signup-error">
                    <p>{errorMessage}</p>
                </div>
            }

            <h1>Register</h1>
            <form className="signup-form">
                <div className="signup-feild">
                    <label>Set Username</label>
                    <input type="text" onChange={(e) => setUsn(e.target.value)} />
                </div>
                <div className="signup-feild">
                    <label>Set Password</label>
                    <input type="password" onChange={(e) => setPwd(e.target.value)} />
                </div>
                
                <button type="submit"  className="signup-button" onClick={handleSubmit}>
                    Register
                </button>
            </form>
        </div>
    )
}

export default SignUp;
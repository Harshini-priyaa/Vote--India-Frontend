import React,{useState} from 'react';
import Web3 from 'web3'
import './Login.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link, useNavigate } from "react-router-dom";   
import 'bootstrap/dist/css/bootstrap.min.css'
function Login() {
  const [account, setAccount] = useState('');


    const navigate = useNavigate();

    function handleButtonClick() {

    const web3 = new Web3(window.ethereum);
    
    const connectWallet = async () => {
      try {
        if (window.ethereum) {
          await window.ethereum.enable();
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
          console.log(accounts[0]);
        } else {
          alert('Metamask not detected. Please install Metamask and try again.');
        }
      } catch (error) {
        console.error('Error connecting to wallet:', error);
      }
    };

    navigate('/Votepage');

    }
    
    return(
        <div className="login">

          <div className="box-login">
            <form>
                <h3 className="head">Sign In</h3>
                <div className="mb-2">
                    <VerifiedUserIcon className="icon"/>
                    <label htmlFor="uid" ></label>
                    <input type="tel" placeholder="Enter User-ID" />
                </div>
                <div className="mb-2">
                <AccountCircleIcon className="icon"/>
                    <label htmlFor="uname" ></label>
                    <input type="text" placeholder="Enter User-Name"  /> 
                </div>
                
                <div className="mb-2">
                    <LockOpenIcon className="icon"/>
                    <label htmlFor="password" ></label>
                    <input type="password" placeholder="Enter Password" />
                </div>
                <br/>
                <div className="remember-forget">
                
                    <input type="checkbox" className="custom-control custom checkbox " id="check" />
                    <label htmlFor="check" className="custom-input-label">
                        Remember me
                    </label>
                    {/* <a href="" >Forgot Password?</a> */}
                </div>
                <div className="btn-login">
                    <button className="btn btn-primary" onClick={handleButtonClick}>Sign-In</button>
                </div>
                <div className="register-link">
                <p >
                    
                    Not an user? <Link to="/signup">Sign-Up</Link>
                </p>
                    
                </div>
              
                
            </form>
           </div>  
        </div>
    )
}

export default Login
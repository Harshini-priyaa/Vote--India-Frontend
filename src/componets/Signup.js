import React,{useState} from 'react';
import Web3 from 'web3' 
import './Login.css'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PersonIcon from '@mui/icons-material/Person';
import LockResetIcon from '@mui/icons-material/LockReset';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {

    const [account, setAccount] = useState('');
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

    return(
        <div className="login">

          <div className="box-signup">
            <form>
                <h3 className="head">Sign Up</h3>
                <div className="mb-2">
                    <VerifiedUserIcon className="icon"/>
                    <label htmlFor="uid" ></label>
                    <input type="tel" placeholder="Enter User-ID" />
                </div>
                <div className="mb-2">
                    <PersonIcon className="icon"/>
                    <label htmlFor="fname" ></label>
                    <input type="text" placeholder="Enter First-Name"  /> 
                </div>
                <div className="mb-2">
                    <PersonIcon className="icon"/>
                    <label htmlFor="lname" ></label>
                    <input type="text" placeholder="Enter Last-Name"  /> 
                </div>
                
                <div className="mb-2">
                    <LockResetIcon className="icon"/>             
                    <label htmlFor="setpassword" ></label>
                    <input type="password" placeholder="Set Password" />
                </div>
                <div className="mb-2">
                    <LockIcon className="icon"/>
                    <label htmlFor="cpassword" ></label>
                    <input type="password" placeholder="Conform Password" />
                </div>
                <br/>
                <div>
                
                    <input type="checkbox" className="custom-control custom checkbox " id="check" />
                    <label htmlFor="check" className="terms-conditions">Accept all Terms & Conditions
                    </label>
                </div>
                <div className="btn-login">
                    <button className="btn btn-primary" onClick={connectWallet}>Sign-Up</button>
                </div>
                <div className="register-link">
                <p >
                    
                    Already a user?<Link to = "/Login">Sign-In</Link>
                </p>
                    
                </div>
                
            </form>
           </div>  
        </div>
    )
}

export default Signup
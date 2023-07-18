import { Component } from "react";
import Logo from "./Images/logo1.png"
import "./Navbar.css";
        

class Navbar extends Component{

    state = {clicked: false };
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <div className="body">
            <nav className="NavbarItems">
                <div className="logo-box">
                <img className="logo" src={Logo}/>
                <h1 className="navbar-logo"> Vote INDIA</h1>
                </div>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times":"fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <a href="#" className="nav-links">
                            <i class="fa-solid fa-house"></i>Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-links">
                            <i class="fa-solid fa-user"></i>About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-links">
                            <i class="fa-solid fa-phone"></i>Contacts
                        </a>
                    </li>
                    {/* <li>
                        <a href="#" className="nav-links">
                            Login
                        </a>
                    </li> */}

                    <button>Sign up</button>
                </ul>
                
            </nav>
        </div>
            
        )
    }
}

export default Navbar;
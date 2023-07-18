import  './Votepage.css'
import  userimage from'./Images/profile.png'
import star from './Images/star.png'
import logo from './Images/logo1.png'
import vote from './Images/vote.jpg'
import { Link } from "react-router-dom"; 
//import userBg from './images/userbg2.jpg';
function Votepage(){
    //  const votingpage=''


    return(
        <div className='overall'> 
        
           {/* <div className="userbd" style={{
                width: '90%',
                height: '100vh',
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${userBg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                position: 'relative'
                }}> */}
            
           
            <nav>
                <h1 className='title1'> <img src={logo} alt="logo"  className='logoimage'/> Election Commission of India
                </h1>
                
            </nav>
            <div className="container">
            <br />
                <div className="sidebox">
                            <div className="side-nav">
                                <div className="user">
                                <img src={userimage} alt="userimage" className='user-img' />
                                <div>
                                <h2>user</h2>
                                <p>user@gmail.com</p>
                                </div>
                                <img src={star} alt='starimagr'  className='star-img' />
                                </div>

                                <ul>
                                    <li><p>Username</p></li>
                                    <li><p>Profile</p></li>
                                    <li><p>Edit Profile</p></li>
                                    <li><p>Setting</p></li>
                                    <li><p>Help ?</p></li>
                                    <li><p className='sidebarbutton'><button>Logout</button></p></li>       
                                </ul>
                                
                            </div>   
                </div>
                    <div className="bodycontent">
                        <div className="first-box">
                                <div className="text-box">
                                    <h2 ><b>Elections</b></h2>
                                    <div className="nothing">
                                    <h4>India is a constitutional democracy with a parliamentary system of government, and at the heart of the system is a commitment to hold regular, free and fair elections.</h4>
                                    <div className="vote-img">
                                    <img src={vote} alt="Voteimage"  /> </div>
                                    </div>
                                </div>
                        </div><br />
                        <br />
                        <br />
                        <div className="election">
                            <div className="party1" >
                            <h2>TAMIL NADU</h2>
                            <p>General Election of Legislative Assembly of Tamil Nadu,2024</p>
                            <Link to="/MainVoting"><button>VOTE NOW</button></Link>
                            </div>
                            <div className="party1">
                            <h2>KERALA</h2>
                            <p>General Election of Legislative Assembly of Kerala,2024</p>
                            <Link to="/MainVoting"><button>VOTE NOW</button></Link>
                            </div>
                            <div className="party1">
                            <h2>BYE-ELECTION</h2>
                            <p>This is some sample text content.</p>
                            <Link to="/MainVoting"><button>VOTE NOW</button></Link>
                            </div>
                            
                        </div>

                    </div>
               </div>
            </div>
        // </div>
    )
}
export default Votepage
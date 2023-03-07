import { LOGO_CDN_ID } from "../constants";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";

const Header = () => {
  const logoutHandler=()=>{
    setUser(null)
    localStorage.clear();
  }

  // const loginHandler=()=>{
  //   setUser(localStorage.getItem('user'))
  //   // localStorage.clear();
  // }
  
  const[ user, setUser ]=useState(localStorage.getItem('user'));

  useEffect(() => {
   <Header/>;
  }, [user]);

    return (
      
    

      <div id="navbar">
        <img
          id="logo"
          src= { LOGO_CDN_ID } 
        ></img>
        <ul>
          <Link to={'/'} className='nav-link active hover:text-blue-800'>Home</Link>
          <Link to={'/about_us'} className=' hover:text-blue-800'>About Us</Link>
        { user ?
         <Link to={'/'} onClick={logoutHandler} >Logout</Link> :
          <Link to={'/login'} className=' hover:text-blue-800'>Login</Link>
        }
        </ul>
      </div>
    );
  };

  export default Header;
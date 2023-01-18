import React from 'react';


const Header =()=>{
    return(
    <nav className='navbar navbar-expand bg-dark' data-bs-theme='dark'>
        <a className='navbar navbar-brand' href='/' >Navbar</a>
        <ul className="navbar-nav ms-auto ">        
                      <button className="btn btn-light me-3 " type="login" >Login</button>
                        <button className="btn btn-danger me-3  " type="sign up">Sign Up</button>
                        </ul>
                        <hr/>
    
    </nav>
    )
}
export default Header;
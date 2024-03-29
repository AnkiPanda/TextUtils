import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
//import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default function Navbar(props) {
  const handleActive = (op)=>{
    console.log(op);
    if(op === "About"){
      document.getElementById('homeTextUtils').classList.remove('active')
      document.getElementById('aboutTextUtils').classList.add('active')
    }
    else{
      document.getElementById('aboutTextUtils').classList.remove('active')
      document.getElementById('homeTextUtils').classList.add('active')

    }
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
       <Link className="navbar-brand" to="/TextUtils/" onClick={() => handleActive('Home')}>{props.title}</Link> 
      {/* <a className="navbar-brand" href="#">{props.title}</a> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
             <Link className="nav-link active" id="homeTextUtils" aria-current="page" to="/TextUtils/" onClick={() => handleActive('Home')}>Home</Link>
            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          </li>
           <li className="nav-item">
            <Link className="nav-link" id="aboutTextUtils" to="/TextUtils/about" onClick={() => handleActive('About')}>{props.aboutText}</Link>
          </li> 
          
        </ul>
        {/* <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
          <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height:'20px',width:'20px',cursor:'pointer',border:'1px solid black'}}></div>
          <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height:'20px',width:'20px',cursor:'pointer',border:'1px solid white'}}></div>

        </div> */}
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode==='light'?"dark" : "light"}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode(null)}}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'Text Utils',
    aboutText : "About"
  };
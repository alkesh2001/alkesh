import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const [eneble, seteneble] = useState('Eneble dark mode')
  
  const ene = ()=>{
    if(eneble === 'Eneble dark mode'){
      seteneble('Diseble dark mode')
    }
    else{
      seteneble('Eneble dark mode')
    }
  }
  


  return (
    <>

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} navbar-${props.mode1} bg-${props.mode1} bg-${props.mode}`}>
      <div className="container-fluid py-2 px-4 ">
        <Link className="navbar-brand " href="/" >{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to ="/" className="nav-link active " >Home</Link>
            </li>
            <li className="nav-item">
              <Link to ="/About" className="nav-link active" >{props.about}</Link>
            </li>
          </ul>
          {/* <div className="form-check form-switch mx-5">
            <input className="form-check-input "  onClick={()=>{props.togglemode(); ene() }} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.mode ==='dark'? 'white':'dark'}`} htmlfor="flexSwitchCheckDefault">{eneble}</label>
          </div>
          <div className="form-check form-switch mx-5">
            <input className="form-check-input "  onClick={()=>{props.togglemode(); ene() }} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.mode ==='dark'? 'white':'dark'}`} htmlfor="flexSwitchCheckDefault">{eneble}</label>
          </div> */}
          <div className="form-check form-switch mx-5">
            <input className="form-check-input bg-info"  onClick={props.toggle1} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.mode1 ==='dark'? 'white':'dark'}`} htmlfor="flexSwitchCheckDefault">{eneble}</label>
          </div>
          <div className="form-check form-switch mx-5">
            <input className="form-check-input "  onClick={()=>{props.togglemode(); ene() }} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.mode ==='dark'? 'white':'dark'}`} htmlfor="flexSwitchCheckDefault">{eneble}</label>
          </div>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
  </nav>

    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title:'default title use',
    about:'default about use'
};
 
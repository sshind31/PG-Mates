import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const logout=e=>{
        dispatch({type:'LogOut'})
        sessionStorage.clear();
        navigate("/");
    }
    const [gender,setgender]=useState('All')
    const [atype,setatype]=useState('All')
    const [furnish,setfurnish]=useState('All')
    const handleSearch=e=>{
        e.preventDefault()
        console.log("OK search")
        navigate('/search',{state:{gender:gender,atype:atype,furnish:furnish}})
    }
    const state=useSelector((state)=>state);
    console.log("LoggedIn ",state.loggedin.IsLoggedIn)
    const isadmin=state.loggedin.IsLoggedIn && sessionStorage.getItem("role")==="Admin" ?true:false;
    const isowner=state.loggedin.IsLoggedIn && sessionStorage.getItem("role")==="Owner" ?true:false;
    const isuser=state.loggedin.IsLoggedIn && sessionStorage.getItem("role")==="Customer" ?true:false;
    const profile=isowner ? "/oprofile": (isuser ? "/uprofile" : "/")
    return(

    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-info bg-gradient text-black fw-bold opacity-75">
            <div className="container-fluid">
           <Link className="navbar-brand" to="#">Flat Rental</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
             </button>
         <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
           </li>
            {isadmin?(
            <>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/owners">Owners</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/users">Users</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/apartments">Apartments</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/feedbacks">Feedbacks</Link>
            </li> 
            </>    
            ):""}
            {isowner?(
            <>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/apartments">Apartments</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/myusers">Users</Link>
            </li>
             <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/mypayments">Payments</Link>
            </li> 
            </>          
            ):""}
            {isuser?(
            <>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/mybookings">Bookings</Link>
            </li> 
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/feedback">Feedback</Link>
            </li> 
            </>          
            ):""}
           {!state.loggedin.IsLoggedIn ? (<>
           <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
           </li>
           <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/cregister">User Register</Link>
           </li>
           <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/oregister">Owner Register</Link>
           </li>
           </>
           ):(
               <>
            <li className="nav-item">
            <Link to={profile} className="nav-link active" aria-current="page">Hi! {state.loggedin.Username}</Link>
            </li>
            <li className="nav-item">
            <Link to="/login" className="nav-link active" aria-current="page" onClick={logout}>Logout</Link>
           </li>
           </>
           )}

         </ul>
           <form className="d-flex">
                <select className="form-control me-2" onChange={e=>setatype(e.target.value)}>
                    <option value="All">All Types</option>
                    <option>1 BHK</option>
                    <option>2 BHK</option>
                    <option>2 RK</option>
                </select>
                <select className="form-control me-2" onChange={e=>setgender(e.target.value)}>
                    <option value="All">All Genders</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <select className="form-control me-2" style={{width:"300px"}} onChange={e=>setfurnish(e.target.value)}>
                    <option value="All">All Types</option>
                    <option>Full Furnished</option>
                    <option>Semi Furnished</option>
                    <option>Unfurnished</option>
                </select>
                <button onClick={handleSearch} className="btn btn-warning bg-gradient text-white" type="submit"><i className="fa fa-search"></i></button>
            </form>
            </div>
         </div>
        </nav>
    </div>
    );
}


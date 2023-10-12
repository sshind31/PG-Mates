import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

export default function SearchResult(){
    const [data,setData]=useState([])
    const location=useLocation()
    console.log("Values",location.state)
    const gender=location.state.gender||'All'
    const furnish=location.state.furnish||'All'
    const atype=location.state.atype||'All'
    const state=useSelector((state)=>state);
    
    useEffect(()=>{
        console.log("searching,..")
        axios.get('http://localhost:8080/api/apartments/search?gender='+gender+'&furnish='+furnish+'&atype='+atype)
        .then(resp=>{
          setData(resp.data)
        })
    },[location.state])
    return(
    <div className='container mt-5'>
      <div className='row'>
      {data.length>0 ? data.map(x=>(
        <div className='col-sm-4'>
      <div className="card  border-2 shadow mb-2 bg-white rounded" key={x.id}>
            <div className='card-header text-center'>
                <h5 className="card-title">{x.name}</h5>
                {x.address}, {x.city} {x.district} India
            </div>
            <img src={'http://localhost:8080/'+x.photo1} style={{height:"300px"}} className="img-fluid rounded-start" alt="..."/>
                <div className="card-body">
              <p className="card-text font-weight-bold">
                <div className='float-start'>Type <span className='fw-bold'>{x.flattype}</span></div> 
                <div className='float-end fw-bold'>For {x.gender} only</div> 
                <div className='clearfix'></div>
                <div className='fw-bold'>{x.furnishtype}</div>
              </p>
              <p className="card-text">
                Facility: {x.extra}
                <br/>Rent ₹ {x.rent}+₹ {x.lightbill}(Electricity) (Negotiable)
              </p>
              <p>Owner Details: <span  className='fw-bold text-success'>{x.owner.name} (Ph: {x.owner.phone})</span></p>
              <p className="card-text">
                  {state.loggedin.IsLoggedIn && state.loggedin.Role==='Customer' ? (
              <Link className="btn btn-warning" to={'/apdetails/'+x.id}>Book Room</Link>
              ):""}
              </p>
            </div>
            </div>
            </div>
      )): (<>
      <h5 className='p-2 container'>No records found..</h5>
      </>)}
      </div>
    </div>      

    );
}


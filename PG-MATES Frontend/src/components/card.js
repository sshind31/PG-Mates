import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Card(){
    const [data,setData]=useState([])
    const state=useSelector((state)=>state);
    useEffect(()=>{
      axios.get('http://localhost:8080/api/apartments')
      .then(resp=>{
        setData(resp.data)
      })
    },[])
    return(
        <div className='mt-2 mx-auto' style={{width:"96%"}}>
      <div className='row'>
      {data.slice(0,4).map(x=>(
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
      ))}
    </div>      
                </div>
    );
}


import axios from "axios"
import { Carousel } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Swal from "sweetalert2"

export default function OwnerApartmentDetails(){
    const {id}=useParams()
    const navigate=useNavigate()
    const [data,setData]=useState({})
    const [users,setusers]=useState([])
    const deleteApartment=id=>{
        axios.delete('http://localhost:8080/api/apartments/'+id)
        .then(resp=>{
            Swal.fire({title:resp.data})
            navigate('/apartments')
        })
    }
    const activateApartment=id=>{
        axios.put('http://localhost:8080/api/apartments/'+id)
        .then(resp=>{
            Swal.fire({title:resp.data})
            navigate('/apartments')
        })
    }
    const handleCancel=id=>{
        axios.get('http://localhost:8080/api/bookings/cancel/'+id)
        .then(resp=>{
            Swal.fire({title:resp.data})
            navigate('/apartments')
        })
    }
    useEffect(()=>{
        axios.get('http://localhost:8080/api/apartments/'+id)
        .then(resp=>{
            setData(resp.data)
        })        
    },[])
    useEffect(()=>{
        axios.get('http://localhost:8080/api/bookings/apartments/'+data?.id)
        .then(resp=>{
            setusers(resp.data)
        })
    },[data])
    return(
        <>
        
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-5">
                    {data?.isactive ? (
                    <button onClick={e=>deleteApartment(data?.id)} className="btn btn-outline-danger btn-sm float-end">Deactivate Apartment</button>
                    ) :(
                        <button onClick={e=>activateApartment(data?.id)} className="btn btn-success btn-sm float-end">Activate Apartment</button>
                    )}
                    <h5>Apartment Details</h5>                    
                    <div className="card" style={{width: '28rem'}}>
                        <Carousel>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'http://localhost:8080/'+data?.photo1} height={300}
                        alt="First slide"
                    />                    
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'http://localhost:8080/'+data?.photo2} height={300}
                        alt="Second slide"
                    />
                    </Carousel.Item>
                    
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'http://localhost:8080/'+data?.photo3} height={300}
                        alt="Third slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'http://localhost:8080/'+data?.photo4} height={300}
                        alt="Fourth slide"
                    />
                    </Carousel.Item>
                </Carousel>
                        <div className="card-body">
                            <h5 className="card-title">{data?.name}</h5>
                            <h6>{data?.address}, {data?.city} {data?.district}</h6>                            
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">₹ {data?.rent}/month</li>
                            <li className="list-group-item">For {data?.gender} only</li>
                            <li className="list-group-item">{data?.furnishtype}</li>
                            <li className="list-group-item">{data?.flattype}</li>
                        </ul>
                        <div className="card-body">
                            Owner : {data?.owner?.name}
                        </div>
                    </div>

                </div>
                <div className="col-sm-7">
                    <h5 className="p-2">Users List</h5>
                    <table className="table table-bordered">
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                    {users.map(x=>(
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.customer.name}</td>
                            <td>{x.customer.gender}</td>
                            <td>{x.customer.address}</td>
                            <td>{x.customer.phone}</td>
                            <td>
                                <button onClick={e=>handleCancel(x.id)} className="btn btn-danger btn-sm">Cancel Booking</button>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                    </table>                  
                          
                </div>
            </div>
        </div>
        </>
    )
}
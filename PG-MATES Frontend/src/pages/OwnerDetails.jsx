import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Swal from 'sweetalert2'

export default function OwnerDetails(){
    const [data,setData]=useState()
    const {id}=useParams()
    const handleActivate = e=>{
        let status=data?.active?'DeActivate':'Activate'
        Swal.fire({
            title: `Do you want to ${status} this owner?`,
            showCancelButton: true,
            confirmButtonText: status,
            }).then((result) => {
            if (result.isConfirmed) {
                updateStatus()                
            } 
            })
    }
    const updateStatus=()=>{
        axios.put('http://localhost:8080/api/owners/'+id)
        .then(resp=>{
            loadData()
            Swal.fire({
                title: resp.data
            })            
        })
    }
    const loadData=()=>{
        axios.get('http://localhost:8080/api/owners/'+id)
        .then(resp=>{
            setData(resp.data)
        })
    }
    useEffect(()=>{
        loadData()
    },[])
    return(        
        <>
            <div className="container mt-5">
            {data?.active ? (
                <button className="btn btn-danger float-end" onClick={handleActivate}>DeActivate</button>
            ):(
                <button className="btn btn-primary float-end" onClick={handleActivate}>Activate</button>
            )}
            <h4>Owner Details of Owner {data?.name}</h4>
            <table className="table table-bordered mt-4">
                <thead>
                    <tr>
                        <th>Owner name</th>
                        <th>{data?.name}</th>
                        <th rowspan={4}>
                            <img style={{height:"250px"}} src={'http://localhost:8080/'+data?.uidphoto} alt='Adhar image' /><br/>
                            Adhar Id     
                        </th>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <th>{data?.gender}</th>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <th>{data?.address}</th>
                    </tr>
                    <tr>
                        <th>Phone no</th>
                        <th>{data?.phone}</th>
                    </tr>
                    <tr>
                        <th>Email Id</th>
                        <th>{data?.userid}</th>
                        <th rowSpan={3}>
                            <img style={{height:"250px"}} src={'http://localhost:8080/'+data?.lightbill} alt="Light Bill" /><br/>
                            Light Bill Image
                        </th>
                    </tr>
                    <tr>
                        <th>Owner Status</th>
                        <th>{data?.active ? 'Active':'Inactive'}</th>
                    </tr>
                </thead>
            </table>
            </div>
        </>
    )
}

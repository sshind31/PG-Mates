import axios from "axios"
import { useEffect, useState } from "react"

export default function UserProfile(){
    const [data,setData]=useState()
    useEffect(()=>{
        axios.get('http://localhost:8080/api/customers/'+sessionStorage.getItem("id"))
        .then(resp=>{
            setData(resp.data)
        })
    },[])
    return(        
        <>
            <div className="container mt-5">            
            <h4>User Profile {data?.name}</h4>
            <table className="table table-bordered mt-4">
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>{data?.name}</th>
                        <th rowspan={7}>
                            <img src={'http://localhost:8080/'+data?.uidphoto} style={{width:"500px"}} alt='Adhar Card' /><br/>
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
                    </tr>
                     <tr>
                        <th>Aadhar No</th>
                        <th>{data?.uid}</th>                        
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

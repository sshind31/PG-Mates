import axios from "axios"
import { useEffect, useState } from "react"

export default function FeedbackList(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/api/admin/feedbacks')
        .then(resp=>{
            setData(resp.data)
        })
    },[])
    return(
        <>
        <div className="container mt-5">
            <h5 className="p-2">Users Feedbacks</h5>
            <table className="table table-bordered">
            <thead>
                <th>Id</th>
                <th>User Name</th>
                <th>Gender</th>
                <th>Apartment Name</th>
                <th>Address</th>
                <th>Feedback</th>
                <th>Date</th>
            </thead>
            <tbody>
            {data.map(x=>(
                <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.customer.name}</td>
                    <td>{x.customer.gender}</td>
                    <td>{x.apartment.name}</td>
                    <td>{x.apartment.address}</td>
                    <td>{x.descr}</td>
                    <td>{x.createdon}</td>
                </tr>
            ))}

            </tbody>
            </table>
        </div>
        </>
    )
}
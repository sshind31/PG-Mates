import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function ForgotPassword(){
    
    const [userid,setuserid]=useState()
    const [question,setquestion]=useState()
    const [pwd,setpwd]=useState()
    const [answer,setanswer]=useState()
    const navigate=useNavigate()

    const handleSubmit=e=>{
        e.preventDefault()
        const data={
            "answer":answer,
            "userid":userid,
            "question":question,
            "pwd":pwd    
        }

        axios.post('http://localhost:8080/api/admin/reset',data)
        .then(resp=>{
            Swal.fire({title:resp.data})
            navigate('/login')
        })
        .catch(error=>{
            Swal.fire({title:error.response.data})        
        })
    }
    
    return(
        <>
        <div className="container mt-5">
            <h5>Forogot Password</h5>
            <div className="row">
                <div className="col-sm-5 mx-auto">
<form>
                  <div>
                    <div className="mb-3 row">
                        <label className="col-sm-4 col-form-label">User Id</label>
                        <div className="col-sm-8">
                        <input type="text" onChange={e=>setuserid(e.target.value)} className="form-control"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-4 col-form-label">Security Question</label>
                        <div className="col-sm-8">
                        <select className="form-control"
                            value={question}
                            onChange={e=>setquestion(e.target.value)}
                            required
                            >
                            <option>Select Security Question</option>
                            <option>What is your nick name ?</option>
                            <option>Which is your favorite pet name ?</option>
                        </select>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-4 col-form-label">Answer</label>
                        <div className="col-sm-8">
                        <input type="text" onChange={e=>setanswer(e.target.value)} className="form-control"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-4 col-form-label">New Password</label>
                        <div className="col-sm-8">
                        <input type="password" onChange={e=>setpwd(e.target.value)} className="form-control"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-4 col-form-label">Repeat Password</label>
                        <div className="col-sm-8">
                        <input type="password" className="form-control"/>
                        </div>
                    </div>
                    
                    
                    <button onClick={handleSubmit} className="btn btn-primary float-end">Reset Now</button>
                </div>
            </form>
                </div>
            </div>
        </div>
            
        </>
    )
}
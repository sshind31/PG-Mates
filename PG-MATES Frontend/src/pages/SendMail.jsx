import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"

export default function SendMail(){
    const id=useParams()
    const [subject,setsubject]=useState(null)
    const [message,setmessage]=useState(null)

    const handleSubmit=e=>{
        e.preventDefault()
        if(message==null || subject==null){
            Swal.fire({title:'Please fill the feedback'})
            return;
        }
        const data={        
            "userid":id.id,
            "message":message,
            "subject":subject
        }

        axios.post('http://localhost:8080/api/admin/sendmail',data)
        .then(resp=>{
            Swal.fire({title:resp.data})
        })
        .catch(error=>{
            Swal.fire({title:error.response.data})        
        })
    }
    
    return(
        <>
        <div className="container mt-5">
            <h5>Send Mail Form</h5>
            <div className="row">
                <div className="col-sm-5 mx-auto">
            <form>
                  <div>
                    <div className="mb-3">
                        <label>Subject</label>
                        <input type="text" placeholder="Your subject here" onChange={e=>setsubject(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label>Message</label>
                        <textarea rows={5} placeholder="Your message here" onChange={e=>setmessage(e.target.value)} className="form-control"></textarea>
                    </div>                    
                    <button onClick={handleSubmit} className="btn btn-success float-end">Send Now</button>
                </div>
            </form>
                </div>
            </div>
        </div>
            
        </>
    )
}
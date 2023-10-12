import React, { useState } from "react";
import axios from "axios";
import "../components/3.css";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";

export default function OwnerRegister() {
  return (
    <div>
      <OwnerTable></OwnerTable>
    </div>
  );
}

function OwnerTable() {
  const navigate=useNavigate()
  const [name, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [contactNo, setphonenumber] = useState("");
  const [password, setpassword] = useState("");
  const [uidPic, setadharcardimage] = useState("");
  const [lightbillPic, setlightbillimage] = useState("");
  const [address,setAddress]=useState('')
  const [question,setQuestion]=useState('')
  const [answer,setAnswer]=useState('')

  const takefullname = (e) => {
    setfullname(e.target.value);
  };

  const takeemail = (e) => {
    setemail(e.target.value);
  };

  const takegender = (e) => {
    setgender(e.target.value);
  };

  const takephonenumber = (e) => {
    setphonenumber(e.target.value);
  };

  const takesetpassword = (e) => {
    setpassword(e.target.value);
  };
  const handleFileInput=e=>{
    if(e.target.name==='lightbill'){
      setlightbillimage(e.target.files[0])
    }else{
      setadharcardimage(e.target.files[0])
    }
  }
  
  var letters = /^[A-Za-z ]+$/;
  const regex =
    /^([a-zA-Z0-9_.\-\ ])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const handleForm = (e) => {
    e.preventDefault();
    if (name == "") {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter valid details!",
      });
    } else if (!letters.test(name)) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Valid Name",
      });
    } else if (name.length < 2 || name.length > 15) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Name should be min 2 and max length is 15 letters",
      });
    } else if (email === "") {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter valid details!",
      });
    } else if (!regex.test(email)) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Valid Email Address",
      });
    } else if (contactNo === "") {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter Contact Number",
      });
    } else if (password === "") {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter password",
      });
    } else if (password.length < 6 || password.length > 15) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password length is min 6 and max length is 15",
      });
    } else {
      submit();
    }
  };
  const submit = async () => {

    const fd=new FormData()
    fd.append("name",name)
    fd.append("userid",email)
    fd.append("gender",gender)
    fd.append("phone",contactNo)
    fd.append("pwd",password)
    fd.append("uidfile",uidPic)    
    fd.append("lightbillfile",lightbillPic)    
    fd.append("question",question)
    fd.append("answer",answer)
    fd.append("address",address)

    const url = `http://localhost:8080/api/owners`;
    await axios.post(url, fd)
    .then(resp=>{
      swal.fire({
            position: "center",
            icon: "success",
            title: "Registered Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
      navigate("/login")
    })
    .catch(error=>{
      swal.fire({
            position: "center",
            icon: "error",
            title: error.response.data,
            showConfirmButton: false,
            timer: 1500,
          });
    });
  };

  return (
    <div className="container mt-5">
      <div className="title">Owner Registration Form</div>
            <form>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              id="firstName"
              value={name}
              onChange={takefullname}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Address</span>
            <input
              type="text"
              placeholder="Enter your address"
              id="emailid"
              value={address}
              onChange={e=>setAddress(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Mobile Number</span>
            <input
              type="text"
              maxLength={10}
              minLength={10}
              placeholder="Enter your number"
              id="mobileNo"
              value={contactNo}
              onChange={takephonenumber}
              required
            />
          </div>
          
          
          <div className="input-box">
            <span className="details">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              id="emailid"
              value={email}
              onChange={takeemail}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              value={password}
              onChange={takesetpassword}
              required
            />
          </div>
          <div className="input-box border-0">
            <span className="details">Electricity Bill Image</span>
            <input
              type="file"
              className="form-control"
              name="lightbill"
              onChange={handleFileInput}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Security Question</span>
            <select
              value={question}
              onChange={e=>setQuestion(e.target.value)}
              required
            >
              <option>Select Security Question</option>
              <option>What is your nick name ?</option>
              <option>Which is your favorite pet name ?</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Answer</span>
            <input
              type="text"
              placeholder="Enter your Answer"              
              value={answer}
              onChange={e=>setAnswer(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Adhar Card Photo</span>
            <input
            className="form-control"
              type="file"
              placeholder="Upload Aadhar Card"
              id="formFileSm"
              name="uid"
              onChange={handleFileInput}
              required
            />
          </div>
        </div>
        <div className="gender-details">
          <input
            type="radio"
            name="gender"
            id="dot-1"
            value="Male"
            onChange={takegender}
          />
          <input
            type="radio"
            name="gender"
            id="dot-2"
            value="Female"
            onChange={takegender}
          />
          <input
            type="radio"
            name="gender"
            id="dot-3"
            value="NA"
            onChange={takegender}
          />
          <span className="gender-title">Gender</span>
          <div className="category">
            <label htmlFor="dot-1">
              <span className="dot one"></span>
              <span className="gender">Male</span>
            </label>
            <label htmlFor="dot-2">
              <span className="dot two"></span>
              <span className="gender">Female</span>
            </label>
            <label htmlFor="dot-3">
              <span className="dot three"></span>
              <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
        <div className="button">
          <input type="submit" className="bg-success bg-gradient" value="Submit" onClick={handleForm} />
        </div>
      </form>
    </div>
  );
}

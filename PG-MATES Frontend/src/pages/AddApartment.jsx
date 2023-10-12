import React, { useState } from "react";
import axios from "axios";
import "../components/3.css";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";

export default function AddApartment() {
  return (
    <div>
      <AddApartmentTable />
    </div>
  );
}

function AddApartmentTable() {
  const navigate=useNavigate()
  const [name, setfullname] = useState("");
  const [address,setAddress]=useState('')
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [furnish, setfurnish] = useState("");
  const [atype, setatype] = useState("");
  const [ebill, setebill] = useState("");
  const [extra, setextra] = useState("");
  const [gender, setgender] = useState("");
  const [rent, setrent] = useState("");
  const [pic1, setpic1] = useState("");
  const [pic2, setpic2] = useState("");
  const [pic3, setpic3] = useState("");
  const [pic4, setpic4] = useState("");

  const handleFile1Input=e=>{
      setpic1(e.target.files[0])
  }
  const handleFile2Input=e=>{
      setpic2(e.target.files[0])
  }
  const handleFile3Input=e=>{
      setpic3(e.target.files[0])
  }
  const handleFile4Input=e=>{
      setpic4(e.target.files[0])
  }

  const handleForm = (e) => {
    e.preventDefault();     
    submit();
  };
  const submit = async () => {
    const fd=new FormData()
    fd.append("name",name)
    fd.append("city",city)
    fd.append("district",state)
    fd.append("rent",rent)
    fd.append("flattype",atype)
    fd.append("pic1",pic1)    
    fd.append("pic2",pic2)    
    fd.append("pic3",pic3)    
    fd.append("pic4",pic4)    
    fd.append("furnishtype",furnish)
    fd.append("gender",gender)
    fd.append("address",address)
    fd.append("lightbill",ebill)
    fd.append("extra",extra)
    fd.append("ownerid",sessionStorage.getItem("id"))

    const url = `http://localhost:8080/api/apartments`;
    await axios.post(url, fd)
    .then(resp=>{
      swal.fire({
            position: "center",
            icon: "success",
            title: resp.data,
            showConfirmButton: false,
            timer: 1500,
          });
      navigate("/apartments")
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
      <div className="title">Apartment Registration</div>
      <form>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Apartment Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              id="firstName"
              value={name}
              onChange={e=>setfullname(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Address</span>
            <input
              type="text"
              placeholder="Enter address"
              id="emailid"
              value={address}
              onChange={e=>setAddress(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">City</span>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={e=>setcity(e.target.value)}
              required
            />
          </div>
          
          
          <div className="input-box">
            <span className="details">State</span>
            <input
              type="text"
              placeholder="Enter state"
              value={state}
              onChange={e=>setstate(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Monthly Rent</span>
            <input
              type="number"
              min={1}
              placeholder="Enter your rent"
              value={rent}
              onChange={e=>setrent(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Electricity bill</span>
            <input
              type="number"
              min={1}
              placeholder="Enter your rent"
              value={ebill}
              onChange={e=>setebill(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Extra Featyres</span>
            <input
              type="text"              
              placeholder="Enter extra features"
              value={extra}
              onChange={e=>setextra(e.target.value)}
              required
            />
          </div>
          
          <div className="input-box">
            <span className="details">Gender</span>
            <select
              value={gender}
              onChange={e=>setgender(e.target.value)}
              required
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Select Apartment Type</span>
            <select
              value={atype}
              onChange={e=>setatype(e.target.value)}
              required
            >
              <option>Select Type</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>2 RK</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Select Furnish Type</span>
            <select
              value={furnish}
              onChange={e=>setfurnish(e.target.value)}
              required
            >
              <option>Select Type</option>
              <option>Full Furnished</option>
              <option>Semi Furnished</option>
              <option>Unfurnished</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">Photo 1</span>
            <input
              type="file"
              placeholder="First Photo"
              onChange={handleFile1Input}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Photo 2</span>
            <input
              type="file"
              placeholder="First Photo"
              onChange={handleFile2Input}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Photo 3</span>
            <input
              type="file"
              placeholder="First Photo"
              onChange={handleFile3Input}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Photo 4</span>
            <input
              type="file"
              placeholder="First Photo"
              onChange={handleFile4Input}
              required
            />
          </div>
        </div>
        
        <div className="button">
          <input type="submit" value="Submit" onClick={handleForm} />
        </div>
      </form>
    </div>
  );
}

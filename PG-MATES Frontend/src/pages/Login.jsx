import { useState } from "react";
import axios from "axios";
import "../components/login.css";
import aptvideo from "./video/aptvideo.mp4";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import { useDispatch } from "react-redux";

function Login() {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch()

  const regex =
    /^([a-zA-Z0-9_\.\-\ ])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const handleForm = (e) => {
    e.preventDefault();
    if (email === "") {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter valid details!",
      });
    } else if (password === "") {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter password",
      });
    } else {
      checkUser();
    }
  };

  const checkUser = async () => {
    let user = { userid: email, pwd: password };
    await axios.post("http://localhost:8080/api/admin/validate", user)
    .then(resp=>{
        sessionStorage.setItem("uname",resp.data.uname)
        sessionStorage.setItem("role",resp.data.role)
        sessionStorage.setItem("userid",resp.data.userid)
        sessionStorage.setItem("id",resp.data.id)
        dispatch({type:'IsLoggedIn'})
        swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome "+resp.data.role,
          showConfirmButton: false,
          timer: 1500,
      });
      navigate('/')
    })
    .catch(error=>{
      swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data          
        });   
    })    
  };

  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={aptvideo} type="video/mp4" />
      </video>
      <div className="center">
        <h5 className="p-3 text-center bg-info rounded-top bg-gradient text-white">Login</h5>
        <form>
          <div className="txt_field">
            <input
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
            <label>Email Id</label>
          </div>
          <div className="txt_field">
            <input
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span></span>
            <label>Password</label>
          </div>
          <Link to="/forgotpwd" className="pass d-block">Forgot Password?</Link>
          <br/>
          <input
            type="submit"
            value="Login"
            onClick={handleForm}
          />          
        </form>
      </div>
    </div>
  );
}

export default Login;

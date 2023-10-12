import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="Footer stick-bottom  text-center text-white mx-auto" style={{ background: "#5595f4",width:"96%" }}>

      <div className="container-fluid p-1"  >

        <a className="btn btn-outline-light btn-floating m-2" href="https://www.facebook.com/login.php" type="button"
        ><i className="fa fa-facebook-f"></i
        ></a>

        <a className="btn btn-outline-light btn-floating m-2" href="https://twitter.com/login/" type="button"
        ><i className="fa fa-twitter"></i
        ></a>

        <a className="btn btn-outline-light btn-floating m-2" href="https://myaccount.google.com/" Type="button"
        ><i className="fa fa-google"></i
        ></a>

        <a className="btn btn-outline-light btn-floating m-2" href="https://www.instagram.com/_kussh" type="button"
        ><i className="fa fa-instagram"></i
        ></a>

        <a className="btn btn-outline-light btn-floating m-2" href="https://www.linkedin.com/uas/login" type="button"
        ><i className="fa fa-linkedin"></i
        ></a>


        <a className="btn btn-outline-light btn-floating m-2" href="https://github.com/login" type="button"
        ><i className="fa fa-github"></i
        ></a>


      </div>
      <div>
        <h2>Flat Rental</h2>
        <p>Here are the HOMEs where comfort begins..Explore the website for much more Amazing experience !
        </p>
        <p>Contact No: +91987654321    &ensp; &ensp; &ensp;    Gmail: flatrental@gmail.com</p>

      </div>


      <div className="text-center p-1" >
        © 2022 Copyright by Flat Rental
        
      </div>
<br />
    </footer>
  );
}

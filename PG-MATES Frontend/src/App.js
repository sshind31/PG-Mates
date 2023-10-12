import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/card";
import Carouselslide from "./pages/Carousel";
import Aboutus from "./pages/Aboutus";
import Team from "./pages/Team";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactus from "./pages/Contactus";
import Login from "./pages/Login";
import OwnersList from "./pages/OwnersList";
import CustomersList from "./pages/CustomerList";
import FeedbackList from "./pages/FeedbacksList";
import OwnerDetails from "./pages/OwnerDetails";
import UserDetails from "./pages/UserDetails";
import Apartments from "./pages/Apartments";
import AddApartment from "./pages/AddApartment";
import ApartmentDetails from "./pages/ApartmentDetails";
import MyBookings from "./pages/MyBookings";
import UserFeedback from "./pages/UserFeedback";
import OwnerApartmentDetails from "./pages/OwnerApartmentDetails";
import SearchResult from "./pages/SearchResult";
import MyUsers from "./pages/MyUsers";
import SendMail from "./pages/SendMail";
import UserProfile from "./pages/UserProfile";
import OwnerProfile from "./pages/OwnerProfile";
import ForgotPassword from "./pages/ForgotPassword";
import MyPayments from "./pages/MyPayments";
import CustomerRegister from "./pages/CustomerRegister";
import OwnerRegister from "./pages/OwnerRegister";
import AdminLogin from "./pages/AdminLogin";

export default function App() {
  return (
   <div style={{width:"100vw"}}>
     <BrowserRouter>
     <Navbar/>     
        <Routes>
          <Route element={<><Carouselslide/><Card/><Aboutus /><Team /><Footer/></>} path="/" exact />
          <Route element={<><SearchResult /></>} path="/search" exact />
          <Route element={<><Carouselslide/><Aboutus/><Footer/></>} path="/about" />
          <Route element={<><Carouselslide/><Contactus/><Footer/></>} path="/contact" />
          <Route element={<><Carouselslide/><Team/><Footer/></>} path="/team" />
          <Route element={<Login/>} path="/login" />
          <Route element={<AdminLogin/>} path="/admin" />
          <Route element={<CustomerRegister/>} path="/cregister" />
          <Route element={<OwnerRegister/>} path="/oregister" />
          <Route element={<OwnersList/>} path="/owners" />
          <Route element={<OwnerDetails/>} path="/odetails/:id" />
          <Route element={<CustomersList/>} path="/users" />
          <Route element={<UserDetails/>} path="/udetails/:id" />
          <Route element={<FeedbackList/>} path="/feedbacks" />
          <Route element={<Apartments/>} path="/apartments" />
          <Route element={<OwnerApartmentDetails/>} path="/apartmentdetails/:id" />
          <Route element={<AddApartment/>} path="/addnew" />
          <Route element={<ApartmentDetails/>} path="/apdetails/:id" />
          <Route element={<MyBookings/>} path="/mybookings" />
          <Route element={<UserFeedback/>} path="/feedback" />
          <Route element={<MyUsers/>} path="/myusers" />
          <Route element={<MyPayments/>} path="/mypayments" />
          <Route element={<SendMail/>} path="/sendmail/:id" />
          <Route element={<UserProfile/>} path="/uprofile" />
          <Route element={<OwnerProfile/>} path="/oprofile" />
          <Route element={<ForgotPassword/>} path="/forgotpwd" />
        </Routes>
     </BrowserRouter>     
   </div>
  );
}


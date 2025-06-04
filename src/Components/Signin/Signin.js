import "./Signin.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();



  const handleSignin = () => {
    console.log("Email = " + Email);
    console.log("Password = " + Password);


    let Data = JSON.parse(sessionStorage.getItem("items")) || [];

let matchdata = Data.filter((e) => e.Email === Email && e.Password === Password)

    if (matchdata.length > 0) {

      sessionStorage.setItem("login", Email);
      navigate('/')

    } else {
      alert("invalid email or password");
    }

  }
  
  return (
    <>
      <Header />
      <div>
        <div className="container" >
          <h1 className="i2"> Signin </h1>

          <label>Email:</label>
          <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />

          <label>Password:</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />

          <button class="b2" onClick={handleSignin}>Signin</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signin;
import "./Signup.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

    const [firstName, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignup = () => {
        console.log("Firstname = " + firstName);
        console.log("Lastnme = " + lastname);
        console.log("MobileNumber = " + MobileNumber);
        console.log("Email = " + Email);
        console.log("Password = " + Password);

        let data = JSON.parse(sessionStorage.getItem("items"));

       if (!Array.isArray(data)) {
    data = [];
  }


        data.push({
            firstName: firstName,
            lastname: lastname,
            MobileNumber: MobileNumber,
            Email: Email,
            Password: Password
        })

        sessionStorage.setItem("items", JSON.stringify(data));
        sessionStorage.setItem("login", Email);
        navigate("/")
    }

    return (
        <>
            <Header />
            <div>
                <div class="container" >
                    <h1 class="i1"> Signup </h1>

                    <label>First Name:</label>
                    <input type="text" placeholder="name" onChange={(e) => setFirstName(e.target.value)} />

                    <label>Last Name:</label>
                    <input type="text" placeholder="name" onChange={(e) => setLastName(e.target.value)} />

                    <label>Mobile Number:</label>
                    <input type="Number" placeholder="number" onChange={(e) => setMobileNumber(e.target.value)} />

                    <label>Email:</label>
                    <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />

                    <label>Password:</label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />

                    <label>Re-Enter Password:</label>
                    <input type="text" />

                    <button class="b1" onClick={handleSignup}>Signup</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Signup;
import "./My Profile.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyProfile() {
  const [FirstName, setFirstname] = useState("");
  const [LastName, setLastname] = useState("");
  const [MobileNumber, setMobilenumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const handlePassword = () => {
       navigate('/Password');
  }

  const handlesave = () => {
    console.log("save button click");

    const loginEmail = sessionStorage.getItem("login");
    let users = JSON.parse(sessionStorage.getItem("items")) || [];

    const updatedUsers = users.map((user) => {
      if (user.Email === loginEmail) {
        return {
          firstName: FirstName,
          lastname: LastName,
          MobileNumber: MobileNumber,
          Email: Email,
          Password: Password,
        };
      }
      return user;
    });

    sessionStorage.setItem("items", JSON.stringify(updatedUsers));
    sessionStorage.setItem("login", Email); 
  };

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("items"));
    const email = sessionStorage.getItem("login");

    if (Array.isArray(data) && email) {
      const User = data.find((user) => user.Email === email);

      if (User) {
        setFirstname(User.firstName || "");
        setLastname(User.lastname || "");
        setMobilenumber(User.MobileNumber || "");
        setEmail(User.Email || "");
        setPassword(User.Password || "");
      } else {
        console.log("invalid");
      }
    }
  }, []);

  return (
    <>
      <Header />
      <div>
        <div className="container">
          <h1 className="i2">My Profile</h1>

          <label><b>First Name:</b></label>
          <input type="text" value={FirstName} onChange={(e) => setFirstname(e.target.value)} />

          <label><b>Last Name:</b></label>
          <input type="text" value={LastName} onChange={(e) => setLastname(e.target.value)} />

          <label><b>Mobile Number:</b></label>
          <input type="number" value={MobileNumber} onChange={(e) => setMobilenumber(e.target.value)}  />

          <label><b>Email:</b></label>
          <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)}/>

          <label><b>Password:</b></label>
          <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} />

         <div class="a1">
        
          <button className="s1" onClick={handlesave}>Save</button>

          <button className="c1" onClick={handlePassword}>Change Password</button>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyProfile;

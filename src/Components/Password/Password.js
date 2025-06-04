import "./Password.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Password() {
  const [OldPassword, setOldPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handlesave = () => {
    console.log("save");

    const Email = sessionStorage.getItem("login");
    let users = JSON.parse(sessionStorage.getItem("items")) || [];

    const currentUser = users.find(user => user.Email === Email);

    if ( currentUser.Password !== OldPassword){
          alert("old password is incorrect");
          return;
      }
      if(NewPassword !== ConfirmPassword){
          alert("new password and confirm password are not match");
          return;
      }
    const updatedUsers = users.map((user) => {
      if (user.Email === Email) {
        return {
          ...user,
          Password: NewPassword, 
        };
      }
      return user;
    });

    sessionStorage.setItem("items", JSON.stringify(updatedUsers));
     alert("Password changed successfully!");

    navigate("/");
  };

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("items"));
    const email = sessionStorage.getItem("login");

    if (Array.isArray(data) && email) {
      const user = data.find((user) => user.Email === email);

      if (user) {
         
        console.log("Invalid user");
      }

      
    }
  }, []);

  return (
    <>
      <Header />

      <div className="container">
        <label><b>Old Password</b></label>
        <input type="password" onChange={(e) => setOldPassword(e.target.value)} />

        <label><b>New Password</b></label>
        <input type="password" onChange={(e) => setNewPassword(e.target.value)} />

        <label><b>Confirm Password</b></label>
        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />

        <button className="s2" onClick={handlesave}>Save</button>
      </div>

      <Footer />
    </>
  );
}

export default Password;

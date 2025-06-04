import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
function Header() {

    const [isLogin, setIsLogin] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        let logindata = sessionStorage.getItem("login") || [];
        console.log("logindata ="+ logindata);
        if (logindata.length > 0) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, []);

    const handleSignin = () => {
        navigate('/Signin');
    }
    const handleSignup = () => {
        navigate('/Signup');
    }
    const handleMyProfile = () => {
        navigate('/MyProfile');
    }
    const handleLogout = () => {
        sessionStorage.removeItem('login');
        setIsLogin(false);
        navigate('/');
    }
    return (
        <div class="nav">

            <ul class="nav2">
                <li>Features</li>
                <li>Elements</li>
                <li>Patterns</li>
                <li>Cards</li>
                <li>Demos</li>
                <li>Docs</li>
            </ul>
            {
                isLogin ? <button class="btn3" onClick={handleLogout}><b>Logout</b></button> : <><button class="btn1" onClick={handleSignin}><b>Signin</b></button>
                    <button class="btn2" onClick={handleSignup}><b>Signup</b></button></>
            }
                 <button class="btn4" onClick={handleMyProfile}><b>MyProfile</b></button>

        </div>
    )
}

export default Header;
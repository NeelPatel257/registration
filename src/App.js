import logo from './logo.svg';
import './App.css';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import Password from './Components/Password/Password';
import { Route, Routes } from 'react-router-dom';
import MyProfile from './Components/My Profile/My Profile';
function App() {

  return (
    <Routes>

      <Route path="/Signin" element={<Signin />} />

      <Route path="/Signup" element={<Signup />} />

      <Route path="/MyProfile" element={<MyProfile />} />

      <Route path="/" element={<Home />} />

      <Route path="/Password" element={<Password />} />

    </Routes>
  );

}

export default App;

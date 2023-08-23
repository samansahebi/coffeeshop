import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Layout from './pages/Layout'
import Shop from './pages/Shop'
import {HiHome} from "react-icons/hi";
import {FaShop} from "react-icons/fa6";
import {FaBagShopping} from "react-icons/fa6";
import {FaUser} from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Info from "./pages/Info";
import ContactUs from "./pages/ContactUs";
import Orders from "./pages/Orders";
import Login from "./pages/Login";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">

          <div>
            <div className='flex fixed items-center bottom-0 w-full h-14 bg-[#111416] rounded-t-lg z-50 border-t border-[#7B7B7B]'>
                <div onClick={() => navigate('/')} className='flex w-full justify-center p-2 m-1 rounded-md'>
                    <HiHome size={25} color='7B7B7B'/>
                </div>
                <div onClick={() => navigate('/shop')} className='flex w-full justify-center p-2 m-1 rounded-md'>
                    <FaShop size={25} color='7B7B7B'/>
                </div>
                <div onClick={() => navigate('/checkout')} className='flex w-full justify-center p-2 m-1 rounded-md'>
                    <FaBagShopping size={25} color='7B7B7B'/>
                </div>
                <div onClick={() => navigate('/profile')} className='flex w-full justify-center p-2 m-1 rounded-md'>
                    <FaUser size={25} color='7B7B7B'/>
                </div>
            </div>
            <Routes>
                <Route exact path="/" element={<Layout/>} />
                <Route exact path="login" element={<Login/>} />
                <Route exact path="home" element={<Home/>} />
                <Route exact path="shop" element={<Shop/>} />
                <Route exact path="checkout" element={<Checkout/>} />
                <Route exact path="profile" element={<Profile/>} />
                <Route exact path="profile/info" element={<Info/>} />
                <Route exact path="profile/myorders" element={<Orders/>} />
                <Route exact path="profile/contact-us" element={<ContactUs/>} />
                <Route exact path="shop/product" element={<Product/>} />
            </Routes>
          </div>


    </div>
  );
}

export default App;

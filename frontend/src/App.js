import {Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import Layout from './pages/Layout'
import Shop from './pages/Shop'
import {HiHome} from "react-icons/hi";
import {FaMagnifyingGlass, FaShop} from "react-icons/fa6";
import {FaBagShopping} from "react-icons/fa6";
import {FaUser} from "react-icons/fa6";
import {useNavigate} from 'react-router-dom';
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Info from "./pages/Info";
import ContactUs from "./pages/ContactUs";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import {useSelector} from "react-redux";
import SelectAddress from "./pages/SelectAddress";

function App() {
    const {access} = useSelector(({authentication}) => authentication)
    const navigate = useNavigate();

    return (
        <div className="App">

            <div>
                <div
                    className='flex fixed items-center justify-around md:justify-end bottom-0 md:top-0 w-full h-14 bg-[#111416] md:rounded-t-none rounded-t-lg z-50 md:border-b md:border-t-none border-t border-[#7B7B7B]'>
                    <div
                        className='flex flex-row-reverse w-full justify-between items-center text-[#7B7B7B] mr-2 md:flex hidden bg-[#24262D] rounded'>
                        <div className="pl-2">
                            <FaMagnifyingGlass/>
                        </div>
                        <input className='bg-[#24262D] p-2 rounded w-full text-right outline-none text-[#7B7B7B]'
                               placeholder='جستجوی محصولات'/>

                    </div>
                    <div onClick={() => navigate('/')} className='flex  justify-center p-2 m-1 rounded-md'>
                        <HiHome size={25} color='7B7B7B'/>
                    </div>
                    <div onClick={() => navigate('/shop')} className='flex  justify-center p-2 m-1 rounded-md'>
                        <FaShop size={25} color='7B7B7B'/>
                    </div>
                    <div onClick={() => navigate('/checkout')}
                         className='flex  justify-center p-2 m-1 rounded-md'>
                        <FaBagShopping size={25} color='7B7B7B'/>
                    </div>
                    <div onClick={() => navigate('/profile')} className='flex  justify-center p-2 m-1 rounded-md'>
                        <FaUser size={25} color='7B7B7B'/>
                    </div>

                </div>
                <Routes>
                    <Route exact path="/" element={<Layout/>}/>
                    <Route exact path="login" element={<Login/>}/>
                    <Route exact path="otp" element={<OTP/>}/>
                    <Route exact path="home" element={<Home/>}/>
                    <Route exact path="shop" element={<Shop/>}/>
                    <Route exact path="select-address" element={<SelectAddress/>}/>
                    <Route exact path="checkout" element={<Checkout/>}/>
                    {access ? <Route exact path="profile" element={<Profile/>}/> :
                        <Route exact path="profile" element={<Login/>}/>}
                    <Route exact path="profile/info" element={<Info/>}/>
                    <Route exact path="profile/myorders" element={<Orders/>}/>
                    <Route exact path="profile/contact-us" element={<ContactUs/>}/>
                    <Route exact path="shop/:slug" element={<Product/>}/>
                </Routes>
            </div>


        </div>
    );
}

export default App;

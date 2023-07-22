import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Layout from './pages/Layout'
import Shop from './pages/Shop'
import {BottomNavigation} from 'reactjs-bottom-navigation'
import 'reactjs-bottom-navigation'
import {HiHome} from "react-icons/hi";
import {FaShop} from "react-icons/fa6";
import {FaBagShopping} from "react-icons/fa6";
import {FaNewspaper} from "react-icons/fa6";
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blog";

function App() {
  const navigate = useNavigate();

  const bottomNavItems = [

    {
        title: 'وبلاگ',

        icon: <FaNewspaper size={25} color={'#1f2937'}/>,

        activeIcon: <FaNewspaper size={25} color={'white'}/>,

        onClick: () => navigate('/blog')
    },
    {
        title: 'سبد خرید',

        icon: <FaBagShopping size={25} color={'#1f2937'}/>,

        activeIcon: <FaBagShopping size={25} color={'white'}/>,

        onClick: () => navigate('checkout')
    
    },

    {
        title: 'فروشگاه',

        icon: <FaShop size={25} color={'#1f2937'}/>,

        activeIcon: <FaShop size={25} color={'white'}/>,
        
        onClick: () => navigate('shop')

    },

    {
        title: 'خانه',

        icon: <HiHome size={25} color={'#1f2937'}/>,

        activeIcon: <HiHome size={25} color={'white'}/>,

        onClick: () => navigate('/')

    },
]

  return (
    <div className="App">

          <div>
            <BottomNavigation
              noActiveBg='blue'
              activeTextColor="white"
              activeBgColor="#1f2937"
              items={bottomNavItems}
              defaultSelectedTab={0}
              onItemClick={(item) => console.log(item)}
            />
            <Routes>
                <Route exact path="/" element={<Layout/>} />
                <Route exact path="home" element={<Home/>} />
                <Route exact path="shop" element={<Shop/>} />
                <Route exact path="checkout" element={<Checkout/>} />
                <Route exact path="blog" element={<Blog/>} />
            </Routes>
          </div>


    </div>
  );
}

export default App;

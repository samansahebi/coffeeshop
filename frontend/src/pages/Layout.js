// import { HiMenu } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { FaShop } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
// import { FaUserLarge } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";
import slide from '../assets/mike-kenneally-TD4DBagg2wE-unsplash.jpg'
import slide2 from '../assets/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg'
import slide3 from '../assets/nathan-dumlao-pMW4jzELQCw-unsplash.jpg'
import { BottomNavigation } from 'reactjs-bottom-navigation'
import 'reactjs-bottom-navigation'
// import Home from './Home'
// import Shop from './Shop'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



export default function Layout() {
      
        const bottomNavItems = [
      
          {
            title: 'وبلاگ',
      
            icon: <FaNewspaper size={25} color={'black'}/>,
      
            activeIcon: <FaNewspaper size={25} color={'red'}/>,
      
            // onClick: () => alert('menu clicked')
          },
          {
            title: 'سبد خرید',

            icon: <FaBagShopping size={25} color={'black'}/>,

            activeIcon: <FaBagShopping size={25} color={'red'}/>
          },

          {
            title: 'فروشگاه',

            icon: <FaShop size={25} color={'black'}/>,

            activeIcon: <FaShop size={25} color={'red'}/>
          },

          {
            title: 'خانه',

            icon: <HiHome size={25} color={'black'}/>,

            activeIcon: <HiHome size={25} color={'red'}/>
          },
        ]

    return (
        <div className='fixed h-screen w-screen bg-gray-100'>
            <div className='flex justify-between w-screen px-4 py-4'>
                <input className='bg-gray-200 p-2 rounded w-full text-right shadow-md' placeholder='جستجوی محصولات'/>
            </div>
            <div className='flex w-full h-full px-4'>
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={1}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                    >
                         <SwiperSlide>
                              <div className='flex bg-gray-100 w-full h-48 rounded'>

                                <img alt={'slide'} src={slide} className='object-contain'/>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                             <div className='flex bg-gray-100 w-full h-48 rounded'>
                                <img alt={'slide'} src={slide2} className='object-contain'/>
                            </div>
                         </SwiperSlide>
                         <SwiperSlide>
                             <div className='flex bg-gray-100 w-full h-48 rounded'>
                                <img alt={'slide'} src={slide3} className='object-contain'/>
                            </div>
                         </SwiperSlide>

                    </Swiper>
            </div>
             <div className='flex flex-col h-full items-center'>

                <div className='text-white p-4'>
                    فروش انواع قهوه و سیروپ و دستگاه اسپرسو ساز
                </div>
                <div className="rounded p-2">
                <BottomNavigation
                    items={bottomNavItems}
                    defaultSelectedTab={0}
                    onItemClick={(item) => console.log(item)}
                />
                </div>
                 </div>
        </div>
    )
}

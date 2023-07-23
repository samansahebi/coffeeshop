import { HiMenu } from "react-icons/hi";

import { FaUser } from "react-icons/fa6";
import slide from '../assets/mike-kenneally-TD4DBagg2wE-unsplash.jpg'
import slide2 from '../assets/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg'
import slide3 from '../assets/nathan-dumlao-pMW4jzELQCw-unsplash.jpg'
// import Home from './Home'
// import Shop from './Shop'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';


export default function Layout() {

    return (
        <div className='fixed h-screen w-screen '>
            <div className="flex justify-between w-full p-4 shadow-md">
              <div>
                <HiMenu size={25}/>
              </div>
              <div className="flex ">
                <div className="font-bold pr-4">
  سامان صاحبی
                </div>
                <div>
                  <FaUser size={25}/>
                </div>

              </div>
            </div>
            <div className='flex justify-between w-screen p-2 pt-3'>
                <input className='bg-gray-200 p-2 rounded w-full text-right outline-none' placeholder='جستجوی محصولات'/>
            </div>
            <div className='flex w-full px-2'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    loop
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    // onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className={""}>
                        <div className='w-full h-40 overflow-hidden rounded-md'>

                            <img alt={'slide'} src={slide} className='object-cover'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-40 overflow-hidden rounded-md'>
                            <img alt={'slide'} src={slide2} className='object-contain'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-40 overflow-hidden rounded-md'>
                            <img alt={'slide'} src={slide3} className='object-contain'/>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='flex flex-col h-full items-center'>

                <div className='w-full text-center font-bold py-4'>
                    دسته بندی محصولات
                </div>
                <div className='grid w-full h-48 grid-cols-2 gap-2 px-2'>
                    <div className='flex w-full h-full bg-gray-200 rounded'>

                    </div>
                    <div className='flex w-full h-full bg-gray-200 rounded'>

                    </div>
                    <div className='flex w-full h-full bg-gray-200 rounded'>

                    </div>
                    <div className='flex w-full h-full bg-gray-200 rounded'>

                    </div>

                </div>

            </div>
                            <div className="rounded p-2">

                </div>
        </div>
    )
}

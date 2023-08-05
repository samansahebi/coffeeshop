import {HiMenu} from "react-icons/hi";

import {FaUser} from "react-icons/fa6";
import {FaMagnifyingGlass} from "react-icons/fa6";
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
        <div className='fixed h-screen w-screen bg-[#111416] p-2'>
            <div className='flex justify-between items-center  w-screen text-[#7B7B7B] bg-[#24262D] rounded mb-2'>
                <FaMagnifyingGlass/>
                <input className='bg-[#24262D] p-2 rounded w-full text-right outline-none text-[#7B7B7B]' placeholder='جستجوی محصولات'/>

            </div>
            <div className='flex w-full mb-2'>
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
                    <SwiperSlide>
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


                <div className='flex w-full h-28 gap-2 text-[#7B7B7B]'>
                    <div className='flex w-full h-full font-bold justify-center items-center bg-[#24262D] rounded'>
                        قهوه
                    </div>
                    <div className='flex w-full h-full font-bold justify-center items-center bg-[#24262D] rounded'>
                        سیروپ
                    </div>
                    <div className='flex w-full h-full font-bold justify-center items-center bg-[#24262D] rounded'>
                        قهوه ساز
                    </div>
                    <div className='flex w-full h-full font-bold justify-center items-center bg-[#24262D] rounded'>
                        مواد شوینده
                    </div>

                </div>
                <div className='w-full text-center text-2xl font-bold py-4 text-[#7B7B7B]'>
                    دسته بندی محصولات
                </div>
                <div className='grid grid-cols-2 gap-2 w-full'>
                    <div className='h-52 w-full bg-[#24262D] rounded-md overflow-hidden'>
                        <div className='text-center py-3 text-[#7B7B7B]'>
                            عنوان
                        </div>
                        <div className='w-full h-full bg-white rounded'>

                        </div>
                    </div>
                    <div className='h-52 w-full bg-[#24262D] rounded-md overflow-hidden'>
                        <div className='text-center py-3 text-[#7B7B7B]'>
                            عنوان
                        </div>
                        <div className='w-full h-full bg-white rounded'>

                        </div>
                    </div>
                    <div className='h-52 w-full bg-[#24262D] rounded-md overflow-hidden'>
                        <div className='text-center py-3 text-[#7B7B7B]'>
                            عنوان
                        </div>
                        <div className='w-full h-full bg-white rounded'>

                        </div>
                    </div>
                    <div className='h-52 w-full bg-[#24262D] rounded-md overflow-hidden'>
                        <div className='text-center py-3 text-[#7B7B7B]'>
                            عنوان
                        </div>
                        <div className='w-full h-full bg-white rounded'>

                        </div>
                    </div>

                </div>
            </div>
            <div className="rounded p-2">

            </div>
        </div>
    )
}

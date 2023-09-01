import {FaTruckFast} from "react-icons/fa6";
import {FaAward} from "react-icons/fa6";
import {FaCreditCard} from "react-icons/fa6";
import {FaMagnifyingGlass} from "react-icons/fa6";
import slide from '../assets/mike-kenneally-TD4DBagg2wE-unsplash.jpg'
import slide2 from '../assets/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg'
import slide3 from '../assets/nathan-dumlao-pMW4jzELQCw-unsplash.jpg'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import {useDispatch, useSelector} from "react-redux";
import {getCategoryListAction} from "../redux/shop/action";
import {useEffect} from "react"
import CategoryItem from "../components/CategoryItem";


export default function Layout() {
    const {categories} = useSelector(({shop}) => shop)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCategoryListAction())
        console.log(categories)
    }, [dispatch])
    return (
        <div className='fixed h-screen w-screen bg-[#111416] overflow-scroll mt-14 '>
            <div className='fixed top-0 flex w-full justify-center bg-[#111416] border-b border-[#7B7B7B] shadow-md z-50 p-2'>
                <div className='flex flex-row-reverse w-full justify-between items-center text-[#7B7B7B] bg-[#24262D] rounded'>
                    <div className="pl-2">
                        <FaMagnifyingGlass/>
                    </div>
                    <input className='bg-[#24262D] p-2 rounded w-full text-right outline-none text-[#7B7B7B]' placeholder='جستجوی محصولات'/>

                </div>
            </div>
            <div className='flex w-full p-2'>
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
                        <div className='w-full md:h-96 h-60 overflow-hidden rounded-md'>

                            <img alt={'slide'} src={slide} className='object-cover'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full md:h-96 h-60 overflow-hidden rounded-md'>
                            <img alt={'slide'} src={slide2} className='object-contain'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full md:h-96 h-60 overflow-hidden rounded-md'>
                            <img alt={'slide'} src={slide3} className='object-contain'/>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='flex flex-col items-center px-2 mb-32'>


                <div className='flex w-full h-28 gap-2 text-[#7B7B7B]'>
                    {/* <div className='flex flex-col w-full h-full text-center items-center bg-[#24262D] rounded'>
                        <div className={'py-4'}>
                            <FaHeadset size={30} color={'white'}/>
                        </div>
                        پشتیبانی عالی
                    </div> */}
                    <div className='flex flex-col w-full h-full  text-center items-center bg-[#24262D] rounded'>
                        <div className={'py-4'}>
                            <FaTruckFast size={30} color={'white'}/>
                        </div>
                        تحویل سریع
                    </div>
                    <div className='flex flex-col w-full h-full text-center  items-center bg-[#24262D] rounded'>
                        <div className={'py-4'}>
                            <FaAward size={30} color={'white'}/>
                        </div>
                        اصالت کالا
                    </div>
                    <div className='flex flex-col w-full h-full text-center  items-center bg-[#24262D] rounded'>
                        <div className={'py-4'}>
                            <FaCreditCard size={30} color={'white'}/>
                        </div>
                        تضمین قیمت
                    </div>

                </div>
                <div className='w-full text-center text-2xl font-bold py-4 text-white'>
                    دسته بندی محصولات
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2 w-full '>
                    {categories?.map((category, i)=>{return(<CategoryItem key={i} title={category.title} img={`${process.env.REACT_APP_HOST}${category.image}`}/>)})}
                </div>
            </div>
        </div>
    )
}

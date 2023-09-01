import slide from '../assets/mike-kenneally-TD4DBagg2wE-unsplash.jpg'
import slide2 from '../assets/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg'
import slide3 from '../assets/nathan-dumlao-pMW4jzELQCw-unsplash.jpg'
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductAction} from "../redux/shop/action";

export default function Product() {
    let { slug } = useParams();
    const {product} = useSelector(({shop}) => shop)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProductAction(slug))
    }, [dispatch])
    return (
        <div className='fixed h-screen w-screen bg-[#111416] overflow-scroll md:pt-14'>
            <div className="w-full rounded-b-lg bg-[#24262D] border-b border-[#7B7B7B]">
                <div className="flex items-end md:h-96 h-80 w-full bg-white rounded-b-lg shadow-md">
                    <img alt={'slide'} src={`${process.env.REACT_APP_HOST}${product?.image}`} className='object-cover rounded-b-lg'/>
                </div>
                <div className="flex justify-center text-center text-xl font-bold text-white py-3">
                    {product?.title}
                </div>
            </div>
            <div className='flex flex-col w-full overflow-scroll mb-14'>
                <div className='text-white p-6 text-right text-justify'>
                    {product?.description}
                </div>
                <div className='flex items-center justify-center h-12 m-2 p-2 bg-[#1CEA87] rounded text-center font-bold'>
                    افزودن به سبد
                </div>
            </div>
        </div>
    )
}
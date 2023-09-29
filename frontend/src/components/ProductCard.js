import coffee from '../assets/coffee.jpg'
import { useNavigate } from 'react-router-dom';
import Modal from "./Modal";
import {getProductAction} from "../redux/shop/action";
import {useDispatch} from "react-redux";


export default function ProductCard({id, title, img, price, slug}) {
    const dispatch = useDispatch()

    const navigate = useNavigate();

    return (
        <div className='px-2 pt-2'>
            <div className="flex flex-col h-36 bg-[#24262D] rounded-lg text-right p-1" >
                <div className="flex flex-row-reverse items-start bg-white rounded-lg mb-2 shadow-md" onClick={()=>{
                    dispatch(getProductAction(slug))
                    navigate(`/shop/${slug}`)
                }}>
                    <div className="w-full text-right px-2 font-bold">
                        {title}
                    </div>
                    <div className="w-36 h-24 bg-gray-100 rounded-r-lg">
                        <img alt='coffee' src={img} className='w-36 h-24 rounded-r overflow-auto object-cover'/>
                    </div>
                </div>
                <div className='flex flex-row-reverse justify-between'>
                <div className='flex pl-2 pt-1 text-red-500'>
                    <div>{price}</div>
                    <div className='pr-2'>تومان</div>

                </div>
                <Modal id={id} title={title} price={price}/>
                </div>
            </div>
        </div>
    )
}
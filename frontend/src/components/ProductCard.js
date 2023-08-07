import {FaPlus} from "react-icons/fa6";
import coffee from '../assets/coffee.jpg'
import { useNavigate } from 'react-router-dom';


export default function ProductCard({title}) {
      const navigate = useNavigate();

    return (
        <div>
            <div className="flex flex-col h-36 bg-[#24262D] rounded-lg text-right mb-2 p-1" onClick={() => navigate('/product')}>
                <div className="flex items-start bg-white rounded-lg mb-2 shadow-md">
                    <div className="w-full text-right px-2 font-bold">
                        {title}
                    </div>
                    <div className="w-36 h-24 bg-gray-100 rounded-r-lg">
                        <img alt='coffee' src={coffee} className='w-36 h-24 rounded-r overflow-auto object-cover'/>
                    </div>
                </div>
                <div className='flex flex-row-reverse justify-between'>
                <div className='pr-2 pt-1 text-[#7B7B7B]'>
                    قیمت
                </div>
                <div className="w-8 h-8 p-2 bg-[#1CEA87] rounded-lg">
                    <FaPlus/>
                </div>
                </div>
            </div>
        </div>
    )
}
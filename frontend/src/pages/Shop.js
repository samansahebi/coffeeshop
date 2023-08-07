import { FaFilter } from "react-icons/fa6";
import ProductCard from "../components/ProductCard";

export default function Shop() {
    return(
        <div  className='fixed h-screen w-screen bg-[#111416]'>
            <div className='fixed w-full top-0 flex justify-between p-4 bg-[#111416] border-b border-[#7B7B7B] shadow-md z-50'>
                <FaFilter size={25} color={'7B7B7B'}/>
                <div className={'font-bold text-[#7B7B7B]'}>
                    محصولات
                </div>
            </div>
        <div className="p-2 mt-14">
            <ProductCard title={'عنوان محصول'}/>
            <ProductCard title={'عنوان محصول'}/>
            <ProductCard title={'عنوان محصول'}/>
            <ProductCard title={'عنوان محصول'}/>
            <ProductCard title={'عنوان محصول'}/>
            <ProductCard title={'عنوان محصول'}/>
        </div>
        </div>
    )
}
import { FaFilter } from "react-icons/fa6";
import Product from "../components/Product";

export default function Shop() {
    return(
        <div>
            <div className='fixed w-full top-0 flex justify-between p-4 bg-white shadow-md z-50'>
                <FaFilter size={25}/>
                <div className={'font-bold'}>
                    مرتب سازی براساس
                </div>
            </div>
        <div className="p-2 mt-14">
            <Product title={'عنوان محصول'}/>
            <Product title={'عنوان محصول'}/>
            <Product title={'عنوان محصول'}/>
            <Product title={'عنوان محصول'}/>
            <Product title={'عنوان محصول'}/>
            <Product title={'عنوان محصول'}/>
        </div>
        </div>
    )
}
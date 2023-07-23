import { FaFilter } from "react-icons/fa6";
import Product from "../components/Product";

export default function Shop() {
    return(
        <div>
            <div className='flex justify-between p-4 shadow-md'>
                <FaFilter size={25}/>
                <div className={'font-bold'}>
                    مرتب سازی براساس
                </div>
            </div>
        <div className="p-2">
            <Product title={'عنوان محصول'}/>
            <Product title={'عنوان محصول'}/>
            <Product title={'عنوان محصول'}/>
            <Product title={'عنوان محصول'}/>
        </div>
        </div>
    )
}
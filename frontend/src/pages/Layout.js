import { HiMenu } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { FaShop } from "react-icons/fa6";
import slide from '../assets/uUz0dI-black-coffee-cup-hd-image.png'



export default function Layout() {
    return (
        <div className='fixed h-screen w-screen bg-gray-900'>
            {/*<div className='flex justify-between w-screen px-4 py-4'>*/}
            {/*    <div className=''>*/}
            {/*        <HiMenu size={25} color={'white'}/>*/}
            {/*    </div>*/}
            {/*    <div className='flex flex-row-reverse text-white'>*/}
            {/*        <div className={'pl-4'}>*/}
            {/*            <HiHome size={25} color={'white'}/>*/}
            {/*        </div>*/}
            {/*        <div className={'pl-4'}>*/}
            {/*            <FaShop size={25} color={'white'}/>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}
            <div className='flex flex-col h-full items-center'>
                <div className='text-white p-4'>
                    فروش انواع قهوه و سیروپ و دستگاه اسپرسو ساز
                </div>
                <img alt={'slide'} src={slide} className='py-6' style={{ width: "75%", height: "25%" }}/>

            </div>
            <div>
                <div className='text-white p-4'>
                    پرفروش ها
                </div>
            </div>
        </div>
    )
}

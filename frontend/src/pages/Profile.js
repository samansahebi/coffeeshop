import {FaPhoneFlip} from "react-icons/fa6";
import {FaFileLines} from "react-icons/fa6";
import {FaPenToSquare} from "react-icons/fa6";
import {FaArrowRightFromBracket} from "react-icons/fa6";
import ProfileItems from "../components/ProfileItems";


export default function Profile() {
    return(
        <div className='fixed h-screen w-screen bg-[#111416]'>
            <ProfileItems title={'تماس با ما'} icon={<FaPhoneFlip size={20} color={'7B7B7B'} link={'contact-us'}/>}/>
            <ProfileItems title={'سفارشات من'} icon={<FaFileLines size={20} color={'7B7B7B'} link={'myorders'}/>}/>
            <ProfileItems title={'ویرایش مشخصات'} icon={<FaPenToSquare size={20} color={'7B7B7B'} link={'info'}/>}/>
            <ProfileItems title={'خروج از حساب کاربری'} icon={<FaArrowRightFromBracket size={20} color={'7B7B7B'}/>}/>
        </div>
    )
}
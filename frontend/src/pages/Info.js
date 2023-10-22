import ModalAddress from "../components/ModalAddress"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getProfileAction} from "../redux/authentication/action";
import {FaTrashCan} from "react-icons/fa6";
import {FaPenToSquare} from "react-icons/fa6";

export default function Info() {

    const {first_name, last_name, phone_number, email, address} = useSelector(({authentication}) => authentication)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getProfileAction())
        console.log(phone_number)
    }, [])

    useEffect(()=>{
        console.log(phone_number)
    }, [phone_number])
    return (
        <div className='fixed h-screen w-screen bg-[#111416] overflow-scroll'>
            <div
                className='fixed w-full top-0 flex justify-between p-4 bg-[#111416] border-b border-[#7B7B7B] shadow-md z-50'>
                <div className={'font-bold text-[#7B7B7B] text-right w-full'}>
                    ویرایش مشخصات
                </div>
            </div>
            <div className="p-2 mt-14 grid md:grid-cols-3 gap-2">
                <input className='border border-[#24262D] bg-transparent p-2 rounded w-full text-right outline-none text-[#7B7B7B]'
                       value={first_name}
                       placeholder='نام'/>
                <input className='border border-[#24262D] bg-transparent p-2 rounded w-full text-right outline-none text-[#7B7B7B]'
                       value={last_name}
                       placeholder='نام خانوادگی'/>
                <input className='border border-[#24262D] bg-transparent p-2 rounded w-full text-right outline-none text-[#7B7B7B]'
                       value={phone_number}
                       placeholder='شماره موبایل'/>
                <input className='border border-[#24262D] bg-transparent p-2 rounded w-full text-right outline-none text-[#7B7B7B]'
                       value={email}
                       placeholder='ایمیل'/>
                <div className={'text-white text-center'}>آدرس ها</div>
                {address?.map((addr)=> {return(
                    <div className='flex flex-row-reverse w-full'>
                        <div className='border border-[#24262D] rounded-l p-3'><FaTrashCan size={20} color={'7B7B7B'}/></div>
                        <div className='border border-[#24262D] p-3'><FaPenToSquare size={20} color={'7B7B7B'}/></div>
                        <div className={'border border-[#24262D] w-full rounded-r p-2 text-[#7B7B7B] text-center'}>{addr.title}</div>
                    </div>)}
                    )}
                <ModalAddress/>
            </div>
            <div className='fixed bottom-16 md:bottom-2 flex items-end w-full'>
                <div className='h-10 w-full p-2 bg-[#1CEA87] rounded text-black text-center font-bold mx-2'>
                    ثبت تغییرات
                </div>
            </div>
        </div>
    )
}
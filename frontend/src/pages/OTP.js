import {FaMagnifyingGlass} from "react-icons/fa6";

export default function Login() {
    return (
        <div
            className='fixed flex flex-col justify-center items-center h-screen w-screen bg-[#111416] overflow-scroll p-4'>

            <div className="text-white p-2 text-2xl font-black">
                ورود به حساب کاربری
            </div>
            <div className='flex w-full justify-between items-center text-[#7B7B7B] bg-[#24262D] rounded p-1 m-4'>
                <input className='bg-[#24262D] p-2 rounded w-full text-right outline-none text-[#7B7B7B]'
                       placeholder='شماره همراه'/>

            </div>
            <button className="w-36 h-12 bg-[#1CEA87] rounded ">
                ورود
            </button>
        </div>
    )
}
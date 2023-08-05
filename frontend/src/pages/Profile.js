import {FaPhoneFlip} from "react-icons/fa6";

export default function Profile() {
    return(
        <div className='fixed h-screen w-screen bg-[#111416]'>
            <div className='flex flex-col'>
                <div className='flex flex-row-reverse gap-3 text-2xl items-center h-24 border-b border-[#7B7B7B]'>
                    <div className='mr-6'>
                        <FaPhoneFlip size={25} color={'7B7B7B'}/>
                    </div>
                    <div className='text-[#7B7B7B]'>
                        تماس با ما
                    </div>
                </div>
            </div>
        </div>
    )
}
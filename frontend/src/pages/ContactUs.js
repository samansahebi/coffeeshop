import {useSelector} from "react-redux";

export default function ContactUs() {
        const {access} = useSelector(({authentication}) => authentication)

    return(
        <div className='fixed h-screen w-screen bg-[#111416] overflow-scroll'>
            <div className='fixed w-full top-0 flex justify-between p-4 bg-[#111416] border-b border-[#7B7B7B] shadow-md z-50'>
                <div className={'font-bold text-[#7B7B7B] text-right w-full'}>
                   تماس با ما 
                </div>
            </div>
        </div>
    )
}
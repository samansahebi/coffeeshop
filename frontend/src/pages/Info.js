import ModalAddress from "../components/ModalAddress"

export default function Info() {
    return (
        <div className='fixed h-screen w-screen bg-[#111416] overflow-scroll'>
            <div
                className='fixed w-full top-0 flex justify-between p-4 bg-[#111416] border-b border-[#7B7B7B] shadow-md z-50'>
                <div className={'font-bold text-[#7B7B7B] text-right w-full'}>
                    ویرایش مشخصات
                </div>
            </div>
            <div className="p-2 mt-14">
                <input className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]'
                       placeholder='نام'/>
                <input className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]'
                       placeholder='نام خانوادگی'/>
                <input className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]'
                       placeholder='شماره موبایل'/>
                <input className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]'
                       placeholder='ایمیل'/>
                <ModalAddress/>
            </div>
            <div className='h-10 p-2 bg-[#1CEA87] rounded text-black text-center font-bold mx-2'>
                ثبت تغییرات
            </div>
        </div>
    )
}
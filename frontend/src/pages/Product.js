import slide from '../assets/mike-kenneally-TD4DBagg2wE-unsplash.jpg'
import slide2 from '../assets/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg'
import slide3 from '../assets/nathan-dumlao-pMW4jzELQCw-unsplash.jpg'

export default function Product() {
    return (
        <div className={'fixed h-screen w-screen bg-[#111416] overflow-scroll'}>
            <div className="h-80 w-full rounded-b-lg bg-[#24262D] border-b border-[#7B7B7B]">
                <div className="flex items-end h-64 w-full bg-white rounded-b-lg shadow-md">
                    <img alt={'slide'} src={slide3} className=' rounded-b-lg'/>
                </div>
                <div className="flex  justify-center text-center text-2xl font-bold text-white py-4">
                    عنوان محصول
                </div>
            </div>
            <div className='flex flex-col w-full h-full overflow-scroll'>
                <div className='text-white p-6 text-right text-justify rtl'>
                    لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                </div>
                <div className='flex items-center justify-center h-12 m-2 p-2 bg-[#1CEA87] rounded text-center font-bold'>
                    افزودن به سبد
                </div>
            </div>
        </div>
    )
}
import slide from '../assets/mike-kenneally-TD4DBagg2wE-unsplash.jpg'
import slide2 from '../assets/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg'
import slide3 from '../assets/nathan-dumlao-pMW4jzELQCw-unsplash.jpg'

export default function Product() {
    return (
        <div className={'fixed h-screen w-screen bg-[#111416]'}>
            <div className="h-1/2 w-full rounded-b-lg bg-[#24262D]">
                <div className="flex items-end h-5/6 w-full bg-white rounded-b-lg">
                    <img alt={'slide'} src={slide} className=' rounded-b-lg'/>
                </div>
                <div className="flex  justify-center text-center text-2xl font-bold text-white py-2">
                    عنوان محصول
                </div>
            </div>
            <div className='flex flex-col w-full h-full'>
                <div>
                    content
                </div>
                <div className='h-14 m-2 p-2 bg-[#1CEA87] rounded text-center text-2xl'>
                    افزودن به سبد
                </div>
            </div>
        </div>
    )
}
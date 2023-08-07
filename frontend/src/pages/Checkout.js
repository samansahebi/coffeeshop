import ProductCard from "../components/ProductCard";
export default function Checkout() {
    return(
        <div  className='fixed h-screen w-screen bg-[#111416]'>
            <ProductCard title={'عنوان'}/>




            <div className='fixed flex justify-between bottom-0 w-full h-28 border-t border-[#7B7B7B] rounded-t-lg bg-[#33363F]'>
                <div className='flex w-28 h-10 bg-[#1CEA87] rounded-md m-2 items-center justify-center font-black'>
                    ادامه خرید
                </div>
                <div className='flex p-4 text-white'>
                    <div className='px-2'>
                        تومان
                    </div>
                    <div>
                        20000
                    </div>

                </div>
            </div>
        </div>
    )
}
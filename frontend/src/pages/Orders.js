import CheckoutItem from '../components/CheckoutItem'

export default function Orders() {
    return (
        <div className='fixed h-screen w-screen bg-[#111416] overflow-scroll'>
            <div
                className='fixed w-full top-0 flex justify-between p-4 bg-[#111416] border-b border-[#7B7B7B] shadow-md z-50'>
                <div className={'font-bold text-[#7B7B7B] text-right w-full'}>
                    سفارشات من
                </div>
            </div>
            <div className='mt-14 mb-16'>
                <CheckoutItem/>
                <CheckoutItem/>
                <CheckoutItem/>
                <CheckoutItem/>
                <CheckoutItem/>
                <CheckoutItem/>
                <CheckoutItem/>
            </div>
        </div>
    )
}
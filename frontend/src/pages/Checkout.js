import CheckoutItem from "../components/CheckoutItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCheckoutAction} from "../redux/orders/action";

export default function Checkout() {
    const [totalPrice, setTotalPrice] = useState(0)
    const {checkout} = useSelector(({orders}) => orders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCheckoutAction())
        console.log(checkout)
    }, [dispatch])
    return (
        <div className='fixed h-screen w-screen bg-[#111416]'>
            <div className='md:mt-14 md:grid md:grid-cols-3'>
                {checkout?.map((order)=>{return(<CheckoutItem title={'عنوان'} price={order.items[0].price} slug={order.items[0].slug}/>)})}
            </div>
            <div
                className='fixed flex justify-between bottom-0 w-full md:h-14 h-28 border-t border-[#7B7B7B] rounded-t-lg bg-[#33363F]'>
                <div className='flex w-28 h-10 bg-[#1CEA87] rounded-md m-2 items-center justify-center font-black'>
                    ادامه خرید
                </div>
                <div className='flex p-4 text-white'>

                    <div>
                        {checkout?.reduce((a, arr)=>  a + parseInt(arr.items[0].price), 0)}
                    </div>
                    <div className='px-2'>
                        تومان
                    </div>
                </div>
            </div>
        </div>
    )
}
import CheckoutItem from "../components/CheckoutItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getOrderListAction} from "../redux/orders/action";

export default function Checkout() {
    const {orders} = useSelector(({orders}) => orders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrderListAction())
        console.log(orders)
    }, [dispatch])
    return (
        <div className='fixed h-screen w-screen bg-[#111416]'>
            <div className='md:mt-14 md:grid md:grid-cols-3'>
                {orders?.map((order)=>{return(<CheckoutItem title={'عنوان'} price={order.items[0].price} slug={order.items[0].slug}/>)})}
            </div>
            <div
                className='fixed flex justify-between bottom-0 w-full md:h-14 h-28 border-t border-[#7B7B7B] rounded-t-lg bg-[#33363F]'>
                <div className='flex w-28 h-10 bg-[#1CEA87] rounded-md m-2 items-center justify-center font-black'>
                    ادامه خرید
                </div>
                <div className='flex p-4 text-white'>

                    <div>
                        20000
                    </div>
                    <div className='px-2'>
                        تومان
                    </div>
                </div>
            </div>
        </div>
    )
}
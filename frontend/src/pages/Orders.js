import CheckoutItem from '../components/CheckoutItem'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getOrderListAction} from "../redux/orders/action";

export default function Orders() {
    const {orders} = useSelector(({orders}) => orders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrderListAction())
        console.log(orders)
    }, [dispatch])
    return (
        <div className='fixed h-screen w-screen bg-[#111416] overflow-scroll'>
            <div
                className='fixed w-full top-0 flex justify-between p-4 bg-[#111416] border-b border-[#7B7B7B] shadow-md z-50'>
                <div className={'font-bold text-[#7B7B7B] text-right w-full'}>
                    سفارشات من
                </div>
            </div>
            <div className='mt-14 mb-16'>
            {orders?.map((order)=>{return(<CheckoutItem title={'عنوان'} price={order.items[0].price} slug={order.items[0].slug}/>)})}
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
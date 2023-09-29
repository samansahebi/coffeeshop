import CheckoutItem from "../components/CheckoutItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCheckoutAction} from "../redux/orders/action";
import {useNavigate} from "react-router-dom";

export default function Checkout() {
    const [totalPrice, setTotalPrice] = useState(0)
    const {access} = useSelector(({authentication}) => authentication)
    const {items} = useSelector(({orders}) => orders)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = () => {
        access ? navigate('/select-address') : navigate('/login')
    }
    useEffect(() => {
        dispatch(getCheckoutAction())
        console.log(items)
    }, [dispatch])
    return (
        <div className='fixed h-screen w-screen bg-[#111416] overflow-scroll mb-32'>
            <div className='md:mt-14 md:grid md:grid-cols-3 mb-32'>
                {items?.map((order)=>{return(<CheckoutItem title={order.title} price={order.price} slug={''} count={order.count} unit={order.unit}/>)})}
            </div>
            <div
                className='fixed flex justify-between bottom-0 w-full md:h-14 h-28 border-t border-[#7B7B7B] rounded-t-lg bg-[#33363F]'>
                <div
                    onClick={handleSubmit}
                    className='flex w-28 h-10 bg-[#1CEA87] rounded-md m-2 items-center justify-center font-black'>
                    ادامه خرید
                </div>
                <div className='flex p-4 text-white'>

                    <div>
                        {items?.reduce((a, arr)=>  a + parseInt(arr.price), 0)}
                    </div>
                    <div className='px-2'>
                        تومان
                    </div>
                </div>
            </div>
        </div>
    )
}
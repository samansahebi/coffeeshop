import {useEffect, useState} from "react"
import {sendOtpAction} from "../redux/authentication/action"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"


export default function Login() {

    const [phoneNumber, setPhoneNumber] = useState('')
    const {detail} = useSelector(({authentication}) => authentication)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSendOtp = () => {
        dispatch(sendOtpAction({phone_number: phoneNumber}))
    }
    useEffect(()=>{
        detail && navigate('/otp')
    }, [detail, navigate])
    return (
        <div
            className='fixed flex flex-col justify-center items-center h-screen w-screen bg-[#111416] overflow-scroll p-4'>

            <div className="text-white p-2 text-2xl font-black">
                ورود به حساب کاربری
            </div>
            <div className='flex w-full justify-between items-center text-[#7B7B7B] bg-[#24262D] rounded m-4'>
                <input className='bg-[#24262D] p-2 rounded w-full text-center outline-none text-[#7B7B7B]'
                       value={phoneNumber}
                       onChange={event => setPhoneNumber(event.target.value)}
                       placeholder='شماره همراه'/>

            </div>
            <button className="w-36 h-10 bg-[#1CEA87] rounded " onClick={handleSendOtp}>
                ارسال کد
            </button>
        </div>
    )
}
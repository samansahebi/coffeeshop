import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../redux/authentication/action";
import {useNavigate} from "react-router-dom";

export default function OTP() {
    const [otpCode, setOtpCode] = useState('')
    const {access} = useSelector(({authentication}) => authentication)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSendOtp = () => {
        dispatch(loginAction({phone_number: '09308848565', otp: otpCode}))
    }

    useEffect(()=>{
        access && navigate('/orders')
    }, [access, navigate])

    return (
        <div
            className='fixed flex flex-col justify-center items-center h-screen w-screen bg-[#111416] overflow-scroll p-4'>

            <div className="text-white p-2 text-2xl font-black">
                کد تایید را وارد کنید
            </div>
            <div className='flex w-full justify-between items-center text-[#7B7B7B] bg-[#24262D] rounded p-1 m-4'>
                <input className='bg-[#24262D] p-2 rounded w-full text-center outline-none text-[#7B7B7B]'
                       value={otpCode}
                       onChange={event => setOtpCode(event.target.value)}
                       placeholder='کد تایید'/>

            </div>
            <button className="w-36 h-12 bg-[#1CEA87] rounded " onClick={handleSendOtp}>
                ورود
            </button>
        </div>
    )
}
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getProfileAction} from "../redux/authentication/action";
import ModalAddress from "../components/ModalAddress";

export default function SelectAddress() {
        const {address} = useSelector(({authentication}) => authentication)
        const [selected, setSelected] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getProfileAction())
        console.log(address)
    }, [])
    return(
        <div className='fixed h-screen w-screen bg-[#111416] overflow-scroll'>
            <div className='fixed w-full top-0 flex justify-between p-4 bg-[#111416] border-b border-[#7B7B7B] shadow-md z-50'>
                <div className={'font-bold text-[#7B7B7B] text-right w-full'}>
                   انتخاب آدرس
                </div>
            </div>
            <div className={'mt-16 px-2'}>
                {address?.map((addr)=> {
                    return (<div onClick={()=>setSelected(addr.id)} className={`border ${selected === addr.id ? 'border-[#1CEA87] text-[#1CEA87]' : 'border-[#24262D] text-[#7B7B7B]'} h-10  p-2 mb-2 rounded text-center`}>
                        {addr.title}
                    </div>)
                })}
            <ModalAddress/>
            </div>
            <div
                className='fixed flex justify-between bottom-0 w-full md:h-14 h-28 border-t border-[#7B7B7B] rounded-t-lg bg-[#33363F]'>
                <div
                    // onClick={handleSubmit}
                    className='flex w-28 h-10 bg-[#1CEA87] rounded-md m-2 items-center justify-center font-black'>
                    ادامه خرید
                </div>
                {/*<div className='flex p-4 text-white'>*/}

                {/*    <div>*/}
                {/*        /!*{items?.reduce((a, arr)=>  a + parseInt(arr.price), 0)}*!/*/}
                {/*    </div>*/}
                {/*    <div className='px-2'>*/}
                {/*        تومان*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
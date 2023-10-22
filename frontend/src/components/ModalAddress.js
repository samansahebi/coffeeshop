import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductListAction} from "../redux/shop/action";
import {createAddressAction, getCitiesAction, getProvincesAction} from "../redux/authentication/action";

export default function ModalAddress() {
    const [title, setTitle] = React.useState('');
    const [selectedProvince, setSelectedProvince] = React.useState(8);
    const [selectedCity, setSelectedCity] = React.useState();
    const [address, setAddress] = React.useState();
    const [postalCode, setPostalCode] = React.useState();
    const [showModal, setShowModal] = React.useState(false);
    const {cities, provinces} = useSelector(({authentication}) => authentication)
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(createAddressAction({
            title: title,
            province: selectedProvince,
            city: selectedCity,
            address: address,
            postal_code: postalCode,
        }))
        setShowModal(false)
    }

    useEffect(() => {
        dispatch(getProvincesAction())
        dispatch(getCitiesAction())
    }, [dispatch])

    return (
        <>
            <div className='border border-[#24262D] h-10 p-1 rounded text-3xl text-[#7B7B7B] text-center' onClick={() => setShowModal(true)}>
                +
            </div>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto p-4 max-w-3xl">
                            {/*content*/}
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#111416] outline-none focus:outline-none">
                                {/*header*/}
                                <div
                                    className="flex items-start justify-between px-4 py-3 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-xl font-semibold text-[#7B7B7B] text-right">
                                        افزودن آدرس جدید
                                    </h3>
                                    <button
                                        className=" mr-auto bg-transparent border-0 float-left text-[#7B7B7B] text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                    <span
                        className="bg-transparent text-[#7B7B7B] h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-2 flex-auto">
                                    <input type="textarea"
                                           className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]'
                                           onChange={(e)=>setTitle(e.target.value)}
                                           placeholder='عنوان آدرس'/>
                                    <select defaultValue={'تهران'}
                                            onChange={(e)=> {
                                                setSelectedProvince(provinces?.find(prov => prov.title === e.target.value).id)
                                                setSelectedCity(cities.filter(city => city.province === selectedProvince).sort((a, b)=> {
                                            return a.id - b.id
                                        })[0].id)
                                                // setSelectedCities(cities?.filter(city => city.province === selectedProvince))
                                                // console.log(selectedProvince)
                                                // console.log(selectedCities)
                                            }}
                                        className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]'>
                                        {provinces && provinces.sort((a, b)=> {
                                            return a.id - b.id
                                        }).map((province, i)=><option name="province" key={i}>{province.title}</option>) }
                                    </select>
                                    <select
                                        onChange={(e)=>setSelectedCity(cities.find(x=> x.title === e.target.value).id)}
                                        className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]'>
                                        {cities && cities.filter(city => city.province === selectedProvince).sort((a, b)=> {
                                            return a.id - b.id
                                        }).map((city, i)=><option name="city" key={i}>{city.title}</option>) }
                                    </select>
                                    <input type="textarea"
                                           className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]'
                                           onChange={(e)=>setAddress(e.target.value)}
                                           placeholder='آدرس'/>
                                    <input
                                        className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]'
                                        onChange={(e)=>setPostalCode(e.target.value)}
                                        placeholder='کدپستی'/>
                                </div>
                                {/*footer*/}
                                <div
                                    className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        انصراف
                                    </button>
                                    <button
                                        className="bg-[#1CEA87] text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleSubmit}
                                    >
                                        افزودن آدرس
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>*/}
                </>
            ) : null}
        </>
    );
}
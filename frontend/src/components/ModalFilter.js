import React from "react";
import { FaFilter } from "react-icons/fa6";
import {useSelector} from "react-redux";

export default function ModalAddress() {
  const [showModal, setShowModal] = React.useState(false);
  const {categories} = useSelector(({shop}) => shop)

  return (
    <>
            <div onClick={() => setShowModal(true)}>
                    <FaFilter size={25} color={'7B7B7B'}/>
            </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto p-4 max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#111416] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-4 py-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold text-[#7B7B7B] text-right">
                    فیلتر محصولات
                  </h3>
                  <button
                    className=" mr-auto bg-transparent border-0 float-left text-[#7B7B7B] text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-[#7B7B7B] h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-2 flex-auto">
                <select className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]'>
                    {categories && categories.map((cat, i)=><option name="productUnit" key={i}>{cat.title}</option>) }
                </select>
                <div className="text-white text-right p-2">
                  محدوده قیمت
                </div>
                <div className="flex gap-2">

                <input type="textarea" className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]' placeholder='تا'/>
                <input className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]' placeholder='از'/>
                </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
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
                    onClick={() => setShowModal(false)}
                  >
                    اعمال فیلتر
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
import React from "react";

export default function ModalAddress() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
            <div className='h-10 p-2 bg-[#24262D] rounded text-[#7B7B7B] text-right'  onClick={() => setShowModal(true)}>
                    افزودن آدرس
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
                    افزودن آدرس جدید
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
                <input type="textarea" className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]' placeholder='عنوان آدرس'/>
                <select className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]'>
                <option name="province">استان</option>
                </select>
                <select className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]'>
                <option name="province">شهر</option>
                </select>
                <input type="textarea" className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]' placeholder='آدرس'/>
                <input className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]' placeholder='کدپستی'/>
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
                    افزودن آدرس
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
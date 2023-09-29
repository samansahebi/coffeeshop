import React, {useEffect} from "react";
import {FaPlus} from "react-icons/fa6";
import {useDispatch, useSelector} from "react-redux";
import {getProductUnitListAction} from "../redux/shop/action";
import {addItemAction, addToCheckoutAction, getPackageTypesAction} from "../redux/orders/action";

export default function Modal({id, title, price}) {
  const [showModal, setShowModal] = React.useState(false);
  const [count, setCount] = React.useState();
      const {productUnits} = useSelector(({shop}) => shop)
      const {packages} = useSelector(({orders}) => orders)
      const {checkout} = useSelector(({orders}) => orders)
    const dispatch = useDispatch()
    // const navigate = useNavigate()

    const handleSubmit = () => {
          count && dispatch(addItemAction({title, count, product: id, unit: 1, package_type: 1, price: price * count}))
    }

    useEffect(()=>{
        dispatch(getProductUnitListAction())
        dispatch(getPackageTypesAction())
        console.log(productUnits)
    }, [dispatch])

    useEffect(()=>{
        setShowModal(false)
    }, [checkout])
  return (
    <>
                    <button className="w-8 h-8 p-2 rounded-lg" onClick={() => setShowModal(true)}>
                    <FaPlus color={'7B7B7B'}/>
                </button>

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
                    جزئیات سفارش
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
                    {productUnits && productUnits.map((productUnit, i)=><option name="productUnit" key={i}>{productUnit.title}</option>) }
                </select>
                <select className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]'>
                    {packages && packages.map((pack, i)=><option name="productUnit" key={i}>{pack.title}</option>) }
                </select>

                <input type="textarea" value={count} onChange={(e)=>setCount(e.target.value)} className='bg-[#24262D] p-2 mb-2 rounded w-full text-right outline-none text-[#7B7B7B]' placeholder='تعداد'/>

                    <div>
                        <div className='text-red-500 text-center'> مجموع قیمت: {parseInt(price ? price : 0) * parseInt(count ? count : 0)} </div>
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
                    onClick={handleSubmit}
                  >
                    افزودن به سبد
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
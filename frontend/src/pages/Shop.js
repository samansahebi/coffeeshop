import ProductCard from "../components/ProductCard";
import ModalFilter from "../components/ModalFilter";
import {useDispatch, useSelector} from "react-redux";
// import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getProductListAction} from "../redux/shop/action";

export default function Shop() {
    const shop = useSelector(({shop}) => shop)
    const dispatch = useDispatch()
    // const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getProductListAction())
        console.log(shop)
    }, [dispatch])
    return (
        <div className='fixed h-screen w-screen bg-[#111416] overflow-scroll'>
            <div
                className='fixed w-full top-0 flex flex-row-reverse justify-between p-4 bg-[#111416] border-b border-[#7B7B7B] shadow-md z-50'>
                <ModalFilter/>
                <div className={'font-bold text-[#7B7B7B]'}>
                    فروشگاه
                </div>
            </div>
            <div className="mt-14 mb-16 md:grid md:grid-cols-3">
                {shop.data?.map((product, i)=>(
                        <ProductCard
                            key={i}
                            id={product.id}
                            title={product.title}
                            img={`${process.env.REACT_APP_HOST}${product.image}`}
                            price={product.unit[0].price_per_unit}
                            slug={product.slug}
                        />
                    )
                )}
            </div>
        </div>
    )
}
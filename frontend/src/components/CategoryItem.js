import {useNavigate} from "react-router-dom";

export default function CategoryItem({title, url, img}) {
    const navigate = useNavigate()

    return (
        <div className='h-52 w-full bg-[#24262D] rounded-md overflow-hidden' onClick={()=>{navigate(url)}}>
            <div className='text-center py-2 text-white'>
                {title}
            </div>
            <div className='w-full h-full bg-white rounded p-4'>
                <img alt='coffee' src={img} className='overflow-auto object-cover'/>
            </div>
        </div>
    )
}
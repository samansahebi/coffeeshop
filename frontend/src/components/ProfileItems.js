import { useNavigate } from 'react-router-dom';

export default function ProfileItems({title, icon, url}) {
    const navigate = useNavigate();

    return(
            <div className='flex flex-col' onClick={()=>{navigate(`${url}`)}}>
                <div className='flex gap-3 font-bold items-center h-20 border-b border-[#7B7B7B]'>
                    <div className='mr-6'>
                        {icon}
                    </div>
                    <div className='text-[#7B7B7B]'>
                        {title}
                    </div>
                </div>
            </div>
    )
}
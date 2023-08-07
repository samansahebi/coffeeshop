
export default function ProfileItems({title, icon}) {
    return(
            <div className='flex flex-col'>
                <div className='flex flex-row-reverse gap-3 font-bold items-center h-20 border-b border-[#7B7B7B]'>
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
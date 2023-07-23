import { FaPlus } from "react-icons/fa6";

export default function Product({title}) {
    return(
        <div>
            <div className="h-36 bg-gray-400 rounded-lg text-right mb-2 p-1">
            <div className="flex items-start bg-white rounded-lg mb-2 shadow-md">
                <div className="w-full text-right px-2 font-bold">
                    {title}
                </div>
                <div className="w-36 h-24 bg-gray-100 rounded-r-lg">
                </div>
            </div>
            <div className="w-8 h-8 p-2 bg-red-400 rounded-lg">
                <FaPlus/>
            </div>
            </div>
        </div>
    )
}
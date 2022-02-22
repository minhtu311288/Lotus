import Link from 'next/link'
import { useRouter } from "next/router";

export default function navigation() {
    
    return (
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-8 w-auto" src="images/logo-lotus.png" alt="Workflow" />
                <img className="hidden lg:block h-8 w-auto" src="images/logo-lotus.png" alt="Workflow" />
            </div>
            <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                    {menuArray.map((menu, index) => (
                        <Link key={index} href={menu.href}><a className={`${menu.href === router.pathname ? "bg-gray-800 text-white" : "text-gray-300"} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>{menu.name}</a></Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
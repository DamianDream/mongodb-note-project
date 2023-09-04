'use client'

import Link from "next/link"
import { HiHome } from "react-icons/hi"
import MyButton from '@/utils/myButton'
import { usePathname } from 'next/navigation'
function Navbar() {
    const pathname = usePathname()
    const addBtn = (pathname === "/") ? <MyButton name={"Add Todo"} type={"button"}/> : null

    return (
        <nav className="flex justify-between items-center">
            <Link className="text-white font-bold p-2 border rounded-xl hover:bg-white hover:text-green-600" href={"/"}>
                <HiHome size={24}/>
            </Link>
            <Link href={"/addTodo"}>
                {addBtn}
            </Link>
        </nav>
    )
}

export default Navbar
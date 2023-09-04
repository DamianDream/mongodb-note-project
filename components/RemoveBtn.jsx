"use client"

import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation'

function RemoveBtn({ id }) {
    const router = useRouter()

    const removeTodo = async () => {
        const res = await fetch(`/api/todos?id=${id}`, {
            method: "DELETE",
        })

        if(res.ok) router.refresh()
    }

    return (
        <button
            onClick={removeTodo}
            className='text-white font-bold bg-red-300 p-2 rounded hover:bg-red-500'>
            <HiOutlineTrash className="hover:animate-pulse" size={20}/>
        </button>
    )
}

export default RemoveBtn
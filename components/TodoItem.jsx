
import Link from 'next/link'
import RemoveBtn from '@/components/RemoveBtn'
import { HiPencilAlt } from 'react-icons/hi'

function TodoItem(params) {
    const { _id, title, description} = params.data

    return (
        <div
            className="bg-white rounded-[.5rem] p-4 my-3 flex justify-between gap-5 items-center">
            <div>
                <div className="flex items-start gap-2">
                    <h2 className="font-bold text-2xl text-black">{title}</h2>
                </div>
                <div>{description}</div>
            </div>

            <div className="flex gap-2">
                <RemoveBtn id={_id}/>
                <Link
                    className='text-white font-bold bg-green-300 p-2 rounded hover:bg-green-500'
                    href={`/editTodo/${_id}`}>
                    <HiPencilAlt size={20} className="hover:animate-pulse"/>
                </Link>
            </div>
        </div>
    )
}

export default TodoItem
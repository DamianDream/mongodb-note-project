"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import MyButton from '@/utils/myButton'

function EditTodoForm({ id, title, description }) {

    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ newTitle, newDescription })
            })
            if(!res.ok) {
                throw new Error("Failed to update the todo")
            } else {
                router.refresh()
                router.push("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 bg-white bg-opacity-10 p-2 rounded-[.5rem]"
        >
            <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                className="px-8 py-2 rounded-[.5rem]"
                type='text'
                placeholder="Tipic Title"
            />
            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                className="px-8 py-2 rounded-[.5rem]"
                type='text'
                placeholder="Tipic Description"
            />
            <div className='self-end'>
                <MyButton name={"Update"} type={"submit"} />
            </div>
        </form>
    )
 }

 export default  EditTodoForm
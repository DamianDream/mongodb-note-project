"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import MyButton from '@/utils/myButton'

function AddTopic() {

    const [title, setTitle] = useState('')
    const [description , setDescription] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("handleSubmit")

        if(!title || !description) {
            alert('Title and Description are required!')
            return
        }

        try {
            const res = await fetch("/api/todos", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, description })
            })
            if(res.ok) {
                router.refresh()
                router.push("/")
            } else {
                throw new Error("Failed to create a todo")
            }
        } catch(error) {
            console.log(error)
        }

    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 bg-white bg-opacity-10 p-2 rounded-[.5rem]"
            action=''
        >
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="px-8 py-2 rounded-[.5rem]"
                type='text'
                placeholder="Tipic Title"
            />
            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="px-8 py-2 rounded-[.5rem]"
                type='text'
                placeholder="Tipic Description"
            />
            <div className='self-end'>
                <MyButton name={"Add Todo"} type={"submit"} />
            </div>
        </form>
    )
}

export default AddTopic
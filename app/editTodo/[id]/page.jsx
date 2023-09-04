
import EditTodoForm from "@/components/EditTodoForm"

const getTodoById = async (id) => {
    const apiUrl = process.env.API_URL

    try {
        const res = await fetch(`${apiUrl}/api/todos/${id}`, {
            cache: 'no-store'
        })

        if(!res.ok) {
            throw new Error("Failed to fetch todo id")
        }
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

async function EditTodo({ params }) {
    const { id } = params;

    const { todo } = await getTodoById(id)
    const { title, description } = todo

    return <EditTodoForm
        id={id}
        title={title}
        description={description}
    />
}

export default EditTodo
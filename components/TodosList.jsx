import TodoItem from '@/components/TodoItem'
const getTodos = async() => {
    const apiUrl = process.env.API_URL
    try {
         const res = await fetch(`${apiUrl}/api/todos`, {
            cache: 'no-store',
            revalidate: 5,
        })
        if(!res.ok) {
            throw new Error(`Failed to fetch todos`)
        }
        return res.json()
    } catch(error) {
        console.log(error)
    }
}

async function TodosList() {
    const { todos }  = await getTodos()

    return (
        <>
            {todos.map(todo => (
                <TodoItem
                    key={todo._id}
                    data={todo}
                />
            ))}
        </>
    )
}


export default TodosList
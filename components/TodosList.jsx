import TodoItem from '@/components/TodoItem'
const getTodos = async() => {
    const url = 'http://localhost:3000/api/todos'
    try {
         const res = await fetch(url, {
            cache: 'no-store',
            revalidate: 5,
        })
        if(!res.ok) {
            throw new Error(`Failed to fetch ${url}`)
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
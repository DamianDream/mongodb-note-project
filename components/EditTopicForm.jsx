 function EditTopicForm() {
    return (
        <form
            className="flex flex-col gap-3"
            action=''
        >
            <input
                className="border border-slate-500 px-8 py-2"
                type='text'
                placeholder="Tipic Title"
            />
            <input
                className="border border-slate-500 px-8 py-2"
                type='text'
                placeholder="Tipic Description"
            />
            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update Topic</button>
        </form>
    )
 }

 export default  EditTopicForm
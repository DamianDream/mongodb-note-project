// "use client"
function MyButton(params) {
    const {name, type} = params
    return (
        <button
            type={type}
            className="text-white border rounded-[.5rem] py-2 inline-block w-fit px-2.5 hover:bg-white hover:text-green-600">
            {name}
        </button>
    )
}

export default MyButton
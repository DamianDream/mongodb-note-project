"use client"
function MyButton(params) {
    const {name, type} = params
    return (
        <button type={type} className="myButton">{name}</button>
    )
}
export default MyButton
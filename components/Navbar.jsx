import Link from "next/link"
function Navbar() {
    return (
        <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/addTopic"}>Add Topic</Link>
        </nav>
    )
}

export default Navbar
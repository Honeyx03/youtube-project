import { Link } from "react-router-dom";



export default function NavBar()  {
    return (
        <header>
            <div className="logo">
                <h1>
                    <Link href = "/">YouTube</Link>
                </h1>
            </div>
            <aside>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </aside>
        </header>
    )
}
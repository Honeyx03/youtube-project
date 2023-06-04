import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar()  {
    return (
        <header>
            <div className="logo">
                <h1>
                    <Link to="/">YouTube</Link>

                </h1>
            </div>
            <aside className="tabs">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </aside>
        </header>
    )
}
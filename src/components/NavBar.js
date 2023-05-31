import Home from "./Home";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <header>
            <div className="logo">
                <h1>
                    <a href = "/">
                        YouTube
                    </a>
                </h1>
            </div>
            <aside>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </aside>
        </header>
    )
}
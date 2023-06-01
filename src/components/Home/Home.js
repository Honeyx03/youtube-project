import SearchBar from "./components/SearchBar.js";
import { link } from "react-router-dom";

export const VideoNav = () => {
    //SearchBar fxn
    return (
        <nav className="video-nav">
            <ul>
                <li>
                    <Link to="/"></Link>
                </li>
            </ul>
        </nav>
    );
};
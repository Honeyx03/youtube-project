import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";

export default function VideoNav()  {
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
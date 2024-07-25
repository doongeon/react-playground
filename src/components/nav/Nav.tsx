import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    return (
        <>
            <ul className="nav">
                <Link to={"/"} className="nav__btn">
                    <li>홈</li>
                </Link>
                <Link to={"/games"} className="nav__btn">
                    <li>게임</li>
                </Link>
            </ul>
        </>
    );
}

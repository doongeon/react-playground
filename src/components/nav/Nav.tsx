import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <ul className="nav">
        <Link to={"/"}>
          <li className="nav__btn">홈</li>
        </Link>
        {/* <Link to={"/about-me"}>
          <li className="nav__btn">소개</li>
        </Link> */}
        <Link to={"/games"}>
          <li className="nav__btn">게임</li>
        </Link>
      </ul>
    </>
  );
}

import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once).
  // if the [loginBtn] state variable inside dependecy array, everytimme the state variable changes useEffect is called.
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [loginBtn]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact US</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("LogOut")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

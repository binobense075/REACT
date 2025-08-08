import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once).
  // if the [loginBtn] state variable inside dependecy array, everytimme the state variable changes useEffect is called.
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [loginBtn]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg mb-2 sm:bg-yellow-200 lg:bg-blue-100">
      <div>
        <img className="w-30 mx-16 my-4" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 py-2 mx-2 bg-green-200 rounded-xl">
            Online Status : {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="px-4 py-2 mx-2 bg-green-200 rounded-xl">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 py-2 mx-2 bg-green-200 rounded-xl">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-4 py-2 mx-2 bg-green-200 rounded-xl">
            <Link to={"/contact"}>Contact US</Link>
          </li>
          <li className="px-4 py-2 mx-2 bg-green-200 rounded-xl">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <button
            className="px-4 py-2 mx-2 bg-yellow-200 rounded-xl cursor-pointer"
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

import { useState } from "react";
import LOGO_URL from "../../utilis/logo";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/home">HOME</Link>
          </li>
          <li>
            <Link to="/about Us">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/cart">CART</Link>
          </li>
          <li>
            <Link to="/grocery">GROCERY</Link>
          </li>
          <button
            className="login"
            onClick={() =>
              setBtnName((btnName) =>
                btnName === "Login" ? "Logout" : "Login"
              )
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

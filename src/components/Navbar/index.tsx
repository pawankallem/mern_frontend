import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div>
          <Link to="/" className="text-white font-bold text-xl">
            Logo
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-gray-300 hover:text-white">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-gray-300 hover:text-white">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div onClick={handleLogout} className="text-white font-bold text-xl">
            {isLoggedIn ? "Log Out" : "Log In"}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

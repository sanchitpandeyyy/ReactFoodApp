import React from "react";
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 bg-[#df9012]">
      <img src={Logo} alt="" className="w-20 h-20 ml-8 rounded-full" />
      <div className="flex gap-8 items-center font-semibold text-lg">
        <Link to={"/"} className="hover:text-[#f5f5f5]">Home</Link>
        <Link className=" hover:text-[#f5f5f5]" to={"/about"}>About</Link>
        <Link className="hover:text-[#f5f5f5] " to={"/contact"}>Contact</Link>
      </div>
      <div className="flex items-center gap-4 mr-8">
        <Link
          to={"/cart"}
          className="font-medium text-lg bg-white p-4 rounded-full hover:scale-110 "
        >
          {" "}
          <FaShoppingCart />{" "}
        </Link>
        <Link to={"/login"}>
          {" "}
          <button
           className="bg-blue-700 text-white py-2 px-4 rounded-lg  hover:bg-white hover:text-black">
            Login</button>{" "}
        </Link>
        <Link to={"/sign-up"}>
          {" "}
          <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-blue-700 hover:text-white hover:border-none">Sign Up</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

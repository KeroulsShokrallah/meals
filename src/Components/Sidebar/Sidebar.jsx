import React from "react";
import styles from "./Sidebar.module.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="bg-[#F9FAFB] fixed top-0 bottom-0 left-0 w-[250px] ">
        <img className="w-full cursor-pointer" src={logo} alt="logo"  />
        <ul className=" px-2">
          <li className="my-2 text-center hover:scale-105 duration-1000">
            <NavLink
              className="block border-[1px] rounded-2xl p-2 border-gray-200"
              to={"/meals"}
            >
              <i className="fa-solid fa-utensils me-3"></i> Meals
            </NavLink>
          </li>
          <li className="my-2 text-center hover:scale-105 duration-1000">
            <NavLink
              className="block border-[1px] rounded-2xl p-2 border-gray-200"
              to={"/inredients"}
            >
              <i className="fa-solid fa-utensils me-3"></i> Inredients
            </NavLink>
          </li>
          <li className="my-2 text-center hover:scale-105 duration-1000">
            <NavLink
              className="block border-[1px] rounded-2xl p-2 border-gray-200"
              to={"/area"}
            >
              <i className="fa-solid fa-utensils me-3"></i> Area
            </NavLink>
          </li>

      
        </ul>
      </div>
    </>
  );
}

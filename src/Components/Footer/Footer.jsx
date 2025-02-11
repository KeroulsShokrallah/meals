import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="py-3 text-center ms-[250px] ">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex  justify-between items-center">
              <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
              <Link className="font-bold">Recipe</Link>
            </div>

            <div>
              <p className="text-blue-500 text-2xl">Route</p>
            </div>  
          </div>
          <p className="text-gray-400 text-[16px]">
            © 2025 kerouls™. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

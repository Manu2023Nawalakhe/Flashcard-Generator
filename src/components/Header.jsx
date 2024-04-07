import React from "react";
import logo from "../assets/AlmaBetter_Logo.jpg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { print } = useSelector((state) => state.print); //fetching data of print store for hiding/displaying header on state change
  return (
    <>
      <div className="bg-white w-full px-10 py-3 shadow-md flex justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-[14rem]">
          <div className="w-[7rem]">
            <NavLink to="/">
              <img src={logo} alt="Shreyas Logo" height="30" width="80" />
            </NavLink>
          </div>
        </div>
        <div className="w-[18rem]">
          <NavLink to="/">
            <h1 className="font-bold md:text-2xl text-lg">
              <span className="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-[var(--color-red)] text-whiten rounded">
                Flashcard {"  "}
              </span>
              {"   "}
              Generator
            </h1>
          </NavLink>
        </div>
      </div>
      <div
        className={`my-5 md:mt-10 px-5 2xl:px-44 xl:px-20 navbar ${
          print === 1 ? "hidden" : null //if the print state is true,then hides the header,else shows it
        }`}
      >
        <h1 className="font-bold lg:text-2xl xsm:text-xl">Create Flashcard</h1>
        <div className="my-5 md:text-base text-sm md:font-medium font-bold text-slate-600">
          <NavLink to="/" className="mr-10 relative navitem">
            Create New
          </NavLink>
          <NavLink to="/myflashcard" className="relative navitem">
            {" "}
            My Flashcard{" "}
          </NavLink>
          <hr className="border-slate-400" />
        </div>
      </div>
    </>
  );
}

export default Header;

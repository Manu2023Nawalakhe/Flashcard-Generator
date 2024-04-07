import React from "react";
import { NavLink } from "react-router-dom";
import notFound from "../../assets/No_results_found.png";

function EmptyPage() {
  //displays the Empty page in case there is no card groups to display
  return (
    <>
      <div className="grid place-content-center h-[60vh]">
        <div className="grid place-content-center order-1 sm:order-2">
          <img
            className="h-[300px] mb-10"
            src={notFound}
            alt="files not found or Empty"
          />
        </div>
        <span className=" grid place-content-center text-2xl font-semibold italic rounded-md mb-10 text-center order-2 sm:order-1">
          It sure is empty in here, perhaps you want to fill it with a new
          Flashcard?
        </span>
        <div className="grid place-content-center order-3">
          {/* button to redirect the user to create new page */}
          <NavLink
            to="/"
            className="border-[var(--color-red)] border w-52 p-2 text-[var(--color-red)] rounded-lg shadow-md hover:translate-y-px hover:bg-[var(--color-red)] hover:text-white transition-all ease-in-out grid place-content-center font-semibold"
          >
            <span>Create Flashcard</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default EmptyPage;

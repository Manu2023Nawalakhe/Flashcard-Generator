import React from "react";
import error from "../../assets/error404.png";
import { Link } from "react-router-dom";

function PageNotFound() {
  //displays the 404 page in case user enters an non existing url
  return (
    <>
      <div className=" md:mt-10 px-5 2xl:pl-44 2xl:pr-[20%] xl:px-20 my-5 h-[60vh] grid place-content-center">
        <div className="lg:ml-20">
          <div>
            <img
              src={error}
              alt="Error 404,Page not found"
              style={{ height: "60vh" }}
            />
          </div>
          <div className="grid place-content-center text-center">
            <span className=" font-bold italic text-2xl m-0 p-0">
              The Page you are looking for does not exist !
            </span>
            <br />
            <span className=" font-bold italic text-2xl m-0 p-0">
              or...may have been moved to a new address!
            </span>
            {/* redirecting  the user to the home page on click */}
            <Link
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="mt-6 border-[var(--color-red)] border w-42 p-2 text-[var(--color-red)] rounded-lg shadow-md hover:translate-y-px hover:bg-[var(--color-red)] hover:text-white transition-all ease-in-out grid place-content-center font-semibold"
              to="/"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;

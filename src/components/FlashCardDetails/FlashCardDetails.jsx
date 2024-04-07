import React from "react";
import { Outlet, useParams } from "react-router-dom";
import DetailsHeader from "./DetailsHeader";
import TermBar from "./TermBar";
import Buttons from "./Buttons";
import TermCountArrows from "./TermCountArrows";
import { useSelector } from "react-redux";
import PageNotFound from "../Page404/PageNotFound";

function FlashCardDetails() {
  const { print } = useSelector((state) => state.print); //getting the print store the data for layout change purpose
  const { cards } = useSelector((state) => state.cards); //getting the cards validating links
  const { slug, id } = useParams(); //getting the params for validating links
  return (
    <>
      <div>
        {cards &&
        cards.length > slug &&
        cards[slug].values.terms.length > id ? (
          //if the links are fine, the display the details,else display error 404
          <div className="md:mt-10 px-5 xl:px-44 my-5">
            {/* calling the details header component for displaying card group name and description */}
            <DetailsHeader />
            <div className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 space-x-3">
              {/* calling the term bar component for displaying the names of terms to navigate between terms */}
              <TermBar />
              <div className="col-span-2 md:col-span-3 grid justify-center">
                <Outlet />{" "}
                {/* calling on outlet to display the child component - term card */}
                <div
                  className={`flex text-slate-800 cursor-pointer justify-center my-5 space-x-5 ${
                    print === 1 ? "hidden" : null
                  }`}
                >
                  {/* displays/hides the term navigation arrows  based on the print status */}
                  <TermCountArrows />
                </div>
              </div>
              <div
                className={`grid place-content-center md:place-content-start col-span-2 md:col-span-1 ${
                  print === 1 ? "hidden" : null
                }`}
              >
                {/* displays/hides the buttons component based on the print ststus */}
                <Buttons />
              </div>
            </div>
          </div>
        ) : (
          <PageNotFound />
        )}
      </div>
    </>
  );
}

export default FlashCardDetails;

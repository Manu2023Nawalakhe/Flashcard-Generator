import React from "react";
import { useSelector } from "react-redux";
import TitleCard from "./TitleCard";

function FlashcardsList() {
  const cards = useSelector((state) => state.cards.cards); //fetching data from cards store for displying the cards
  return (
    <>
      <div className="px-5 my-5">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {cards.map((item, i) => {
            //mapping through the cards store and displaying the title card for each card group
            return (
              <div key={i} data-testid="TitleCard">
                <TitleCard i={i} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FlashcardsList;

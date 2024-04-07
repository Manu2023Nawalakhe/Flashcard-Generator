import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateNewFlashcard from "../components/CreateNew/CreateNewFlashcard";
import MyFlashcards from "../components/MyFlashcards/MyFlashcards";
import FlashCardDetails from "../components/FlashCardDetails/FlashCardDetails";
import TermCard from "../components/FlashCardDetails/TermCard";
import PageNotFound from "../components/Page404/PageNotFound";

function main() {
  //routes for handling all the route in the app
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<CreateNewFlashcard />} />
          <Route path="/dashboard" element={<CreateNewFlashcard />} />
          <Route path="/home" element={<CreateNewFlashcard />} />
          <Route path="/myflashcard" element={<MyFlashcards />} />
          <Route path="/flashcard/:slug/" element={<FlashCardDetails />}>
            <Route path=":id" element={<TermCard />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default main;

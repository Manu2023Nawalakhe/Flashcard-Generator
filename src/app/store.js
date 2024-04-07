import { configureStore } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../components/LocalStorage";
import cardReducer from "../features/flashcards";
import printReducer from "../features/print";
import linkReducer from "../features/link";

//constant to load data from local storage and save it

const preloadedState = loadFromLocalStorage();

//store for handling all redux states and loads initial data from constant preloadedState
export default configureStore({
  reducer: {
    cards: cardReducer,
    print: printReducer,
    link: linkReducer,
  },
  preloadedState,
});

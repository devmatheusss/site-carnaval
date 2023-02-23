import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import { cards } from "./data/data";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [filteredCards, setFilteredCards] = useState(cards);
  const myRef = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSearch = () => {
    const filteredCards = cards.filter((card) => {
      const isTitleFiltered = inputValue
        ? card.title.toLowerCase().includes(inputValue.toLowerCase())
        : true;
      const isLocationFiltered = selectValue
        ? card.location.includes(selectValue)
        : true;
      return isTitleFiltered && isLocationFiltered;
    });
    setFilteredCards(filteredCards);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header
        inputValue={inputValue}
        setInputValue={handleChange}
        selectValue={selectValue}
        setSelectValue={(value) => setSelectValue(value)}
        onClick={() => {
          handleScroll(myRef.current);
          handleSearch();
        }}
      />
      <Main ref={myRef} cards={filteredCards} />
    </div>
  );
}

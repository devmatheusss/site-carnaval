import React from "react";

import ImgTop from "../assets/images/ilustra-01.svg";
import ImgBottom from "../assets/images/ilustra-02.svg";
import Form from "./HeaderComponents/Form";

import "./styles/Header.css";

export default function Header({
  inputValue,
  setInputValue,
  selectValue,
  setSelectValue,
  onClick,
}) {
  return (
    <header className="header">
      <img className="img-top" src={ImgTop} alt="" />
      <img className="img-bottom" src={ImgBottom} alt="" />
      <div className="header-content">
        <div className="header-text">
          <span>FIND YOUR BLOCK</span>
          <h1>
            Encontre os <span>melhores blocos</span> de carnaval de 2023
          </h1>
        </div>
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          onClick={onClick}
        />
      </div>
    </header>
  );
}

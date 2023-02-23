import React from "react";
import { Input } from "@material-tailwind/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { red } from "tailwindcss/colors";

import SelectCity from "./SelectCity";
import "../styles/Header.css";

export default function Form({
  inputValue,
  setInputValue,
  selectValue,
  setSelectValue,
  onClick,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="flex-1">
        <Input
          icon={<HiMagnifyingGlass color={red[500]} />}
          label="Pesquise por nome"
          className="shadow-md"
          type={"search"}
          value={inputValue}
          onChange={setInputValue}
          size="lg"
        />
      </div>

      <SelectCity valor={selectValue} setValor={setSelectValue} />

      <button
        onClick={onClick}
        className="bg-roxo rounded-lg w-full h-10 md:w-full lg:w-52 text-white text-sm font-bold shadow-md shadow-roxo transition duration-200"
      >
        BUSCAR AGORA
      </button>
    </form>
  );
}

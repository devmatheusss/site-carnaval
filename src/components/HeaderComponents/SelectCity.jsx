import { Option, Select } from "@material-tailwind/react";
import React from "react";

import { options } from "../../data/data";

export default function SelectCity({ valor, setValor }) {
  return (
    <div className="flex-1">
      <Select
        value={valor}
        onChange={setValor}
        label="Selecione uma cidade"
        className="shadow-md"
        size="lg"
      >
        {options.map((opt) => (
          <Option value={opt.label} key={opt.value}>
            {opt.label}
          </Option>
        ))}
      </Select>
    </div>
  );
}

import React, { useState } from "react";

import { menuOptions } from "../../data/data";

const Menu = () => {
  const [options, setOptions] = useState(menuOptions);

  const handleCheck = (id) => {
    setOptions((options) =>
      options.map((option) =>
        option.id === id
          ? { ...option, checked: true }
          : { ...option, checked: false }
      )
    );
  };

  return (
    <li>
      {options.map((option) => (
        <div className="btn-container" key={option.id}>
          <input
            className="checkbox"
            type="checkbox"
            checked={option.checked}
            onChange={() => handleCheck(option.id)}
            id={option.label}
          />
          <label
            htmlFor={option.label}
            className={`label ${option.checked ? "selected" : ""}`}
          >
            {option.label}
          </label>
        </div>
      ))}
    </li>
  );
};

export default Menu;

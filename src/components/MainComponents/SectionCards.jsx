import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { red } from "tailwindcss/colors";

import "../styles/Main.css";

const SectionCards = (props) => {
  return (
    <section className="section-cards">
      {props.cards.map((card) => (
        <div className="main-card" key={card.id}>
          <img src={card.image} alt={card.title} />
          <div className="main-card-text">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <span>
              <IoLocationOutline size={22} color={red[500]} /> {card.location}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SectionCards;

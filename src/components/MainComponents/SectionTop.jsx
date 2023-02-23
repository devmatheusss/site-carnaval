import React from "react";

import Menu from "./Menu";

import "../styles/Main.css";

const SectionTop = () => {
  return (
    <section className="section-top">
      <h2>Blocos Recomendados</h2>
      <nav className="st-nav">
        <ul className="st-ul">
          <Menu />
        </ul>
      </nav>
    </section>
  );
};

export default SectionTop;

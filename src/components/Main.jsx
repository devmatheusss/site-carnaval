import React from "react";
import SectionTop from "./MainComponents/SectionTop";
import SectionCards from "./MainComponents/SectionCards";

import "./styles/Main.css";

const Main = React.forwardRef((props, ref) => {
  return (
    <main className="min-h-screen" ref={ref}>
      <SectionTop />
      <SectionCards cards={props.cards} />
    </main>
  );
});

export default Main;

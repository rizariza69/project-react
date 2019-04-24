import React from "react";

import "./App.css";
import { Navigation } from "./components/navigation/index";
import { Jumbotron } from "./components/jumbotron/index";
import { ButtonAwesome } from "./components/buttonAwesome/index";
import { CardLayout } from "./components/cardLayout/index";
import { Karosel } from "./components/carousel";
import { FormGroup } from "./components/form";

function App() {
  return (
    <div>
      <Navigation />
      <Karosel />
      <div className="container">
        <ButtonAwesome />
        <FormGroup />
        <CardLayout />
        <Jumbotron />
      </div>
    </div>
  );
}

export default App;

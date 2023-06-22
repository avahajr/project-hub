import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Divider } from "semantic-ui-react";
import Masthead from "./masthead/Masthead";
import Footer from "./footer/Footer";
import CardFilterer from "./card-grid/CardFilterer";

function App() {
  return (
    <div>
      <Masthead />
      <CardFilterer />
      <Divider hidden />

      <Footer />
    </div>
  );
}

export default App;

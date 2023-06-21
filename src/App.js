import React from "react";
import "./semantic/dist/semantic.min.css";
// import ProjectCard from "./card-grid/ProjectCard";
import { Divider } from "semantic-ui-react";
// import "./card-grid/ProjectGrid.css";
import Masthead from "./masthead/Masthead";
// import FilterMenu from "./masthead/FilterMenu";
import Footer from "./footer/Footer";
import CardFilterer from "./card-grid/CardFilterer";

function App() {
  // const [cardList] = useState(cardData);

  // const [filteredCardList, setFilteredCardList] = useState(cardList);

  return (
    <div>
      <Masthead />
      {/* <FilterMenu allTags={allTags} /> */}
      <CardFilterer />
      <Divider hidden />

      <Footer />
    </div>
  );
}

export default App;

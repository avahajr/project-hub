import "./semantic/dist/semantic.min.css";
import MakeCard from "./card-grid/MakeCard";
import { Container } from "semantic-ui-react";

function App() {
  const props = {
    Header: "Test card",
    Date: "xxxx 2023",
    Description: "blah blah about the project!",
    Tags: ["foo", "bar"],
    linkTo: "https://google.com",
  };
  return <Container>{MakeCard(props)}</Container>;
}

export default App;

import "./semantic/dist/semantic.min.css";
import MakeCard from "./card-grid/MakeCard";
import { Container, Divider, Grid, Header, Segment } from "semantic-ui-react";
// import PageMenu from "./masthead/PageMenu";
import "./card-grid/ProjectGrid.css";
import "./masthead/Segment.css";
import Masthead from "./masthead/Masthead";

function App() {
  const cards = [
    {
      ProjectName: "Personal Website",
      Date: "May-June 2023",
      Description: "blah blah about the project!",
      Tags: ["Frontend", "HTML/CSS"],
      linkTo: "https://github.com/avahajr/avahajr.github.io",
      private: false,
    },
    {
      ProjectName: "RL Stick-shift Sim",
      Date: "Summer 2023",
      Description:
        "A 3D Unity game/simulation where the AI learns to drive a manual car from scratch using reinforcement learning.",
      Tags: ["AI", "Game development", "C#"],
      linkTo: "https://github.com/avahajr/Racing-Game",
      private: false,
    },
    {
      ProjectName: "Neural Network",
      Date: "April 2023",
      Description:
        "Building and training a neural network from scratch to identify handwritten digits from the famous MNIST dataset.",
      Tags: ["AI", "Python"],
      linkTo: "",
      private: true,
    },
    {
      ProjectName: "Dynamic web server and client",
      Date: "December 2022",
      Description:
        "Client and server side code for a dynamic HTML webpage using the Socket API.",
      Tags: ["Backend", "C", "HTML/CSS"],
      linkTo: "",
      private: true,
    },
  ];
  return (
    <div>
      <Masthead /> (
      <Grid columns={2} stackable container className="grid-container">
        {cards.map((card, index) => (
          <Grid.Column key={index}>{MakeCard(card)}</Grid.Column>
        ))}
      </Grid>
      )
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./semantic/dist/semantic.min.css";
import ProjectCard from "./card-grid/ProjectCard";
import { Grid, Divider } from "semantic-ui-react";
import "./card-grid/ProjectGrid.css";
// import "./masthead/Segment.css";
import Masthead from "./masthead/Masthead";
import Footer from "./footer/Footer";

function App() {
  const [cardList, setCardList] = useState([
    {
      name: "Personal website",
      date: "May 2023",
      description:
        "A GitHub pages website for showcasing my projects to potential employers and practicing my web development skills. Now with React!",
      linkTo: "https://github.com/avahajr/avahajr.github.io",
      tags: ["HTML/CSS", "ReactJS"],
      private: false,
    },
    {
      name: "RL Stick-shift sim",
      date: "Summer 2023",
      description:
        "A 3D Unity game/simulation where an AI learns to drive a manual car from scratch using reinforcement learning.",
      linkTo: "https://github.com/avahajr/Racing-Game",
      tags: ["AI", "Unity", "C#"],
      private: false,
    },
    {
      name: "Neural Network",
      date: "April 2023",
      description:
        "Building and training a neural network from scratch to identify handwritten digits from the famous MNIST dataset.",
      linkTo: "",
      tags: ["AI", "Python"],
      private: true,
    },
    {
      name: "Dynamic web server and client",
      date: "December 2022",
      description:
        "Client and server side code for a dynamic HTML webpage using the Socket API.",
      tags: ["C", "HTML/CSS"],
      linkTo: "",
      private: true,
    },
  ]);

  return (
    <div>
      <Masthead cardList={cardList} />
      <Divider hidden />
      <Grid columns={2} stackable container className="grid-container">
        {cardList.map((project, index) => (
          <Grid.Column>
            <ProjectCard
              key={index}
              name={project.name}
              date={project.date}
              description={project.description}
              linkTo={project.linkTo}
              tags={project.tags}
              private={project.private}
            />
          </Grid.Column>
        ))}
      </Grid>
      )
      <Divider hidden />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { Grid } from "semantic-ui-react";
import ProjectCard from "./ProjectCard";
import cardData from "./cardData";
import "../semantic/dist/semantic.min.css";
// A function that takes as input a card array and an array of active tags
// and returns all the elements from the card array whose 'tags' field
// contains at least one of the active tags

// Builds a card list from the list returned
function getCardsFromTags(activeTags, allCards) {
  if (activeTags.includes("All")) {
    return allCards;
  }

  return allCards.filter((card) => {
    return card.tags.some((tag) => activeTags.includes(tag));
  });
}

function CardGrid(props) {
  const filteredCardList = getCardsFromTags(props.activeTags, cardData);
  return (
    <Grid columns={2} stackable container>
      {filteredCardList.map((project, index) => (
        <Grid.Column>
          <ProjectCard
            key={index}
            name={project.name}
            date={project.date}
            description={project.description}
            linkTo={project.linkTo}
            tags={project.tags}
            isPrivate={project.isPrivate}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
}

export default CardGrid;

import React, { useState } from "react";
import { Grid, Button, Divider } from "semantic-ui-react";
import "./CardFilterer.css";
import cardData from "./cardData";
import CardGrid from "./CardGrid";

function CardFilterer() {
  // it is fed in the unfiltered list of cards

  const [activeTags, setActiveTags] = useState(["All"]);

  let allTags = [].concat(...cardData.map((card) => card.tags));
  allTags = new Set(allTags);
  allTags = Array.from(allTags).sort();
  allTags.unshift("All");
  return (
    <div>
      <div className="ui inverted blue vertical masthead left aligned segment filter">
        <Grid centered stackable columns={allTags.length}>
          {allTags.map((tag, index) => (
            <Button
              key={index}
              content={tag}
              onClick={() => setActiveTags([tag])}
              inverted
              basic
              circular
            />
          ))}
        </Grid>
        <Divider hidden />

        {/* Now, pass active tags into the card grid */}
      </div>
      <Divider hidden />
      <CardGrid activeTags={activeTags} />
    </div>
  );
}

// function setActiveTags(activeTags, tagToAdd) {
//   return activeTags.concat(tagToAdd);
// }

export default CardFilterer;

import React from "react";
import { Button, Grid } from "semantic-ui-react";
import "./FilterMenu.css";

function FilterMenu(props) {
  // first, generate the list of tags from the cardList
  let allTags = [].concat(...props.cardList.map((card) => card.tags));
  allTags = new Set(allTags);
  allTags = Array.from(allTags).sort();

  return (
    <Grid centered stackable columns={allTags.length}>
      <Button content="All" inverted basic circular active />
      {allTags.map((tag, index) => (
        <Button key={index} content={tag} inverted basic circular />
      ))}
    </Grid>
  );
}
export default FilterMenu;

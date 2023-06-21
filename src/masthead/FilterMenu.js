import React, { useState } from "react";
import { Button, Divider, Grid } from "semantic-ui-react";
import "./FilterMenu.css";
import "./Masthead.css";
import cardData from "../card-grid/cardData";
// import filterCards from "../App";

function FilterMenu(props) {
  const [activeTags, setActiveTags] = useState([]);
  let allTags = [].concat(...cardData.map((card) => card.tags));
  allTags = new Set(allTags);
  allTags = Array.from(allTags).sort();

  // const [activeTags, setActiveTags] = useState([]);
  return (
    <div className="ui inverted blue vertical masthead left aligned segment">
      <Grid centered stackable columns={allTags.length}>
        <Button
          content="All"
          inverted
          basic
          circular
          active
          onClick={setActiveTags(["All"])}
        />
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
    </div>
  );
}
export default FilterMenu;

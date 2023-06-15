import React from "react";
import { Button, Grid } from "semantic-ui-react";

function FilterMenu(props) {
  return (
    <Grid centered stackable columns={props.tagList.length}>
      <Button content="All" inverted basic size="small" circular active />
      {props.tagList.map((tag, index) => (
        <Button
          key={index}
          content={tag}
          inverted
          basic
          size="small"
          circular
        />
      ))}
    </Grid>
  );
}
export default FilterMenu;

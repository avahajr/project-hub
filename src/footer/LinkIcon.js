import React from "react";
import { Icon } from "semantic-ui-react";

function LinkIcon(props) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <Icon color="blue" name={props.name} size="big" link />
    </a>
  );
}

export default LinkIcon;

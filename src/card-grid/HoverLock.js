import React from "react";
import { Icon, Label } from "semantic-ui-react";

function HoverLock(props) {
  return (
    <Label corner>
      <Icon name={props.hovered ? "unlock" : "lock"} />
    </Label>
  );
}

export default HoverLock;

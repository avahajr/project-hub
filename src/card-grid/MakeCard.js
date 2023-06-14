import React from "react";
import "../semantic/dist/semantic.min.css";
import { Card, Image, Label, Grid } from "semantic-ui-react";
import pfp from "../github-pfp.jpg";

function MakeCard(props) {
  return (
    <Card link href={props.linkTo} color="blue" size="container">
      <Card.Content>
        <Card.Header content={props.Header} />
        <Card.Meta content={props.Date} />
        <Card.Description content={props.Description} />
      </Card.Content>
      <Card.Content extra>
        <div className="right floated author">
          <Image src={pfp} avatar />
          avahajr (GitHub)
        </div>
        {/* Each project may have different tags, so the tags are dynamically generated. */}
        {/* <Label content="HTML" size="tiny" /> */}
        {props.Tags.map((tag, index) => (
          <Label key={index} content={tag} size="tiny" />
        ))}
      </Card.Content>
    </Card>
  );
}
export default MakeCard;
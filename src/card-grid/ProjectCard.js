import React from "react";
import "../semantic/dist/semantic.min.css";
import { Card, Image, Label } from "semantic-ui-react";
import pfp from "../github-pfp.jpg";
import "./ProjectGrid.css";

function ProjectCard(props) {
  // Props stand for an individual card
  return (
    <Card link href={props.linkTo} target="_blank" fluid>
      <Card.Content>
        <Card.Header content={props.name} />
        <Card.Meta content={props.date} />
        <Card.Description content={props.description} />
      </Card.Content>
      <Card.Content extra>
        <div className="right floated author">
          <Image src={pfp} avatar />
          avahajr (GitHub)
        </div>
        {/* Each project may have different tags, so the tags are dynamically generated. */}
        {props.tags.map((tag, index) => (
          <Label key={index} content={tag} size="small" />
        ))}
      </Card.Content>
    </Card>
  );
}
export default ProjectCard;

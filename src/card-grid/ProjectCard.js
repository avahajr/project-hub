import React, { useState } from "react";
// import "semantic-ui-css/semantic.min.css";

import { Card, Image, Label, Modal } from "semantic-ui-react";
import pfp from "../github-pfp.jpg";
import "./ProjectCard.css";
import HoverLock from "./HoverLock";
import RequestForm from "../notification/RequestForm";

function CardContents(props) {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  // function returns just the card without the modal wrapper.
  return (
    <Card
      link
      href={props.isPrivate ? null : props.linkTo}
      target={!props.isPrivate ? "_blank" : null}
      fluid
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Content>
        <Card.Header>
          {props.name}
          {props.isPrivate ? <HoverLock hovered={hovered} /> : <></>}
        </Card.Header>
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

function ProjectCard(props) {
  // This one is with the modal wrapper (the one on the website.)
  return props.isPrivate ? (
    <Modal centered size="tiny" trigger={CardContents(props)}>
      <Modal.Header>This repo is private</Modal.Header>
      <Modal.Content>
        Because of honor code restrictions, I cannot post this repo online
        publicly. Enter your information here to request access.
        <RequestForm />
      </Modal.Content>
    </Modal>
  ) : (
    CardContents(props)
  );
}
export default ProjectCard;

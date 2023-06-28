import React from "react";
import { Divider, Header, Segment } from "semantic-ui-react";
import PageMenu from "./PageMenu";
import "./Masthead.css";

function Masthead() {
  return (
    <div className="ui inverted blue vertical masthead left aligned segment">
      <div className="ui container">
        <Divider hidden />
        <Header as="h1" content="Ava Hajratwala" inverted />
        <PageMenu />
        <Header
          as="h1"
          className="emphasis"
          content="Projects"
          textAlign="center"
          inverted
        />
        <Segment
          color="blue"
          inverted
          size="large"
          content="Here you'll find my projects, both academic and personal."
          textAlign="center"
        />
      </div>
    </div>
  );
}
export default Masthead;

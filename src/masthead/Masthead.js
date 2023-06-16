import React from "react";
import { Divider, Header, Segment } from "semantic-ui-react";
import PageMenu from "./PageMenu";
import "./Masthead.css";
import FilterMenu from "./FilterMenu";

function Masthead(props) {
  return (
    <div className="ui inverted blue vertical masthead left aligned segment">
      <div className="ui container">
        <Divider hidden />
        <Header as="h2" content="Ava Hajratwala" inverted />
        <PageMenu />
        <Header as="h1" content="Projects" textAlign="center" inverted />
        <Segment
          color="blue"
          inverted
          size="large"
          content="Here you'll find my projects, both academic and personal."
          textAlign="center"
        />
        <Divider hidden />
        <FilterMenu cardList={props.cardList} />
        <Divider hidden />
      </div>
    </div>
  );
}
export default Masthead;

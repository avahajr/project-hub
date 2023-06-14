import React, { Component } from "react";
import { Divider, Header, Segment } from "semantic-ui-react";
import PageMenu from "./PageMenu";
import './Masthead.css';

export default class Masthead extends Component {
    render() {
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
            size="small"
            content="Here you'll find my projects, both academic and personal."
            textAlign="center"
            className="bigger-text"
          />
        </div>
      </div>
        )
    }
}
import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "./Masthead.css";
import "../semantic/dist/semantic.min.css";

export default class PageMenu extends Component {
  state = { activeItem: "projects" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary inverted color="blue">
          <a href="../../index.html" target="_blank">
            <Menu.Item name="about me" />
          </a>
          <Menu.Item name="projects" active={activeItem === "projects"} />
          <a href="../../05-24-2023_Resume.pdf" target="_blank">
            <Menu.Item name="resume" />
          </a>
        </Menu>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "./Masthead.css";
// import "../semantic/dist/semantic.min.css";

export default class PageMenu extends Component {
  state = { activeItem: "projects" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing inverted secondary>
          <Menu.Item href="https://avahajr.github.io" name="about me" />
          <Menu.Item name="projects" active={activeItem === "projects"} />
          <a
            href="https://avahajr.github.io/05-24-2023_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Menu.Item name="resume" />
          </a>
        </Menu>
      </div>
    );
  }
}

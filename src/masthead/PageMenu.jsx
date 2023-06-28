import React, { Component } from "react";
import { Button, Menu } from "semantic-ui-react";
import "./Masthead.css";
import "./Menu.css";
import "animate.css";

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

          <Menu.Item
            href="https://avahajr.github.io/classes.html"
            name="classes"
          />
          <Menu.Item position="right">
            <Button
              className="animate__animated animate__pulse animate__infinite animate__slower"
              content="Download resume"
              as="a"
              href="https://avahajr.github.io/05-24-2023_Resume.pdf"
              download
              color="white"
            />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

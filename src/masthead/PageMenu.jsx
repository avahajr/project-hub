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
          <Menu.Item
            href="https://avahajr.github.io"
            active={activeItem === "about me"}
            name="about me"
          />
          <Menu.Item name="projects" active={activeItem === "projects"} />

          <Menu.Item
            href="https://avahajr.github.io/classes.html"
            active={activeItem === "classes"}
            name="classes"
          />
          <Menu.Item position="right">
            <Button
              className="animate__animated animate__pulse animate__infinite animate__slower"
              content="Download resume"
              as="a"
              href="https://avahajr.github.io/05-24-2023_Resume.pdf"
              target="_blank"
              download
              color="white"
            />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

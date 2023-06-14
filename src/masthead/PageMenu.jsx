import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import './Masthead.css';

export default class PageMenu extends Component {
  state = { activeItem: "projects" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary inverted color="blue">
          <Menu.Item
            name="about me"
            active={activeItem === "about me"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="projects"
            active={activeItem === "projects"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="resume"
            active={activeItem === "resume"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}

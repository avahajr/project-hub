import React from "react";
// import "semantic-ui-css/semantic.min.css";

import { Container } from "semantic-ui-react";
import LinkIcon from "./LinkIcon";

function Footer() {
  return (
    <footer className="blue ui vertical footer segment">
      <Container textAlign="right">
        <LinkIcon
          href="https://www.linkedin.com/in/ava-hajratwala-42910b274/"
          name="linkedin"
        />
        <LinkIcon href="https://github.com/avahajr" name="github square" />
        <LinkIcon href="https://instagram.com/avahajratwala" name="instagram" />
      </Container>
    </footer>
  );
}

export default Footer;

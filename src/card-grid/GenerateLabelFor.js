/* this file will form the basis of the card grid, 
containing all relevant information about the projects */
import { Label } from "semantic-ui-react";

function GenerateLabelFor(tagValue) {
  return <Label content={tagValue} size="tiny" />;
}

export default GenerateLabelFor;

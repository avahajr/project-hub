// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useState } from "react";
import { Divider, Container } from "semantic-ui-react";
import Toast from "./Toast";

import "semantic-ui-css/semantic.min.css";

function RequestForm() {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleDismissToast = () => {
    setShowToast(false);
  };
  return (
    <div>
      <form
        className="ui form gform"
        action="https://script.google.com/macros/s/AKfycbyq6rPweNzuTxiKrE86UbKZVOEHfPukh9iYB2nuUaYRGJ6jXNbwe_GDSrHwkezbRuw/exec"
        method="POST"
        data-email="ash2261@barnard.edu"
      >
        <Divider hidden />
        <div className="field">
          <label>Full name</label>
          <input placeholder="First and last" name="name" id="name"></input>
        </div>
        <div className="field">
          <label>Company/association</label>
          <input
            placeholder="Fancypants Studios"
            id="company/association"
            name="company/association"
          ></input>
        </div>
        <div className="field">
          <label>GitHub username</label>
          <input
            placeholder="i.e., avahajr"
            id="github user"
            name="github user"
          ></input>
        </div>

        <Container textAlign="right">
          <button className="primary ui button" onClick={handleShowToast}>
            Request access
          </button>
        </Container>
      </form>
      {showToast && (
        <Toast
          content="Request submitted. You'll hear from me soon!"
          duration={3000}
          onDismiss={handleDismissToast}
        />
      )}
    </div>
    //  <Form
    //   className="gform"
    //   action="https://script.google.com/macros/s/AKfycbyq6rPweNzuTxiKrE86UbKZVOEHfPukh9iYB2nuUaYRGJ6jXNbwe_GDSrHwkezbRuw/exec"
    // >
    //   <Divider hidden />

    //   <Form.Input
    //     placeholder="First and Last"
    //     label="Full name"
    //     id="name"
    //     name="name"
    //   />
    //   <Form.Input
    //     label="Company/association"
    //     id="company"
    //     placeholder="Who are you?"
    //     name="company"
    //   />
    //   <Form.Input
    //     label="GitHub username"
    //     placeholder="i.e., avahajr"
    //     id="username"
    //     name="username"
    //   />
    //   {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
    //   <Divider hidden />
    //   {/* <textarea id="message" name="message" /> */}
    //   {/* <ValidationError prefix="Company" field="company" errors={state.errors} /> */}
    //   <Divider hidden />

    //   <Container textAlign="right">
    //     <Button
    //       type="submit"
    //       primary
    //       // disabled={state.submitting}
    //       content="Request access"
    //     />
    //   </Container>
    // </Form>
  );
}

export default RequestForm;

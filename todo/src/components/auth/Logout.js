import React, { Component } from "react";
import { withAuth } from "@okta/okta-react";
import Button from "@material-ui/core/Button";

class Logout extends Component {
  logout = async () => {
    this.props.auth.logout("/");
  };

  render() {
    return (
      <Button
        variant="contained"
        style={{ float: "right" }}
        color="primary"
        onClick={this.logout}
      >
        Logout
      </Button>
    );
  }
}

export default withAuth(Logout);

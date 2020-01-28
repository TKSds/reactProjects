import React, { Component } from "react";
import { withAuth } from "@okta/okta-react";
import Button from "@material-ui/core/Button";

class Logout extends Component {
  logout = async () => {
    this.props.auth.logout("/");
  };

  state = { authenticated: null };

  checkAuthentication = async () => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  };

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    const showLogoutButton = this.state.authenticated ? (
      <Button
        variant="contained"
        style={{ float: "right" }}
        color="primary"
        onClick={this.logout}
      >
        Logout
      </Button>
    ) : (
      <React.Fragment />
    );

    return <React.Fragment> {showLogoutButton} </React.Fragment>;
  }
}

export default withAuth(Logout);

import React, { Component } from "react";

export const UserContext = React.createContext({
  authToken: null,
  changeAuthToken: () => null
});

export const UserConsumer = UserContext.Consumer;

export class UserProvider extends Component {
  state = {
    authToken: null
  };

  changeAuthToken = authToken => {
    this.setState({ authToken });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          authToken: this.state.authToken,
          changeAuthToken: this.changeAuthToken
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

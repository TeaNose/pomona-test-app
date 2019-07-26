import React, { Component } from "react";

export const ToDoContext = React.createContext({
  toDoList: null,
  changeToDoList: () => null
});

export const ToDoConsumer = ToDoContext.Consumer;

export class ToDoProvider extends Component {
  state = {
    toDoList: null
  };

  changeToDoList = toDoList => {
    this.setState({ toDoList });
  };

  render() {
    return (
      <ToDoContext.Provider
        value={{
          toDoList: this.state.toDoList,
          changeToDoList: this.changeToDoList
        }}
      >
        {this.props.children}
      </ToDoContext.Provider>
    );
  }
}

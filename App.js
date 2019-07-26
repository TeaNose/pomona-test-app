/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { UserProvider } from "./src/context/user";
import { ToDoProvider } from "./src/context/toDoItem";

import MainNavigator from "./src/config/navigation";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <UserProvider>
        <ToDoProvider>
          <SafeAreaView style={{flex: 1}}>
            <MainNavigator />
          </SafeAreaView>
        </ToDoProvider>
      </UserProvider>
    </Fragment>
  );
};

export default App;

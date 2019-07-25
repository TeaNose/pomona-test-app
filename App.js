/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import { SafeAreaView, StatusBar } from "react-native";

import MainNavigator from "./src/config/navigation";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <MainNavigator />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;

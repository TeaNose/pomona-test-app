import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomePage from "../../screen/home";
import LoginPage from "../../screen/login";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomePage },
    Login: { screen: LoginPage }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const App = createAppContainer(MainNavigator);

export default App;

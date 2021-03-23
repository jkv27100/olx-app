import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessageScreen";

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Message" component={MessageScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;

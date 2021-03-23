import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ListItemScreen from "../screens/ListItemScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="List" component={ListingsScreen} />
    <Stack.Screen name="ListItem" component={ListItemScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;

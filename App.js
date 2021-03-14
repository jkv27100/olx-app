import React, { useEffect, useState } from "react";
import { View, StatusBar, Button, Switch, Alert, Image } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppButton from "./app/components/AppButton";
import AppCard from "./app/components/AppCard";
import Avatar from "./app/components/Avatar";
import ListItemScreen from "./app/screens/ListItemScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Icon from "./app/components/Icon";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import colors from "./app/config/colors";
import AppTextInput from "./app/components/AppTextInput";
import { TextInput } from "react-native-gesture-handler";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";
import ImageList from "./app/components/ImageList";

export default function App() {
  return (
    <>
      <StatusBar />
      <ListingEditScreen />
    </>
  );
}

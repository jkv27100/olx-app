import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "./Icon";

export default function PickerItem({ title, onPress, icon, backgroundColor }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={icon} background={backgroundColor} size={100} />

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontFamily: "Roboto",
    fontSize: 25,
  },
  container: {
    alignItems: "center",
    padding: 30,
  },
});

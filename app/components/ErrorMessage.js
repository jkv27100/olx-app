import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";

export default function ErrorMessage({ message, visible }) {
  if (!visible || !message) return null;
  return <Text style={styles.text}>{message}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.danger,
  },
});

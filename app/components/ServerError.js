import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "./AppButton";

export default function ServerError({ onPress }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        There is a problem with server please try again
      </Text>
      <AppButton title="Retry" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

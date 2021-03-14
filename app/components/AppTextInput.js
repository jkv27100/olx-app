import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function AppTextInput({
  placeholder,
  name,
  size = 20,
  ...otherProps
}) {
  const [state, setstate] = useState("");
  const handleChange = (text) => {
    setstate(text);
  };
  return (
    <View style={styles.container}>
      {name && (
        <MaterialCommunityIcons
          name={name}
          style={styles.icon}
          size={size}
          color={colors.medium}
        />
      )}
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        onChangeText={(text) => handleChange(text)}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 15,
    flexDirection: "row",
    marginVertical: 10,
    width: "100%",
    borderRadius: 25,
    alignItems: "center",
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: colors.dark,
  },
  icon: { marginRight: 10 },
});

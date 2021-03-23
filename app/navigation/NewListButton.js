import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function NewListButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    borderWidth: 10,
    bottom: 22,
    height: 80,
    width: 80,
  },
});

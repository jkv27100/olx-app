import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({
  name,
  size = 35,
  background = "#000",
  color = "#fff",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: background,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={color} size={size * 0.5} />
    </View>
  );
}

import React from "react";

import LottieView from "lottie-react-native";
import colors from "../config/colors";

export default function UploadDone({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      style={{ backgroundColor: colors.primary }}
      source={require("../assets/animations/upload.json")}
    />
  );
}

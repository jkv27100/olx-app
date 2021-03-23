import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";
import routes from "../navigation/routes";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={0.5}
      style={styles.background}
      source={require("../assets/welcome.jpg")}
    >
      {/* <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/welcome-logo.png")}
        />
        <Text style={styles.caption}>Hanker for solutions</Text>
      </View> */}

      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  caption: {
    fontSize: 30,
    marginVertical: 10,
    fontWeight: "700",
    color: colors.black,
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
});

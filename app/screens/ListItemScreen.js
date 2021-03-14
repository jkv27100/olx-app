import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import Avatar from "../components/Avatar";
import colors from "../config/colors";

export default function AppCard({ image, title, subTitle }) {
  return (
    <>
      <View style={styles.cardContainer}>
        <StatusBar />
        <Image source={image} style={styles.img} />
        <View style={styles.subContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
      <View>
        <Avatar
          image={require("../assets/avatar.jpeg")}
          title="Jagannath K V"
          subTitle="3 minutes ago"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: 200,
  },
  subContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
  },
  subTitle: {
    color: colors.rateColor,
  },
});

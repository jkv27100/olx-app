import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import Swipeable from "../../node_modules/react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Icon from "./Icon";

export default function Avatar({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  name = "",
  background,
  color,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.avatarContainer}>
          {name === "" ? (
            <Image style={styles.image} source={image} />
          ) : (
            <Icon name={name} background={background} color={color} />
          )}

          <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {subTitle && (
              <Text style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </Text>
            )}
          </View>
          <MaterialCommunityIcons name="chevron-right" size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 35,
  },
  details: {
    flexDirection: "column",
    marginHorizontal: 15,
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subTitle: {
    color: colors.grey,
  },
});

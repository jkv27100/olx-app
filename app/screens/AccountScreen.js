import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Avatar from "../components/Avatar";
import Icon from "../components/Icon";
import Separator from "../components/Separator";
import colors from "../config/colors";

const data = [
  {
    title: "My Listings",
    name: "format-list-bulleted",
    background: colors.primary,
  },
  {
    title: "My Messages",
    name: "email",
    background: colors.secondary,
  },
];
export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Avatar
          image={require("../assets/avatar.jpeg")}
          title="Jagannath k v"
          subTitle="some text about something"
        />
      </View>
      <View style={styles.listItem}>
        <FlatList
          data={data}
          keyExtractor={(data) => data.title.toString()}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <Avatar
              title={item.title}
              subTitle={item.subTitle}
              name={item.name}
              background={item.background}
              onPress={() => console.log()}
            />
          )}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Avatar
          title="Log Out"
          name="logout"
          background="#ede10b"
          onPress={() => console.log()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    backgroundColor: colors.white,
    paddingTop: 20,
    marginBottom: 50,
  },
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  listItem: {
    backgroundColor: colors.white,
  },
  bottomContainer: {
    backgroundColor: colors.white,
    marginTop: 30,
  },
});

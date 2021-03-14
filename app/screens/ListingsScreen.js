import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import AppCard from "../components/AppCard";

export default function ListingsScreen() {
  const data = [
    {
      id: 1,
      title: "Jacket for sale",
      price: "100",
      image: require("../assets/man.jpg"),
    },
    {
      id: 2,
      title: "Chair in good condition",
      price: "1000",
      image: require("../assets/chair.jpg"),
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            image={item.image}
            title={item.title}
            subTitle={"$" + item.price}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

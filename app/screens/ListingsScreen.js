import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import AppCard from "../components/AppCard";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import ServerError from "../components/ServerError";
import Loader from "../components/Loader";
import useApi from "../hooks/useApi";

export default function ListingsScreen({ navigation }) {
  const { data: listings, error, loader, request: loadListings } = useApi(
    listingsApi.getListings
  );
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <View style={styles.container}>
      {error && <ServerError onPress={loadListings} />}

      <Loader visible={loader} />
      <FlatList
        data={listings}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          >
            <AppCard
              image={item.image}
              title={item.title}
              subTitle={"$" + item.price}
            />
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: colors.light,
    flex: 1,
  },
});

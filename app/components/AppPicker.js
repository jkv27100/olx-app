import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PickerItem from "./PickerItem";

export default function AppPicker({
  name,
  size = 20,
  placeholder,
  items,
  onSelectItem,
  selectedItem,
  column,
  ...otherProps
}) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
        <View style={styles.container}>
          {name && (
            <MaterialCommunityIcons
              name={name}
              style={styles.icon}
              size={size}
              color={colors.medium}
            />
          )}
          <Text style={styles.textInput} {...otherProps}>
            {selectedItem ? selectedItem.title : placeholder}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isVisible} animationType="slide">
        <Button title="close" onPress={() => setIsVisible(false)} />
        <FlatList
          data={items}
          numColumns={column}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              title={item.title}
              backgroundColor={item.backgroundColor}
              icon={item.name}
              onPress={() => {
                setIsVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
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
    flex: 1,
  },
  icon: { marginRight: 10 },
});

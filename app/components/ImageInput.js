import React, { useEffect } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    // Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      Alert.alert("Permission denied", "Message");
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      Alert.alert("Something Went Wrong", error);
    }
  };
  const handlePress = () => {
    if (!imageUri) selectImage();
    else handleDelete();
  };
  const handleDelete = () => {
    Alert.alert("Delete", "Are you sure you want to delete this image?", [
      { text: "Yes", onPress: () => onChangeImage(null) },
      { text: "No" },
    ]);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <MaterialCommunityIcons name="camera" size={50} color={colors.grey} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 125,
    height: 125,
    padding: 15,
    marginVertical: 15,
    borderRadius: 25,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: 125,
    height: 125,

    borderRadius: 25,
  },
});

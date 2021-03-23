import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import UploadDone from "../components/UploadDone";

import colors from "../config/colors";

export default function UploadScreen({ visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <UploadDone visible={visible} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

import React, { useState } from "react";
import { FlatList, StatusBar } from "react-native";
import Avatar from "../components/Avatar";
import Separator from "../components/Separator";
import DeleteAction from "../components/DeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Jagannath k v",
    subTitle: "very big text and im going to make it really really big",
    image: require("../assets/avatar.jpeg"),
  },
  {
    id: 2,
    title: "Jagannath k v",
    subTitle: "7 minutes ago",
    image: require("../assets/avatar.jpeg"),
  },
];
export default function MessageScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((msg) => msg.id !== message.id));
  };

  return (
    <>
      <StatusBar />

      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <Avatar
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => console.log()}
            renderRightActions={() => (
              <DeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={Separator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "Jagannath k v",
              subTitle: "7 minutes ago",
              image: require("../assets/avatar.jpeg"),
            },
          ])
        }
      />
    </>
  );
}

//const styles = StyleSheet.create({});

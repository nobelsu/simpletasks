import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";

export default function AddNote({ navigation }) {
  const [curtext, changeText] = useState();

  return (
    <View style={styles.container2}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 28,
          marginBottom: 20,
        }}
      >
        Add your todo
      </Text>
      <TextInput
        editable
        maxLength={50}
        onChangeText={(text) => {
          changeText(text);
        }}
        value={curtext}
        style={{
          borderWidth: "1px",
          textAlign: "left",
          width: "80%",
          padding: 10,
          marginBottom: 30,
        }}
        placeholder="Todo..."
      />
      <View style={{ flexDirection: "row", height: 40, marginBottom: 40 }}>
        <Pressable
          style={{
            flex: 0.2,
            marginRight: 10,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffb300",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Add</Text>
        </Pressable>
        <Pressable
          style={{
            flex: 0.2,
            marginLeft: 10,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ff2a00",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Cancel</Text>
        </Pressable>
      </View>
      <Text style={{ fontWeight: "200", marginBottom: 10 }}>
        This is what your note says:
      </Text>
      <Text style={{ fontWeight: "600" }}> {curtext} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3faa7",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

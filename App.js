import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";

const Stack = createNativeStackNavigator();
const db = SQLite.openDatabase("notes.db");

function Home({ navigation }) {
  const [notes, changeNotes] = useState([
    { title: "Work on project", id: "0", done: 0 },
    { title: "Work on project 2", id: "1", done: 0 },
  ]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={addNote} style={{ marginRight: 30 }}>
          <Feather name="edit" size={24} color="black" />
        </Pressable>
      ),
    });
  });

  function addNote() {
    console.log("here");
  }

  function renderItem({ item }) {
    return (
      <View
        style={{
          paddingVertical: 12,
          borderBottomColor: "grey",
          marginHorizontal: 15,
          borderBottomWidth: 1,
        }}
      >
        <Text>{item.title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Notes App",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "yellow",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3faa7",
  },
});

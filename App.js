import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import Home from "./components/Home";
import AddNote from "./components/AddNote";

const Stack = createNativeStackNavigator();
const db = SQLite.openDatabase("notes.db");

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
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
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Add Note" component={AddNote} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

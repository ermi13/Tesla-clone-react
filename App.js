import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarsList from "./components/CarsList";
import Header from "./components/Header";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <Header />
      <CarsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

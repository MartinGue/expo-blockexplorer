import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./app/components/Screen";
import BlockExplorer from "./app/screens/BlockExplorer";
import * as Crypto from "expo-crypto";

export default function App() {
  return (
    <Screen>
      <BlockExplorer />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

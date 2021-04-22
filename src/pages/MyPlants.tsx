import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";
import { Header } from "../components/Header";
import colors from "../styles/colors";

export function MyPlants() {
  return (
    <View style={s.container}>
      <Header />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
});

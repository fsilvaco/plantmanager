import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { UserIdentification } from "./src/pages/UserIdentification";

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

export default function App() {
  const [isFontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!isFontsLoaded) return <AppLoading />;

  return <UserIdentification />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: "smile" | "hug";
  nextScreen: string;
}

const emoji = {
  smile: "😁",
  hug: "🤗",
};

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = routes.params as Params;

  function goToPlantSelect() {
    navigation.navigate(nextScreen);
  }

  return (
    <SafeAreaView style={s.container}>
      <View style={s.wrapper}>
        <Text style={s.emoji}>{emoji[icon]}</Text>
        <Text style={s.title}>{title}</Text>
        <Text style={s.subtitle}>{subtitle}</Text>
        <View style={s.footer}>
          <Button title={buttonTitle} onPress={goToPlantSelect} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 30,
  },

  title: {
    fontSize: 22,
    lineHeight: 32,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.text,
    paddingVertical: 10,
  },
  emoji: {
    fontSize: 96,
  },
  footer: {
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 50,
  },
});

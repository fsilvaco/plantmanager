import { RouteProp } from "@react-navigation/core";
import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface ConfirmationProps {
  route: RouteProp<{ params: { name: string } }, "params">;
}

export function Confirmation({ route }: ConfirmationProps) {
  return (
    <SafeAreaView style={s.container}>
      <View style={s.wrapper}>
        <Text style={s.emoji}>😃</Text>
        <Text style={s.title}>Prontinho, {route.params.name}</Text>
        <Text style={s.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
        <View style={s.footer}>
          <Button title="Continuar" />
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

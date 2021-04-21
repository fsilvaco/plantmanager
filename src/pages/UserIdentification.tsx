import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function UserIdentification() {
  return (
    <SafeAreaView style={s.container}>
      <KeyboardAvoidingView
        style={s.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={s.wrapper}>
          <View style={s.form}>
            <View style={s.header}>
              <Text style={s.emoji}>😄</Text>
              <Text style={s.title}>Como podemos {"\n"} chamar você?</Text>
            </View>
            <TextInput style={s.input} placeholder="Digite um nome" />
            <View style={s.footer}>
              <Button title="Continuar" />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    color: colors.heading,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },
  emoji: {
    fontSize: 44,
  },
  footer: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 20,
  },
});

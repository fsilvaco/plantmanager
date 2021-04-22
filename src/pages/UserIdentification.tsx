import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { useNavigation } from "@react-navigation/core";

export function UserIdentification() {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isFilled, setIsFilled] = React.useState(false);
  const [name, setName] = React.useState<String>();

  const navigation = useNavigation();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFocused(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  function handleSubmit() {

    if(!name)
      return Alert.alert("Me diz como posso chamar você 🥲")

    navigation.navigate("Confirmation", { name: name });
  }

  return (
    <SafeAreaView style={s.container}>
      <KeyboardAvoidingView
        style={s.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={s.wrapper}>
          <View style={s.form}>
            <View style={s.header}>
              <Text style={s.emoji}>{isFilled ? "😄" : "😃"}</Text>
              <Text style={s.title}>Como podemos {"\n"} chamar você?</Text>
            </View>
            <TextInput
              style={[
                s.input,
                (isFocused || isFilled) && { borderBottomColor: colors.green },
              ]}
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />
            <View style={s.footer}>
              <Button onPress={handleSubmit} title="Continuar" />
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

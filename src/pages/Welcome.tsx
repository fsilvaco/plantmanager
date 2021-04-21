import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  View,
  StyleSheet,
} from "react-native";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("UserIdentification");
  }

  return (
    <SafeAreaView style={s.container}>
      <View style={s.wrapper}>
        <Text style={s.title}>
          Gerencie {"\n"}
          suas plantas de {"\n"}
          forma fácil
        </Text>
        <Image style={s.image} source={wateringImg} resizeMode="contain" />
        <Text style={s.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>
        <TouchableOpacity
          onPress={handleStart}
          activeOpacity={0.7}
          style={s.button}
        >
          <Feather name="chevron-right" style={s.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  title: {
    fontFamily: fonts.heading,
    lineHeight: 30,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
  },

  subtitle: {
    fontFamily: fonts.text,
    fontSize: 18,
    textAlign: "center",
    color: colors.heading,
    paddingHorizontal: 20,
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginTop: 10,
    height: 56,
    width: 56,
  },

  buttonIcon: {
    fontSize: 24,
    color: colors.white,
  },

  image: {
    height: Dimensions.get("window").width * 0.7,
  },
});

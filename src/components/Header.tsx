import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import userImg from "../assets/flavio.jpeg";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header() {

  const [userName, setUserName] = React.useState<string>()

  async function loadAsyncStorageUserName() {
    const user = await AsyncStorage.getItem("@plantmanager:user")
    setUserName(user || '')
  }

  useEffect(()=>{
    loadAsyncStorageUserName()

  }, [userName])

  return (
    <View style={s.container}>
      <View>
        <Text style={s.greeting}>Olá,</Text>
        <Text style={s.userName}>{userName}</Text>
      </View>
      <Image source={userImg} style={s.image} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});

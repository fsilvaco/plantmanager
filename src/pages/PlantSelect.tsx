import React from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet } from "react-native";
import { Header } from "../components/Header";
import { Tab } from "../components/Tab";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function PlantSelect() {
  return (
    <SafeAreaView style={s.container}>
      <View style={s.wrapper}>
        <Header />
        <Text style={s.title}>Em qual ambiente</Text>
        <Text style={s.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={() => <Tab title="Sala" />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={s.tabList}
        />
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  wrapper: {
    padding: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 20,
  },
  tabList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
  },
});

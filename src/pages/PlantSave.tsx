import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { SvgFromUri } from "react-native-svg";
import { useRoute } from "@react-navigation/core";

import waterdrop from "../assets/waterdrop.png";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface Params {
  plant: {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
      times: string;
      repeat_every: string;
    };
  };
}

export function PlantSave() {
  const route = useRoute();
  const { plant } = route.params as Params;

  return (
    <View style={s.container}>
      <View style={s.PlantInfos}>
        <SvgFromUri uri={plant.photo} height={150} width={150} />
        <Text style={s.plantName}>{plant.name}</Text>
        <Text style={s.plantAbout}>{plant.about}</Text>
      </View>
      <View style={s.controllers}>
        <View style={s.tipContainer}>
          <Image source={waterdrop} style={s.tipImg} />
          <Text style={s.tipText}>{plant.water_tips}</Text>
        </View>
        <Text style={s.alertLabel}>
          Escolha o melhor horário para ser lembrado:
        </Text>

        <Button title="Cadastrar" onPress={() => {}} />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.shape,
  },
  PlantInfos: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.shape,
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 15,
  },
  plantAbout: {
    textAlign: "center",
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    marginTop: 10,
  },
  controllers: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: getBottomSpace() || 20,
  },
  tipContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
    position: "relative",
    bottom: 60,
  },
  tipImg: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
    textAlign: "justify",
  },
  alertLabel: {
    textAlign: "center",
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5,
  },
});

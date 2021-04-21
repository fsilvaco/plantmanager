import React from "react";
import { Text, StyleSheet } from "react-native";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface TabProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function Tab({ title, active = false, ...rest }: TabProps) {
  return (
    <RectButton style={[s.button, active && s.buttonActive]} {...rest}>
      <Text style={[s.text, active && s.textActive]}>{title}</Text>
    </RectButton>
  );
}

const s = StyleSheet.create({
  button: {
    backgroundColor: colors.shape,
    height: 40,
    width: 76,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginRight: 5,
  },
  buttonActive: {
    backgroundColor: colors.green_light,
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});

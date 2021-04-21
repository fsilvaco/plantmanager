import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={s.button} {...rest}>
      <Text style={s.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: 56,
  },

  buttonText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading,
  },
});

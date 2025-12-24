import React from "react";
import { Text, StyleSheet } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";

const GradientText = ({ text, style ,size }:any) => {
  return (
    <MaskedView
      maskElement={
        <Text style={[style, styles.text]}>
          {text}
        </Text>
      }
    >
      <LinearGradient
        colors={["#ff7a18", "#ff3d00"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[style, styles.hidden, {fontSize:size}] }>
          {text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;

const styles = StyleSheet.create({
  text: {
    backgroundColor: "transparent",
  },
  hidden: {
    opacity: 0,
  },
});

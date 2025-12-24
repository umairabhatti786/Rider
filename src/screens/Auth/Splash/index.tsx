import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { images } from "../../../assets/images";
import { CommonActions } from "@react-navigation/native";

function SplashScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
          CommonActions.reset({
              index: 0,
              routes: [{ name: "LoginScreen" }],
          })
      );
    }, 3000);
  }, []);

  return (
    <>
      <StatusBar
      hidden={true}
      />

      <View style={{ flex: 1 }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={images.splash} />

        <View
          style={{
            width: "100%",
            height: sizeHelper.calHp(150),
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: "45%",
          }}
        >

          <Image
          source={images.logo} />
        </View>
      </View>
    </>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({});

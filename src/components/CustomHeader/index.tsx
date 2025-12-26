import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import sizeHelper from "../../utils/Helpers";
import { theme } from "../../utils/Themes";
import CustomText from "../Text";
import CrossBtn from "../../assets/svgs/cross.svg";
import BackScreen from "../../assets/svgs/backScreen.svg";

import { appStyles } from "../../utils/GlobalStyles";
import { fonts } from "../../utils/Themes/fonts";
import { useNavigation } from "@react-navigation/native";
const CustomHeader = ({ title, onClose }: any) => {
  const navigation=useNavigation()
  return (
    <View style={{ ...appStyles.rowjustify }}>
      <View style={{ width: 40 }} />
      <CustomText
        text={title}
        size={30}
        fontWeight="700"
        fontFam={fonts.IBMPlexSansArabic_Bold}
      />
      <TouchableOpacity style={styles.box} onPress={()=>navigation.goBack()}>
        <BackScreen width={sizeHelper.calWp(27)} height={sizeHelper.calWp(27)} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  box: {
    backgroundColor: theme.colors.white,
    width: sizeHelper.calWp(73),
    height: sizeHelper.calWp(73),
    borderRadius: sizeHelper.calWp(73),
    shadowColor: theme.colors.black,
    shadowRadius: 3,
    elevation: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

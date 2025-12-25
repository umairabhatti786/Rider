import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Animated } from "react-native";
import sizeHelper from "../../utils/Helpers";
import { theme } from "../../utils/Themes";
import HeadphoneIcon from '../../assets/svgs/headphone.svg';
import CustomText from '../Text';
import SimpleToggleButton from "../SimpleToggleButton";
import DrawerIcon from '../../assets/svgs/drawer.svg';
import { fonts } from "../../utils/Themes/fonts";

const CustomMenu = ({isOffline,setIsOffline}:any) => {


  return (

    <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={styles.box}
        >
          <HeadphoneIcon />
        </View>
        <View style={styles.offline_container}>
          <SimpleToggleButton isOn={isOffline} setIsOn={setIsOffline} />
          <CustomText
            text={!isOffline ?'غير متصل':"متصل"}
            fontWeight="600"
            style={{width:"50%",textAlign:"center"}}
            fontFam={fonts.IBMPlexSansArabic_Medium}
            color={theme.colors.cool_gray}
            size={23}
          />
        </View>
        <View style={styles.box}>
          <DrawerIcon />
        </View>
      </View>
   
  );
};

export default CustomMenu;

const styles = StyleSheet.create({
 box: {
    backgroundColor: theme.colors.white,
    padding: sizeHelper.calWp(17),
    borderRadius: sizeHelper.calWp(999),
    shadowColor: theme.colors.black,
    shadowRadius: 2,
    elevation: 2,
  },
  offline_container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    paddingHorizontal: sizeHelper.calWp(15),
                width:sizeHelper.calWp(270),

    paddingVertical: sizeHelper.calHp(8),
    borderRadius: sizeHelper.calWp(999),
    shadowColor: theme.colors.black,
    shadowRadius: 3,
    elevation: 3,
    gap: sizeHelper.calWp(20),
    alignSelf: 'center',
  },
});

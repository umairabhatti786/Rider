import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Animated } from "react-native";
import sizeHelper from "../../utils/Helpers";
import { theme } from "../../utils/Themes";

const SimpleToggleButton = ({isOn,setIsOn}:any) => {
  const translateX = useState(new Animated.Value(0))[0];

  const toggle = () => {
    setIsOn(!isOn);

    Animated.timing(translateX, {
      toValue: isOn ? 0 : 26,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={toggle}
      activeOpacity={0.8}
      style={[
        styles.container,
        { backgroundColor: isOn ? "#FF4500" : "#ACB3BE" },
      ]}
    >
      <Animated.View
        style={[
          styles.circle,
          { transform: [{ translateX }] },
        ]}
      />
    </TouchableOpacity>
  );
};

export default SimpleToggleButton;

const styles = StyleSheet.create({
  container: {
    width:sizeHelper.calWp(100),
    borderRadius: 999,
    padding:sizeHelper.calWp(5),
    justifyContent: "center",
  },
  circle: {
    width:sizeHelper.calWp(43),
    height: sizeHelper.calWp(43),
    borderRadius: sizeHelper.calWp(43),
    backgroundColor:theme.colors.white,
  },
});

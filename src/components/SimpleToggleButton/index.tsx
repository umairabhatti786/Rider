import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Animated } from "react-native";
import sizeHelper from "../../utils/Helpers";

const SimpleToggleButton = () => {
  const [isOn, setIsOn] = useState(false);
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
        { backgroundColor: !isOn ? "#FF4500" : "#ACB3BE" },
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
    width:sizeHelper.calWp(110),
    height: sizeHelper.calHp(54),
    borderRadius: sizeHelper.calWp( 40),
    padding:sizeHelper.calWp( 6),
    justifyContent: "center",
  },
  circle: {
    width:sizeHelper.calWp(48),
    height: sizeHelper.calHp(42),
    borderRadius: sizeHelper.calWp(26),
    backgroundColor: "#fff",
  },
});

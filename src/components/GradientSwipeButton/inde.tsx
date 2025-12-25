import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import CustomText from '../Text';
import { theme } from "../../utils/Themes";
import { fonts } from "../../utils/Themes/fonts";
import sizeHelper from "../../utils/Helpers";
import BackArrow from '../../assets/svgs/backArrow.svg';

const { width } = Dimensions.get("window");
const BUTTON_WIDTH = width - 40;
const BUTTON_HEIGHT = 64;
const SWIPE_WIDTH = BUTTON_WIDTH - BUTTON_HEIGHT;

const GradientSwipeButton=({onSwipe}:any)=> {
  // ✅ Start from RIGHT
  const translateX = useSharedValue(SWIPE_WIDTH);

  // 🔥 FUNCTION TO RUN AFTER COMPLETE SWIPE
  const onComplete = () => {
    onSwipe?.()
    console.log("✅ Swipe completed – Order Accepted");
    // 👉 call API
    // 👉 navigation.navigate(...)
    // 👉 setState / dispatch redux
  };

  const gestureHandler = (event: any) => {
    translateX.value = Math.min(
      SWIPE_WIDTH,
      Math.max(0, SWIPE_WIDTH + event.nativeEvent.translationX)
    );
  };

  const endHandler = () => {
    // ✅ swipe completed
    if (translateX.value < SWIPE_WIDTH * 0.3) {
      translateX.value = withSpring(0, {}, () => {
        runOnJS(onComplete)();
      });
    } else {
      translateX.value = withSpring(SWIPE_WIDTH);
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#E91219", "#FA6E23"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >

                     {/* <CustomText
                text={"استلام الطلب"}
                color={theme.colors.white}
                size={26}
                fontWeight={"700"}
                fontFam={fonts.IBMPlexSansArabic_Bold}
              /> */}
        <Text style={styles.text}>استلام الطلب</Text>

        <PanGestureHandler
          onGestureEvent={gestureHandler}
          onEnded={endHandler}
        >
          <Animated.View style={[styles.thumb, animatedStyle]}>
            <BackArrow/>
            
          </Animated.View>
        </PanGestureHandler>
      </LinearGradient>
    </View>
  );
}

export default GradientSwipeButton
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
  },
  gradient: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    alignSelf: "center",
    color: theme.colors.white,
    fontSize: sizeHelper.calWp(35),
    fontWeight: "700",
    fontFamily:fonts.IBMPlexSansArabic_Bold
  },
  thumb: {
    width: BUTTON_HEIGHT - 10,
    height: BUTTON_HEIGHT - 10,
    borderRadius: (BUTTON_HEIGHT - 10) / 2,
    backgroundColor:"#EFC899",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 4,
    borderWidth:1,
    borderColor:"#F7F7F7"
  },
  arrow: {
    fontSize: 28,
    color: "#DC2626",
    fontWeight: "bold",
  },
});

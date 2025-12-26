import React, { useRef, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import CustomText from "../Text";
import { fonts } from "../../utils/Themes/fonts";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";

const { width } = Dimensions.get("window");

const AnimatedSwitchTabs = ({ setActiveTab, activeTab }: any) => {
  const CONTAINER_PADDING = 20;
  const TAB_WIDTH = (width - CONTAINER_PADDING * 2) / 2;

  const translateX = useRef(new Animated.Value(0)).current;

  // ✅ Set default position based on activeTab
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: activeTab * TAB_WIDTH,
      duration: 0,
      useNativeDriver: true,
    }).start();
  }, []);

  const onTabPress = (index: number) => {
    setActiveTab(index);

    Animated.spring(translateX, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true,
      speed: 18,
      bounciness: 6,
    }).start();
  };

  return (
    <View>
      {/* Switch Container */}
      <View
        style={{
          width: width - CONTAINER_PADDING * 2,
          height: sizeHelper.calHp(55),
          backgroundColor: "#78788020",
          borderRadius: sizeHelper.calWp(14),
          padding: 4,
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        {/* Animated Indicator */}
        <Animated.View
          style={{
            position: "absolute",
            width: TAB_WIDTH - sizeHelper.calWp(10),
            height: sizeHelper.calHp(48),
            backgroundColor: "#FFFFFF",
            borderRadius: sizeHelper.calWp(14),
            transform: [{ translateX }],
            top: sizeHelper.calHp(3.5),
            left: sizeHelper.calWp(5),
          }}
        />

        {/* Tab 1 */}
        <TouchableOpacity
          style={{
            width: TAB_WIDTH,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
          onPress={() => onTabPress(0)}
          activeOpacity={0.8}
        >
          <CustomText
            text={"تفاصيل الطلب"}
            size={20}
            fontFam={fonts.IBMPlexSansArabic_Medium}
            fontWeight={"600"}
            color={
              activeTab === 0
                ? theme.colors.jet_black
                : theme.colors.steel_gray
            }
          />
        </TouchableOpacity>

        {/* Tab 2 */}
        <TouchableOpacity
          style={{
            width: TAB_WIDTH,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
          onPress={() => onTabPress(1)}
          activeOpacity={0.8}
        >
          <CustomText
            text={"معلومات العميل"}
            size={20}
            fontFam={fonts.IBMPlexSansArabic_Medium}
            fontWeight={"600"}
            color={
              activeTab === 1
                ? theme.colors.jet_black
                : theme.colors.steel_gray
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AnimatedSwitchTabs;

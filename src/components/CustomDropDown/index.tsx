import {
  Image,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import CustomText from "../Text";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";
import { useState } from "react";
import { appStyles } from "../../utils/GlobalStyles";
import { icons } from "../../assets/icons";

const CustomDropDown = ({
  props,
  height,
  width,
  borderRadius,
  backgroundColor,
  onRightSource,
  borderColor,
  placeholder,
  value,
  setValue,
  data,
  iconSize,
  top,
  onActions,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View
      style={{
        ...props,
        width: width || "100%",
      }}
    >
    
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => setIsOpen(!isOpen)}
        style={{
          flexDirection: "row",
          justifyContent:"flex-end",
          paddingHorizontal: sizeHelper.calWp(25),
          height: sizeHelper.calHp(height || 85),
          alignItems: "center",
          gap: sizeHelper.calWp(10),
          borderWidth: 1,
          borderColor: borderColor ||theme.colors.border,
          backgroundColor:  theme.colors.input_background,
          borderRadius: borderRadius || sizeHelper.calWp(40),
        }}
      >
        {value?.name ? (
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
            <Image
              source={value?.icon}
              style={{
                width: sizeHelper.calWp(50),
                height: sizeHelper.calWp(50),
              }}
            />

            <CustomText
              text={value?.name}
              color={theme.colors.black}
              size={23}
            />
          </View>
        ) : (
          <CustomText text={placeholder} color={theme.colors.graphite_gray} size={21} />
        )}

        <TouchableOpacity
          onPress={onRightSource}
          disabled={!onRightSource}
          activeOpacity={0.3}
        >
          <Image
            source={icons.down}
            style={{
              width: sizeHelper.calWp(25),
              height: sizeHelper.calWp(25),
            }}
            resizeMode={"contain"}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      {isOpen && (
        <View
          style={{
            width: "100%",
            borderWidth: 1,
            borderRadius: sizeHelper.calWp(20),
            borderColor: theme.colors.border,
            maxHeight: sizeHelper.calWp(400),
            backgroundColor: theme.colors.input_background,
            position: "absolute",
            zIndex: 999,
            top: sizeHelper.calHp(top || 90),
          }}
        >
          <ScrollView>
            <View>
              {data?.map((item: any, index: any) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      onActions?.();
                      setIsOpen(false);
                      setValue(item);
                    }}
                    style={{
                      gap: sizeHelper.calHp(20),
                      borderBottomWidth: index === data.length - 1 ? 0 : 1,
                      borderBottomColor: theme.colors.border,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        onActions?.();
                        setIsOpen(false);
                        setValue(item);
                      }}
                      style={{
                        ...appStyles.row,
                        gap: sizeHelper.calWp(20),
                        padding: sizeHelper.calWp(25),
                      }}
                    >
                      <Image
                        source={item?.icon}
                        style={{
                          width: sizeHelper.calWp(iconSize || 52),
                          height: sizeHelper.calWp(iconSize || 52),
                          borderRadius: sizeHelper.calWp(iconSize || 52),
                        }}
                        // resizeMode={"contain"}
                      />

                      <CustomText
                        text={item?.name}
                        color={theme.colors.black}
                        size={22}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};
export default CustomDropDown;

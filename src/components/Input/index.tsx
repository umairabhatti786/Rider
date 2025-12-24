import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import CustomText from "../Text";
import { InputProps } from "../../utils/Types";
import { fonts } from "../../utils/Themes/fonts";
import sizeHelper from "../../utils/Helpers";
import { theme } from "../../utils/Themes";

const CustomInput = ({
  placeholder,
  keyboard,
  secureTextEntry,
  fontWeight,
  multiline,
  fontSize,
  value,
  onChangeText,
  onBlur,
  error,
  editable,
  color,
  maxLength,
  placeholderTextColor,
  borderRadius,
  backgroundColor,
  textAlign,
  textAlignVertical,
  paddingTop,
  onSubmitEditing,
  label,
  borderColor,
  fontFamily,
  width,
  rightSource,
  height,
  onRightSource,
  leftSource,
  rightSourceSize,
  borderWidth,
  marginTop
}: InputProps) => {
  return (
    <View style={{ width: width || "100%" }}>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: sizeHelper.calWp(35),
          height: sizeHelper.calHp(height || 100),
          borderRadius: borderRadius,
          borderWidth: borderWidth,
          borderColor: borderColor,
          backgroundColor: backgroundColor || theme.colors.white,
          elevation: 2,
          marginTop:marginTop
        }}
      >
        {leftSource && (
          <Image
            source={leftSource}
            style={{
              width: sizeHelper.calWp(30),
              height: sizeHelper.calWp(30),
              marginRight: sizeHelper.calWp(15),
            }}
            resizeMode="contain"
          />
        )}

        <TextInput
          value={value}
          editable={editable}
          onSubmitEditing={onSubmitEditing}
          allowFontScaling={false}
          style={{
            flex: 1,
            fontSize: sizeHelper.calHp(fontSize || 26),
            height: "100%",
            fontFamily: fontFamily || fonts.IBMPlexSansArabic_Regular,
            fontWeight: fontWeight || "400",
            color: color || theme.colors.black,
            textAlign: textAlign,
            textAlignVertical: textAlignVertical,
            paddingTop: paddingTop || 0,
            paddingVertical: 0,
          }}
          placeholder={placeholder}
          multiline={multiline}
          placeholderTextColor={
            placeholderTextColor || theme.colors.black
          }
          keyboardType={keyboard}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry || false}
          onChangeText={onChangeText}
          onBlur={onBlur}
          autoCapitalize="none"
        />

        {rightSource && (
          <TouchableOpacity
            onPress={onRightSource}
            disabled={!onRightSource}
            activeOpacity={0.6}
            style={{
              marginLeft: sizeHelper.calWp(15),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={rightSource}
              style={{
                width: sizeHelper.calWp(rightSourceSize || 40),
                height: sizeHelper.calWp(rightSourceSize || 40),
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;

import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { useState } from "react";
import CustomText from "../Text";
import { PhoneInputProps } from "../../utils/Types";
import sizeHelper from "../../utils/Helpers";
import { theme } from "../../utils/Themes";
import { fonts } from "../../utils/Themes/fonts";
import { icons } from "../../assets/icons";

const PhoneNumberInput = ({
  placeholder,
  props,
  fontWeight,
  height,
  value,
  onChangeText,
  editable,
  color,
  width,
  borderRadius,
  backgroundColor,
  borderColor,
  textAlign,
  label,
  labelSize,
  labelColor,
}: PhoneInputProps) => {
  const [countryCode, setCountryCode] = useState("MA"); // Morocco by default
  const [callingCode, setCallingCode] = useState("+33");

  const onSelect = (country: any) => {
    setCountryCode(country.cca2);
    setCallingCode("+" + country.callingCode[0]);
  };

  const handlePhoneChange = (text: string) => {
    if (onChangeText) {
      // Combine calling code and phone number
      const fullNumber = `${callingCode}${text}`;
      onChangeText(fullNumber);
    }
  };

  return (
    <View style={{ ...props, width: width || "100%" }}>
      <View
        style={{
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          paddingLeft: sizeHelper.calWp(25),
          paddingRight: sizeHelper.calWp(20),
          height: sizeHelper.calHp(height || 85),
          alignItems: "center",
          borderColor: borderColor || theme.colors.border,
          borderWidth: 1,
          borderRadius: borderRadius || sizeHelper.calWp(40),
          backgroundColor: backgroundColor || theme.colors.input_background,
        }}
      >
        <CustomText
          text={callingCode}
          style={{
            textAlign: "right",
            marginTop: sizeHelper.calHp(5),
            marginRight: 0,
          }}
          color={theme.colors.graphite_gray}
          size={21}
        />

        {/* Flag Picker */}
        <CountryPicker
          countryCode={countryCode}
             withFlag
    withFilter={false}
    withEmoji={false}// ✅ shows real flag, not emoji
          onSelect={onSelect}
          containerButtonStyle={styles.countryPicker}
        />
        <Image style={{ width:sizeHelper.calWp(20),height:sizeHelper.calWp(20),marginTop:sizeHelper.calHp(10),marginRight:sizeHelper.calWp(5) }}
        source={icons.down}
        resizeMode="contain"
         />

        {/* Phone Number Input */}
        <TextInput
          style={{
            flex: 1,
            textAlign: "right",
            fontSize: sizeHelper.calHp(24),
            paddingHorizontal: sizeHelper.calWp(20),
            marginTop: sizeHelper.calHp(5),
            fontFamily: fonts.IBMPlexSansArabic_Regular,
            fontWeight: fontWeight || "500",
            color: color || theme.colors.black,
          }}
          placeholder={placeholder || "0000000000"}
          placeholderTextColor={theme.colors.graphite_gray}
          keyboardType="phone-pad"
          value={value ? value.replace(callingCode, "") : ""}
          onChangeText={handlePhoneChange}
          editable={editable !== false}
        />
      </View>
    </View>
  );
};
export default PhoneNumberInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  divider: {
    height: "40%",
    width: 1,
    backgroundColor: "#ccc",
  },
  countryPicker: {
    // marginRight: 5,
  },
  callingCodeContainer: {
    borderRightWidth: 1,
    borderRightColor: "#ddd",
    marginRight: 8,
    paddingRight: 8,
  },
  callingCode: {
    fontSize: 16,
    color: "#1a1445", // dark text like your screenshot
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: "#1a1445",
  },
});

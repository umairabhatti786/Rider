import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "../../../components/Text";
import { images } from "../../../assets/images";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import CustomInput from "../../../components/Input";
import { icons } from "../../../assets/icons";
import CustomButton from "../../../components/Button";
import SimpleToggleButton from "../../../components/SimpleToggleButton";
import AddPhoto from "../../../assets/svgs/addPhoto.svg";
import HeadphoneIcon from "../../../assets/svgs/headphone.svg";
import { fonts } from "../../../utils/Themes/fonts";
import OfflineStatusImg from "../../../assets/svgs/offlineStatus.svg";
import CustomMenu from "../../../components/CustomMenu";
import CustomHeader from "../../../components/CustomHeader";
import GradientButton from "../../../components/GradientButton";
import { appStyles } from "../../../utils/GlobalStyles";
import GradientText from "../../../GradientText";
import CustomDropDown from "../../../components/CustomDropDown";
import PhoneNumberInput from "../../../components/PhoneNumberInput/indexx";

const CaptainSettings = ({ navigation }: any) => {
  const [isOffline, setIsOffline] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [isNewPassword, setIsNewPassword] = useState(false);
  const [isCurrentPassword, setIsCurrentPassword] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState<any>({});

  const countryData = [
    {
      icon: images.nigeria,
      name: "نيجيريا",
      id: 1,
      code: "NGN",
      currency: "Nigerian Naira",
      symbol: "₦",
    },
    {
      icon: images.pakistan,
      name: "باكستان",
      id: 2,
      code: "PKR",
      currency: "Pakistani Rupee",
      symbol: "₨",
    },
    {
      icon: images.india,
      name: "الهند",
      id: 4,
      code: "INR",
      currency: "Indian Rupee",
      symbol: "₹",
    },
  ];

  return (
    <ScreenLayout>
      <CustomHeader title={"أعدادات الكابتن"} />

      <View style={{ alignSelf: "center" }}>
        <Image
          style={{
            width: sizeHelper.calWp(180),
            height: sizeHelper.calWp(180),
            borderRadius: sizeHelper.calWp(180),
          }}
          source={images.user}
        />

        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: sizeHelper.calHp(-5),
            right: sizeHelper.calWp(-20),
          }}
        >
          <AddPhoto
            width={sizeHelper.calWp(65)}
            height={sizeHelper.calWp(65)}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{ gap: sizeHelper.calHp(20), paddingTop: sizeHelper.calHp(20) }}
      >
        <CustomInput
          placeholder="الاسم الكامل"
          textAlign={"right"}
          height={85}
          isDisableShadow={-1}
          borderRadius={40}
          backgroundColor={theme.colors.input_background}
          borderColor={theme.colors.border}
          placeholderTextColor={theme.colors.graphite_gray}
          rightSource={icons.user}
          rightSourceSize={40}
        />

        <CustomInput
          placeholder="البريد الالكتروني"
          textAlign={"right"}
          height={85}
          borderRadius={40}
          isDisableShadow={-1}
          backgroundColor={theme.colors.input_background}
          borderColor={theme.colors.border}
          placeholderTextColor={theme.colors.graphite_gray}
          rightSource={icons.email}
          rightSourceSize={40}
        />

        <PhoneNumberInput placeholder="رقم الهاتف" />

        <CustomInput
          placeholder="كلمة السر الحالية"
          textAlign={"right"}
          backgroundColor={theme.colors.input_background}
          rightSourceSize={42}
          borderRadius={40}
          rightSource={icons.lock_light}
          isDisableShadow={-1}
          height={85}
          borderColor={theme.colors.border}
          secureTextEntry={isCurrentPassword}
          onLeftSource={() => setIsCurrentPassword(!isCurrentPassword)}
          leftSource={!isCurrentPassword ? icons.eye_off : icons.eye}
        />

        <CustomInput
          placeholder="كلمة السر الجديدة"
          textAlign={"right"}
          backgroundColor={theme.colors.input_background}
          rightSourceSize={42}
          borderRadius={40}
          rightSource={icons.lock_light}
          isDisableShadow={-1}
          height={85}
          borderColor={theme.colors.border}
          secureTextEntry={isNewPassword}
          onLeftSource={() => setIsNewPassword(!isNewPassword)}
          leftSource={!isNewPassword ? icons.eye_off : icons.eye}
        />

        <CustomInput
          placeholder="تاكيد كلمة السر الجديدة"
          textAlign={"right"}
          backgroundColor={theme.colors.input_background}
          rightSourceSize={42}
          borderRadius={40}
          rightSource={icons.lock_light}
          isDisableShadow={-1}
          height={85}
          borderColor={theme.colors.border}
          secureTextEntry={isConfirmPassword}
          onLeftSource={() => setIsConfirmPassword(!isConfirmPassword)}
          leftSource={!isConfirmPassword ? icons.eye_off : icons.eye}
        />
      </View>

      <View
        style={{
          ...appStyles.rowjustify,
          marginTop: sizeHelper.calHp(20),
          width: "100%",
        }}
      >
        <GradientButton
          text="حفظ"
          borderRadius={35}
          width={"102%"}
          height={80}
          onPress={() => navigation.navigate("OfflinePage")}
        />

        <CustomButton
          bgColor={"transparent"}
          borderColor={theme.colors.primary}
          borderWidth={1}
          width={"40%"}
          borderRadius={30}
          onPress={() => navigation.navigate("OfflinePage")}
        >
          <GradientText
            style={{
              textAlign: "center",
            }}
          >
            <CustomText
              text={"اللغاء"}
              size={26}
              fontFam={fonts.IBMPlexSansArabic_Bold}
              fontWeight="700"
            />
          </GradientText>
        </CustomButton>
      </View>
    </ScreenLayout>
  );
};

export default CaptainSettings;
const styles = StyleSheet.create({

});

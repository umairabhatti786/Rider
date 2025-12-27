import React, { useMemo, useRef, useState } from "react";
import { View } from "react-native";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import { fonts } from "../../../utils/Themes/fonts";
import Congratulations from "../../../assets/svgs/congratulations.svg";
import GradientButton from "../../../components/GradientButton";

const OrderDelivered = ({ navigation }: any) => {
  return (
    <ScreenLayout
      backgroundColor={theme.colors.background}
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        gap: sizeHelper.calHp(10),
        paddingBottom: sizeHelper.calHp(30),
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Congratulations
          width={sizeHelper.calWp(200)}
          height={sizeHelper.calWp(200)}
        />
        <View style={{ marginTop: sizeHelper.calHp(50) }}>
          <CustomText
            text={"رائع, تم استلام الطلب الى العميل"}
            size={30}
            fontWeight={"600"}
            fontFam={fonts.IBMPlexSansArabic_Medium}
            style={{
              alignSelf: "center",
            }}
          />

          <CustomText
            text={"احسنت, قم بالمزيد من الطلبات يا بطل."}
            fontWeight={"700"}
            color={theme.colors.graphite_gray}
            fontFam={fonts.IBMPlexSansArabic_Bold}
            style={{
              alignSelf: "center",
            }}
          />
        </View>
      </View>
      <GradientButton
        style={{ marginTop: sizeHelper.calHp(50) }}
        text="التالي"
        height={80}
        width={"100%"}
        onPress={() => navigation.goBack()}
      />
    </ScreenLayout>
  );
};

export default OrderDelivered;

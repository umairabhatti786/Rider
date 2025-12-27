import React, { useState } from "react";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import CustomHeader from "../../../components/CustomHeader";
import { appStyles } from "../../../utils/GlobalStyles";
import { fonts } from "../../../utils/Themes/fonts";
import LinearGradient from "react-native-linear-gradient";
import { icons } from "../../../assets/icons";
import { EarningData } from "../../../utils/Data";
const WalletScreen = ({ navigation }: any) => {
  const [year, setYear] = useState(new Date().getFullYear());


  const EarningItem = ({ item, index }: any) => {
    return (
      <View style={{ gap: sizeHelper.calHp(10) }}>
        <View
          style={{
            padding: sizeHelper.calWp(20),
          }}
        >
          <View style={appStyles.rowjustify}>
            <CustomText
              text={`${item?.price}`}
              size={25}
              fontFam={fonts.IBMPlexSansArabic_Bold}
              fontWeight="700"
              color={theme.colors.jet_black}
            />

            <View>
              <CustomText
                text={`طلب ${item?.date} `}
                size={25}
                style={{ textAlign: "right" }}
                fontFam={fonts.IBMPlexSansArabic_Bold}
                fontWeight="700"
              />

              <View
                style={{
                  ...appStyles.row,
                  gap: sizeHelper.calWp(10),
                  alignSelf: "flex-end",
                }}
              >
                <CustomText
                  text={`عدد الطلبيات: ${item?.orders} `}
                  style={{ textAlign: "right" }}
                  color={theme.colors.jet_black}
                />

                <CustomText
                  text={`إجمالي المسافة: ${item?.total_distance},`}
                  style={{ textAlign: "right" }}
                  color={theme.colors.jet_black}
                />
              </View>
            </View>
          </View>
        </View>
        {EarningData.length - 1 != index && (
          <View
            style={{
              width: "95%",
              height: 1,
              backgroundColor: theme.colors.border,
              alignSelf: "center",
            }}
          />
        )}
      </View>
    );
  };

  const handlePrev = () => {
    const newYear = year - 1;
    setYear(newYear);
  };

  const handleNext = () => {
    const newYear = year + 1;
    setYear(newYear);
  };

  return (
    <ScreenLayout>
      <CustomHeader title={"المحفظة"} />

      <LinearGradient
        colors={["#FA6E23", "#E91219"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderRadius: sizeHelper.calWp(35),
        }}
      >
        <View
          style={{
            paddingHorizontal: sizeHelper.calWp(25),
            paddingTop: sizeHelper.calHp(25),
            paddingBottom: sizeHelper.calHp(50),
            alignItems: "flex-end",
          }}
        >
          <CustomText text={"رصيدي"} size={25} color={theme.colors.white} />

          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
            <Image
              style={{
                width: sizeHelper.calWp(20),
                height: sizeHelper.calWp(20),
                tintColor: theme.colors.white,
                resizeMode: "contain",
              }}
              source={icons.arrow_left}
            />

            <CustomText
              text={"₪1784.85"}
              size={50}
              color={theme.colors.white}
              fontWeight="700"
              fontFam={fonts.IBMPlexSansArabic_Bold}
            />
          </View>
        </View>
      </LinearGradient>
      <View>
        <View
          style={{
            ...appStyles.row,
            gap: sizeHelper.calWp(30),
            alignSelf: "center",
            paddingBottom: sizeHelper.calHp(5),
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handlePrev}
            style={{ padding: sizeHelper.calWp(20) }}
          >
            <Image style={styles.arrows} source={icons.arrow_left} />
          </TouchableOpacity>

          <CustomText
            text={year}
            fontWeight="600"
            size={20}
            fontFam={fonts.IBMPlexSansArabic_Medium}
            color={theme.colors.cool_gray}
          />

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleNext}
            style={{ padding: sizeHelper.calWp(20) }}
          >
            <Image style={styles.arrows} source={icons.arrow_right} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            padding: sizeHelper.calWp(30),
            backgroundColor: "#F9FAFB",
            borderRadius: sizeHelper.calWp(30),
          }}
        >
          <View style={appStyles.rowjustify}>
            <View
              style={{
                alignItems: "center",
                gap: sizeHelper.calHp(2),
              }}
            >
              <CustomText
                text={"اجمالي الارباح حتى الان"}
                fontWeight="600"
                size={18}
                fontFam={fonts.IBMPlexSansArabic_Medium}
                color={theme.colors.graphite_gray}
              />
              <CustomText
                text={"₪1784.85"}
                fontFam={fonts.IBMPlexSansArabic_Bold}
                fontWeight="700"
              />
            </View>

            <View
              style={{
                alignItems: "center",
                gap: sizeHelper.calHp(2),
              }}
            >
              <CustomText
                text={"ربح هذا الشهر"}
                fontWeight="600"
                size={18}
                style={{ textAlign: "center", width: sizeHelper.calWp(150) }}
                fontFam={fonts.IBMPlexSansArabic_Medium}
                color={theme.colors.graphite_gray}
              />
              <CustomText
                text={"₪1784.85"}
                fontFam={fonts.IBMPlexSansArabic_Bold}
                fontWeight="700"
              />
            </View>

            <View
              style={{
                alignItems: "center",
                gap: sizeHelper.calHp(2),
              }}
            >
              <CustomText
                text={"ربح الاسبوع السابق"}
                fontWeight="600"
                size={18}
                fontFam={fonts.IBMPlexSansArabic_Medium}
                color={theme.colors.graphite_gray}
              />
              <CustomText
                text={"₪0"}
                fontFam={fonts.IBMPlexSansArabic_Bold}
                fontWeight="700"
              />
            </View>
          </View>
        </View>
      </View>

      <View style={{ paddingTop: sizeHelper.calHp(20) }}>
        <CustomText
          text={"جميع الارباح (خلال هذا الاسبوع فقط)"}
          style={{ alignSelf: "flex-end", marginBottom: sizeHelper.calHp(15) }}
          color={theme.colors.graphite_gray}
        />

        <FlatList
          data={EarningData}
          scrollEnabled={true}
          style={{
            padding: sizeHelper.calWp(20),
            backgroundColor: theme.colors.white,
            borderRadius: sizeHelper.calWp(20),
          }}
          contentContainerStyle={{
            gap: sizeHelper.calWp(20),
            paddingBottom: sizeHelper.calHp(20),
          }}
          renderItem={EarningItem}
        />
      </View>
    </ScreenLayout>
  );
};

export default WalletScreen;
const styles = StyleSheet.create({
  arrows: {
    width: sizeHelper.calWp(23),
    height: sizeHelper.calWp(23),
    resizeMode: "contain",
  },
});

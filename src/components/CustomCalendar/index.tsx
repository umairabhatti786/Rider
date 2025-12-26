import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  I18nManager,
  Image,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import sizeHelper from "../../utils/Helpers";
import CustomText from "../Text";
import { appStyles } from "../../utils/GlobalStyles";
import { icons } from "../../assets/icons";
import { fonts } from "../../utils/Themes/fonts";
import { theme } from "../../utils/Themes";

// I18nManager.forceRTL(true);

const daysArabic = [
  "الأحد",
  "الاثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];

const monthsArabic = [
  "يناير",
  "فبراير",
  "مارس",
  "أبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];

const CustomCalendar = () => {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(today.getDate());

  /** Generate days for current month */
  const monthDays = useMemo(() => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    return Array.from({ length: daysInMonth }, (_, i) => {
      const date = new Date(currentYear, currentMonth, i + 1);
      return {
        date: i + 1,
        dayName: daysArabic[date.getDay()],
      };
    });
  }, [currentMonth, currentYear]);

  const goNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
    setSelectedDate(1);
  };

  const goPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
    setSelectedDate(1);
  };

  return (
    <View style={{ gap: sizeHelper.calHp(20) }}>
      {/* Header */}

      <View
        style={{
          ...appStyles.row,
          gap: sizeHelper.calWp(30),
          alignSelf: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={goPrevMonth}
          style={{ padding: sizeHelper.calWp(20) }}
        >
          <Image style={styles.arrows} source={icons.arrow_left} />
        </TouchableOpacity>

        <CustomText
          text={`${monthsArabic[currentMonth]} ${currentYear}`}
          fontWeight="600"
          size={20}
          fontFam={fonts.IBMPlexSansArabic_Medium}
          color={theme.colors.cool_gray}
        />

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={goNextMonth}
          style={{ padding: sizeHelper.calWp(20) }}
        >
          <Image style={styles.arrows} source={icons.arrow_right} />
        </TouchableOpacity>
      </View>

      {/* Horizontal Days */}
      <FlatList
        horizontal
        inverted
        showsHorizontalScrollIndicator={false}
        data={monthDays}
        keyExtractor={(item) => item.date.toString()}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => {
          const isSelected = item.date === selectedDate;

          return (
            <TouchableOpacity
              onPress={() => setSelectedDate(item.date)}
              style={{ marginHorizontal: 6 }}
            >
              {isSelected ? (
                <LinearGradient
                  colors={["#F97316", "#DC2626"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.calendarItem}
                >
                  <CustomText
                    text={item.dayName}
                    size={24}
                    color={theme.colors.white}
                  />

                  <CustomText
                    text={item.date}
                    size={26}
                    fontFam={fonts.IBMPlexSansArabic_Medium}
                    fontWeight={"600"}
                    color={theme.colors.white}
                  />
                </LinearGradient>
              ) : (
                <View
                  style={{
                    ...styles.calendarItem,
                    backgroundColor: theme.colors.white,
                  }}
                >
                  <CustomText
                    text={item.dayName}
                    size={24}
                    color={theme.colors.steel_gray}
                  />

                  <CustomText
                    text={item.date}
                    size={26}
                    fontFam={fonts.IBMPlexSansArabic_Medium}
                    fontWeight={"600"}
                    color={theme.colors.steel_gray}
                  />
                </View>
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CustomCalendar;
const styles = StyleSheet.create({
  arrows: {
    width: sizeHelper.calWp(23),
    height: sizeHelper.calWp(23),
    resizeMode: "contain",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: theme.colors.border,
    alignSelf: "center",
  },
  calendarItem: {
    width: sizeHelper.calWp(130),
    height: sizeHelper.calHp(130),
    borderRadius: sizeHelper.calWp(23),
    justifyContent: "center",
    alignItems: "center",
  },
});

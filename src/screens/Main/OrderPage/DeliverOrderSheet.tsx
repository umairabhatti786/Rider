import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import CustomText from "../../../components/Text";
import sizeHelper from "../../../utils/Helpers";
import { appStyles } from "../../../utils/GlobalStyles";

import CrossBtn from "../../../assets/svgs/cross.svg";
import GradientSwipeButton from "../../../components/GradientSwipeButton/inde";
import { fonts } from "../../../utils/Themes/fonts";
import { theme } from "../../../utils/Themes";
import GradientText from "../../../GradientText";
import InfoIcon from "../../../assets/svgs/info.svg";
import FillResLocation from "../../../assets/svgs/fillResLocation.svg";
import ReceiveOrder from "../../../assets/svgs/receiveOrder.svg";
import CustomerNote from "../../../assets/svgs/customerNote.svg";
import PaymentProcess from "../../../assets/svgs/paymentProcess.svg";

import CallIcon from "../../../assets/svgs/call.svg";
import MessageIcon from "../../../assets/svgs/message.svg";


import CustomButton from "../../../components/Button";
import AnimatedSwitchTabs from "../../../components/AnimatedSwitch";

const DeliverOrderSheet = ({ onComplete, onClose }: any) => {
  const [activeTab, setActiveTab] = useState(1); // 0 = Order, 1 = Client

  return (
    <View
      style={{
        backgroundColor: "#F7F7F7",
        paddingHorizontal: sizeHelper.calWp(40),
        borderRadius: sizeHelper.calWp(30),
        width: "100%",
      }}
    >
      <View style={appStyles.rowjustify}>
        <View style={{ width: 40 }} />
        <CustomText
          text={"تسليم الطلب الى"}
          fontFam={fonts.IBMPlexSansArabic_Bold}
          size={38}
          fontWeight="700"
        />
        <TouchableOpacity style={styles.box} onPress={onClose}>
          <CrossBtn
            width={sizeHelper.calWp(30)}
            height={sizeHelper.calWp(30)}
          />
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center" }}>
        <GradientText
          size={30}
          fontWeight="700"
          fontFamily={fonts.IBMPlexSansArabic_Bold}
        >
          <CustomText
            text={"أديب الجوابرة"}
            size={28}
            fontFam={fonts.IBMPlexSansArabic_Bold}
            fontWeight="700"
          />
        </GradientText>

        <CustomText
          text={"#12345"}
          size={24}
          fontWeight="600"
          color={theme.colors.steel_gray}
          fontFam={fonts.IBMPlexSansArabic_SemiBold}
        />
      </View>

      <View style={{ gap: sizeHelper.calHp(30) }}>
        <AnimatedSwitchTabs setActiveTab={setActiveTab} activeTab={activeTab} />
        <View style={{ gap: sizeHelper.calHp(10) }}>
          <CustomText
            text={activeTab == 0 ? "تفاصيل التوصيل" : "تفاصيل الطلب"}
            style={{ textAlign: "right" }}
            fontFam={fonts.IBMPlexSansArabic_Bold}
            size={28}
            fontWeight="700"
          />
          {activeTab == 0 && (
            <CustomButton
              size={30}
              borderRadius={30}
              textColor={theme.colors.white}
              bgColor={theme.colors.sky_blue}
              style={{
                alignSelf: "center",
              }}
            >
              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
                <FillResLocation
                  width={sizeHelper.calWp(45)}
                  height={sizeHelper.calWp(45)}
                />

                <CustomText
                  text={"موقع العميل"}
                  fontFam={fonts.IBMPlexSansArabic_SemiBold}
                  fontWeight="600"
                  // size={23}
                  color={theme.colors.white}
                />
              </View>
            </CustomButton>
          )}

          <CustomButton
            size={30}
            borderRadius={30}
            textColor={theme.colors.white}
            bgColor={theme.colors.sky_blue}
            style={{
              alignSelf: "center",
            }}
          >
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
              <FillResLocation
                width={sizeHelper.calWp(45)}
                height={sizeHelper.calWp(45)}
              />

              <CustomText
                text={"موقع المطعم"}
                fontFam={fonts.IBMPlexSansArabic_SemiBold}
                fontWeight="600"
                // size={23}
                color={theme.colors.white}
              />
            </View>
          </CustomButton>
        </View>
        {activeTab == 0 ? (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <CustomText
                text={"المسافة لنوصيل الطلب: "}
                fontFam={fonts.IBMPlexSansArabic_SemiBold}
                fontWeight="600"
                // size={23}
                color={theme.colors.steel_gray}
              />

              <GradientText
                size={30}
                fontWeight="700"
                fontFamily={fonts.IBMPlexSansArabic_Bold}
              >
                <CustomText
                  text={activeTab == 0 ? "2.8 كم" : "12.3 كم"}
                  size={30}
                  fontFam={fonts.IBMPlexSansArabic_Bold}
                  fontWeight="700"
                />
              </GradientText>
            </View>
            <View
              style={{
                gap: sizeHelper.calWp(15),
                flexDirection: "row-reverse",
                justifyContent: "flex-end",
              }}
            >
              {activeTab == 0 ? (
                <ReceiveOrder
                  width={sizeHelper.calWp(45)}
                  height={sizeHelper.calWp(45)}
                />
              ) : (
                <InfoIcon
                  width={sizeHelper.calWp(45)}
                  height={sizeHelper.calWp(45)}
                />
              )}

              <View style={{ alignItems: "flex-end" }}>
                <CustomText
                  text={"تسليم الطلب"}
                  fontFam={fonts.IBMPlexSansArabic_SemiBold}
                  fontWeight="600"
                  size={23}
                  color={theme.colors.steel_gray}
                />

                <CustomText
                  text={
                    activeTab == 0
                      ? "من مكسيكاني اللقية"
                      : "الى [اسم العميل], [العنوان المحفوظ]"
                  }
                  // size={22}
                  fontFam={fonts.IBMPlexSansArabic_SemiBold}
                  fontWeight="600"
                />
              </View>
            </View>
          </View>
        ) : (
          <View style={{ gap: sizeHelper.calHp(20), alignSelf: "flex-end" }}>
            <View
              style={{
                gap: sizeHelper.calWp(15),
                flexDirection: "row-reverse",
                justifyContent: "flex-end",
              }}
            >
              <CustomerNote
                width={sizeHelper.calWp(45)}
                height={sizeHelper.calWp(45)}
              />

              <View style={{ alignItems: "flex-end" }}>
                <CustomText
                  text={"ملاحظات العميل"}
                  fontFam={fonts.IBMPlexSansArabic_SemiBold}
                  fontWeight="600"
                  size={22}
                  color={theme.colors.steel_gray}
                />

                <CustomText
                  text={"لو سمحت لا تتصل, بس توصل شيع رسالة"}
                  fontFam={fonts.IBMPlexSansArabic_SemiBold}
                  fontWeight="600"
                />
              </View>
            </View>

            <View
              style={{
                gap: sizeHelper.calWp(15),
                flexDirection: "row-reverse",
                justifyContent: "flex-end",
                 alignSelf: "flex-end" 
              }}
            >
              <PaymentProcess
                width={sizeHelper.calWp(45)}
                height={sizeHelper.calWp(45)}
              />

              <View style={{ alignItems: "flex-end" }}>
                <CustomText
                  text={"عملية الدفع"}
                  fontFam={fonts.IBMPlexSansArabic_SemiBold}
                  fontWeight="600"
                  size={22}
                  color={theme.colors.steel_gray}
                />

                <CustomText
                  text={"نقدي"}
                  fontFam={fonts.IBMPlexSansArabic_SemiBold}
                  fontWeight="600"
                />
              </View>
            </View>
          </View>
        )}

        {activeTab == 0 ? (
          <View style={{ gap: sizeHelper.calHp(10), alignSelf: "flex-end",paddingRight:sizeHelper.calWp(40),width:"100%" }}>


            <CustomText
              text={"شاورما دجاج x1"}
              fontWeight="600"
              style={{ textAlign: "right" }}
              fontFam={fonts.IBMPlexSansArabic_Medium}
              color={theme.colors.graphite_gray}
            />
            <CustomText
              text={"بطاطا مقلية x1"}
              fontWeight="600"
              style={{ textAlign: "right" }}
              fontFam={fonts.IBMPlexSansArabic_Medium}
              color={theme.colors.graphite_gray}
            />
            <CustomText
              text={"كولا x1"}
              style={{ textAlign: "right" }}
              fontWeight="600"
              fontFam={fonts.IBMPlexSansArabic_Medium}
              color={theme.colors.graphite_gray}
            />

                                            <View style={{...styles.line,marginVertical:sizeHelper.calHp(15)}} />

          </View>
        ) : (
          <View style={{ gap: sizeHelper.calHp(20) }}>

                    <View style={styles.line} />

              <CustomText
              text={"تواجه صعوبة مع الطلبية؟"}
              style={{ alignSelf: "flex-end" }}
              fontFam={fonts.IBMPlexSansArabic_Bold}
              fontWeight="700"
              size={28}
            />
            <View style={styles.customer_btn}>
              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
                <TouchableOpacity>
                  <MessageIcon />
                </TouchableOpacity>

                <TouchableOpacity>
                  <CallIcon />
                </TouchableOpacity>
              </View>
              <CustomText
                text={"العميل 1"}
                fontFam={fonts.IBMPlexSansArabic_Bold}
                fontWeight="700"
                size={28}
              />
            </View>
          </View>
        )}


        <CustomButton
          text="أحتاج المساعدة"
          size={30}
          borderRadius={30}
          style={{
            alignSelf: "center",
          }}
        />
        <View
          style={{
            ...appStyles.row,
            gap: sizeHelper.calWp(10),
            alignSelf: "center",
          }}
        >
          <CustomText
            style={{}}
            text={"تواصل مع الدعم الفني اذا كنت تواجهة مشكلة  "}
            color={theme.colors.steel_gray}
          />
          <View
            style={{
              width: sizeHelper.calWp(8),
              height: sizeHelper.calWp(8),
              borderRadius: 999,
              backgroundColor: theme.colors.steel_gray,
              alignSelf: "center",
            }}
          />
        </View>
        <GradientSwipeButton onSwipe={onComplete} />
      </View>

      {/* <GradientButton
        text="قبول الطلب"
        width={'100%'}
        height={100}
        borderRadius={100}
        marginTop={sizeHelper.calHp(50)}
        // onPress={() => setIsVisible(false)}
      /> */}
    </View>
  );
};

export default DeliverOrderSheet;

const styles = StyleSheet.create({
  box: {
    backgroundColor: theme.colors.white,
    width: sizeHelper.calWp(75),
    height: sizeHelper.calWp(75),
    // : sizeHelper.calWp(20),
    borderRadius: sizeHelper.calWp(75),
    shadowColor: theme.colors.black,
    shadowRadius: 3,
    elevation: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  offline_container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    paddingHorizontal: sizeHelper.calWp(15),
    width: sizeHelper.calWp(270),

    paddingVertical: sizeHelper.calHp(8),
    borderRadius: sizeHelper.calWp(999),
    shadowColor: theme.colors.black,
    shadowRadius: 3,
    elevation: 3,
    gap: sizeHelper.calWp(20),
    alignSelf: "center",
  },

  line: {
    width: "100%",
    height: 1,
    backgroundColor: theme.colors.border,
    alignSelf: "center",
  },

    customer_btn: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    padding: sizeHelper.calWp(15),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FEE2E2",
    borderRadius: sizeHelper.calWp(25),
  },
});

import React, { useEffect, useState } from "react";
import {
  useWindowDimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import { theme } from "../../utils/Themes";
import sizeHelper from "../../utils/Helpers";
import CustomText from "../Text";
import { fonts } from "../../utils/Themes/fonts";
import CrossBtn from "../../assets/svgs/cross.svg";
import TickIcon from "../../assets/svgs/tick.svg";
import LocationEmoji from "../../assets/svgs/locationEmoji.svg";
import CallIcon from "../../assets/svgs/call.svg";
import MessageIcon from "../../assets/svgs/message.svg";
import { appStyles } from "../../utils/GlobalStyles";

interface Props {
  isModalVisible?: boolean;
  setModalVisible?: any;
}

const ViewOrderModal: React.FC<Props> = ({
  isModalVisible,
  setModalVisible,
}) => {
  const windowWidth = useWindowDimensions().width;
  const OrderTimelineData = [
    {
      time: "16:52",
      address: "تم ألتقاط الطلب من X Cafe",
      order_received: "تم استلام في 1د و 20ث",
      isChecked: true,
    },
    { time: "16:53", address: "تسليم ل Adeeb Jawabra" },
  ];

  const OrderTimelineContainer = ({ item, index }: any) => {
    const isLast = index === OrderTimelineData.length - 1;

    return (
      <View style={{ alignSelf: "flex-end" }}>
        <View
          style={{
            flexDirection: "row-reverse",
            gap: sizeHelper.calWp(15),
            alignItems: "flex-start", // 🔑 FIX
          }}
        >
          {/* Time */}
          <CustomText
            text={item?.time}
            fontFam={fonts.IBMPlexSansArabic_Medium}
            fontWeight="600"
            color={theme.colors.jet_black}
            size={28}
          />

          {/* Timeline + Checkbox */}
          <View
            style={{
              alignItems: "center",
              marginBottom: sizeHelper.calHp(-11),
            }}
          >
            {/* Checkbox */}
            <View
              style={{
                ...styles.checkBox,
                marginTop: sizeHelper.calHp(10), // 🔑 align with address
                backgroundColor: item?.isChecked
                  ? theme.colors.check_green
                  : "transparent",
                borderWidth: item?.isChecked ? 0 : 1.3,
                borderColor: theme.colors.border,
              }}
            >
              {item?.isChecked && <TickIcon />}
            </View>

            {/* Vertical Line */}
            {!isLast && (
              <View
                style={{
                  width: sizeHelper.calWp(3.8),
                  height: sizeHelper.calHp(65),
                  backgroundColor: item?.isChecked
                    ? theme.colors.check_green
                    : theme.colors.border,
                  // marginTop: sizeHelper.calHp(4),
                }}
              />
            )}
          </View>

          {/* Text */}
          <View style={{ alignItems: "flex-end" }}>
            <CustomText
              text={item?.address}
              fontFam={fonts.IBMPlexSansArabic_Medium}
              fontWeight="600"
              size={22}
            />

            {item?.order_received && (
              <CustomText
                text={item?.order_received}
                color={theme.colors.steel_gray}
                size={21}
              />
            )}
          </View>
        </View>
      </View>
    );
  };

  const OrderDetailContainer = ({ title, detail }: any) => {
    return (
      <View style={appStyles.rowjustify}>
        <CustomText
          text={detail}
          fontFam={fonts.IBMPlexSansArabic_Medium}
          fontWeight="600"
          color={theme.colors.steel_gray}
          size={22}
        />

        <CustomText
          text={title}
          fontFam={fonts.IBMPlexSansArabic_Medium}
          fontWeight="600"
          color={theme.colors.steel_gray}
          size={22}
        />
      </View>
    );
  };

  return (
    <>
      <Modal
        style={{
          margin: 0,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,.2)",
        }}
        animationIn="fadeIn"
        animationOut="fadeOut"
        deviceWidth={windowWidth}
        isVisible={isModalVisible}
        onBackButtonPress={() => setModalVisible?.(false)}
        onBackdropPress={() => setModalVisible?.(false)}
        backdropColor="transparent"
        customBackdrop={
          <Pressable
            style={{ height: "100%", width: "100%" }}
            onPress={() => setModalVisible?.(false)}
          ></Pressable>
        }
      >
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setModalVisible(false)}
            style={{ padding: sizeHelper.calWp(30), alignSelf: "flex-start" }}
          >
            <CrossBtn
              width={sizeHelper.calWp(30)}
              height={sizeHelper.calWp(30)}
            />
          </TouchableOpacity>
          <ScrollView>


          <View
            style={{
              paddingHorizontal: sizeHelper.calWp(30),
              gap: sizeHelper.calHp(20),
            }}
          >
            <View style={{ alignSelf: "flex-end", gap: sizeHelper.calHp(5) }}>
              <CustomText
                text={"1209212122"}
                fontFam={fonts.IBMPlexSansArabic_Bold}
                fontWeight="700"
                size={34}
              />
              <View
                style={{
                  paddingHorizontal: sizeHelper.calWp(40),
                  paddingVertical: sizeHelper.calHp(1),
                  borderRadius: 999,
                  backgroundColor: theme.colors.light_green,
                  alignSelf: "flex-end",
                }}
              >
                <CustomText
                  text={"نقدي"}
                  color={theme.colors.green}
                  size={22}
                />
              </View>
            </View>
            <View style={styles.line} />

            <CustomText
              text={"الجدول الزمني للطلب"}
              style={{ alignSelf: "flex-end" }}
              fontFam={fonts.IBMPlexSansArabic_Bold}
              fontWeight="700"
              size={30}
            />
            <View>
              {OrderTimelineData.map((item, index) => {
                return (
                  <OrderTimelineContainer
                    key={index.toString()}
                    item={item}
                    index={index}
                  />
                );
              })}
            </View>
            <View style={styles.line} />

            <CustomText
              text={"تفاصيل الطلب"}
              style={{ alignSelf: "flex-end" }}
              fontFam={fonts.IBMPlexSansArabic_Bold}
              fontWeight="700"
              size={30}
            />

            <View style={{ gap: sizeHelper.calHp(10) }}>
              <OrderDetailContainer title={"فشافيش x1"} detail={"₪25"} />
              <OrderDetailContainer title={"كوكتيل فواكة x1"} detail={"₪15"} />

              <OrderDetailContainer title={"كابتشينو x1"} detail={"₪10"} />
            </View>

            <View style={styles.line} />

            <View style={{ gap: sizeHelper.calHp(10) }}>
              <OrderDetailContainer title={"رسوم التوصيل"} detail={"₪7"} />
              <OrderDetailContainer title={"المجموع الفرعي"} detail={"₪57"} />
            </View>

            <View style={styles.line} />

            <View style={{ gap: sizeHelper.calHp(10) }}>
              <CustomText
                text={"الموقع"}
                style={{ alignSelf: "flex-end" }}
                fontFam={fonts.IBMPlexSansArabic_Bold}
                fontWeight="700"
                size={30}
              />

              <View
                style={{
                  ...appStyles.row,
                  alignSelf: "flex-end",
                  gap: sizeHelper.calWp(10),
                }}
              >
                <LocationEmoji />
                <CustomText
                  text={"اللقية, بيت 1 حاره 1 شارع واحد"}
                  fontFam={fonts.IBMPlexSansArabic_Medium}
                  fontWeight="600"
                  color={theme.colors.steel_gray}
                  size={22}
                />
              </View>
            </View>
            <View style={styles.line} />
            <CustomText
              text={"تفاصيل العميل"}
              style={{ alignSelf: "flex-end" }}
              fontFam={fonts.IBMPlexSansArabic_Bold}
              fontWeight="700"
              size={30}
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
                size={30}
              />
            </View>
          </View>

                    </ScrollView>

        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "95%",
    width: "85%",
    backgroundColor: theme.colors.white,
    paddingBottom: sizeHelper.calHp(50),
    alignSelf: "center",
    borderRadius: sizeHelper.calWp(25),
  },
  line: {
    width: "100%",
    height: sizeHelper.calHp(1.5),
    backgroundColor: theme.colors.border,
  },
  checkBox: {
    width: sizeHelper.calWp(30),
    height: sizeHelper.calWp(30),
    borderRadius: sizeHelper.calWp(30),

    alignItems: "center",
    justifyContent: "center",
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

export default ViewOrderModal;

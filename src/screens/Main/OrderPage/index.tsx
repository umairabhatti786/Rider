import React, { useMemo, useRef, useState } from "react";
import { View } from "react-native";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import CustomButton from "../../../components/Button";
import { fonts } from "../../../utils/Themes/fonts";
import CustomMenu from "../../../components/CustomMenu";
import { appStyles } from "../../../utils/GlobalStyles";
import GradientText from "../../../GradientText";
import CashIcon from "../../../assets/svgs/cash.svg";
import CustomBottomSheet from "../../../components/CustomBottomSheet";
import AcceptOrderSheet from "../../../components/AcceptOrderSheet";
import PickupOrderSheet from "./PickupOrderSheet";
import DeliverOrderSheet from "./DeliverOrderSheet";

function OrderPage({ navigation }: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOffline, setIsOffline] = useState(true);
  const snapToPoints = useMemo(() => ["50%", "90%"], []);
  const isAcceptOrderSheetRef = useRef<any>(null);
  const isPickupOrderSheetRef = useRef<any>(null);
  const isDeliverOrderSheetRef = useRef<any>(null);

  return (
    <ScreenLayout
      backgroundColor={theme.colors.background}
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        gap: sizeHelper.calHp(10),
      }}
    >
      <CustomMenu isOffline={isOffline} setIsOffline={setIsOffline} />
      <CustomText
        text={"الطلبات الجديدة"}
        size={36}
        fontWeight={"700"}
        style={{
          marginTop: sizeHelper.calHp(70),
          alignSelf: "flex-end",
          fontFamily: fonts.IBMPlexSansArabic_Bold,
        }}
      />
      <View
        style={{
          backgroundColor: theme.colors.white,
          borderWidth: 1,
          borderColor: "#ACB3BE",
          borderRadius: sizeHelper.calWp(20),
          shadowColor: theme.colors.black,
          elevation: 2,
          shadowRadius: 2,
          padding: sizeHelper.calWp(12),
        }}
      >
        <View
          style={{ padding: sizeHelper.calWp(20), gap: sizeHelper.calHp(20) }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                backgroundColor: theme.colors.buttonbackground,
                paddingHorizontal: sizeHelper.calWp(20),
                paddingTop: sizeHelper.calHp(3),
                borderRadius: 999,
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "flex-start",
              }}
            >
              <CustomText
                text={"#12345"}
                size={22}
                fontFam={fonts.IBMPlexSansArabic_Medium}
                fontWeight="600"
                color={theme.colors.primary}
              />
            </View>

            <View>
              <GradientText
                text={"مقهى روقة | Roka Cafe"}
                size={30}
                fontWeight="700"
                fontFamily={fonts.IBMPlexSansArabic_Bold}
                style={{
                  textAlign: "center",
                }}
              >
                <CustomText
                  text={"مقهى روقة | Roka Cafe"}
                  size={30}
                  fontFam={fonts.IBMPlexSansArabic_Bold}
                  fontWeight="700"
                />
              </GradientText>

              <CustomText
                text={"الدوار الثاني, قرية اللقية - النقب "}
                color={theme.colors.jet_black}
              />
            </View>
          </View>

          <View style={appStyles.rowjustify}>
            <View
              style={{
                alignItems: "flex-end",
                paddingLeft: sizeHelper.calWp(30),
              }}
            >
              <CustomText
                text={"طريقة الدفع:"}
                color={theme.colors.graphite_gray}
                size={21}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: sizeHelper.calWp(10),
                }}
              >
                <CustomText text={"نقداً"} size={30} fontWeight="700" />
                <CashIcon />
              </View>
            </View>

            <View
              style={{
                alignItems: "flex-end",
              }}
            >
              <CustomText
                text={"المكسب:"}
                color={theme.colors.graphite_gray}
                size={21}
              />
              <CustomText
                text={"₪ 25"}
                size={30}
                fontWeight="700"
                fontFam={fonts.IBMPlexSansArabic_Bold}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            gap: sizeHelper.calWp(20),
            paddingBottom: sizeHelper.calHp(10),
          }}
        >
          <CustomButton
            text="قبول الطلب"
            textColor={"#15803D"}
            bgColor={"#C3E3D0"}
            width={"100%"}
            onPress={() => isAcceptOrderSheetRef.current.present()}
            height={73}
            borderRadius={12}
          />
          <CustomButton
            borderWidth={1}
            height={75}
            borderColor={"#FA6E23"}
            bgColor={theme.colors.background}
            borderRadius={12}
            onPress={() => setIsModalVisible(true)}
          >
            <GradientText
              size={30}
              fontWeight="700"
              fontFamily={fonts.IBMPlexSansArabic_Bold}
              style={{
                textAlign: "center",
              }}
            >
              <CustomText
                text={"التفاصيل"}
                size={30}
                fontFam={fonts.IBMPlexSansArabic_Bold}
                fontWeight="700"
              />
            </GradientText>
          </CustomButton>
        </View>
      </View>

      <CustomBottomSheet
        snap={snapToPoints}
        bottomSheetModalRef={isAcceptOrderSheetRef}
      >
        <AcceptOrderSheet
          onComplete={() => {
            isAcceptOrderSheetRef?.current?.dismiss();

            setTimeout(() => {
              isPickupOrderSheetRef?.current?.present();
            }, 300);
          }}
          onClose={() => isAcceptOrderSheetRef?.current?.dismiss()}
        />
      </CustomBottomSheet>

      <CustomBottomSheet
        snap={snapToPoints}
        bottomSheetModalRef={isPickupOrderSheetRef}
      >
        <PickupOrderSheet
          onComplete={() => {
            isPickupOrderSheetRef?.current?.dismiss();

            setTimeout(() => {
              isDeliverOrderSheetRef?.current?.present();
            }, 300);
          }}
          onClose={() => isPickupOrderSheetRef?.current?.dismiss()}
        />
      </CustomBottomSheet>

      <CustomBottomSheet
        snap={snapToPoints}
        bottomSheetModalRef={isDeliverOrderSheetRef}
      >
        <DeliverOrderSheet
          onComplete={() => {
            isDeliverOrderSheetRef?.current?.dismiss();
            setTimeout(() => {
              navigation.navigate("OrderDelivered");
            }, 500);
          }}
          onClose={() => isDeliverOrderSheetRef?.current?.dismiss()}
        />
      </CustomBottomSheet>
    </ScreenLayout>
  );
}

export default OrderPage;

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
import { icons } from "../../../assets/icons";
import AllTransactions from "../../../assets/svgs/allTransactions.svg";
import CustomSearch from "../../../components/CustomSearch";
import CustomCalendar from "../../../components/CustomCalendar";

const TransactionsScreen = ({ navigation }: any) => {
  const [year, setYear] = useState(new Date().getFullYear());

  const AllTransactionsData = [
    {
      price: "₪12.50",
      payment_type: "دفع نقدي",
      orders: "#12123",
      date: "14:27 م",
    },
    {
      price: "₪19.30",
      payment_type: "دفع إلكتروني",
      orders: "#12123",
      date: "14:27 م",
    },
  ];

  const TransactionsItem = ({ item, index }: any) => {
    return (
      <View style={{ gap: sizeHelper.calHp(20) }}>
        <View>
          <View style={appStyles.rowjustify}>
            <CustomText
              text={`${item?.price}`}
              size={25}
              fontFam={fonts.IBMPlexSansArabic_Bold}
              fontWeight="700"
              color={theme.colors.jet_black}
            />

            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
              <View>
                <CustomText
                  text={`${item?.payment_type} `}
                  size={27}
                  style={{ textAlign: "right" }}
                  fontFam={fonts.IBMPlexSansArabic_Bold}
                  fontWeight="700"
                />

                <CustomText
                  text={` طلب ${item?.orders}  * اليوم ${item?.date}`}
                  style={{ textAlign: "right" }}
                  color={theme.colors.steel_gray}
                />
              </View>

              <View
                style={{
                  paddingHorizontal: sizeHelper.calWp(13),
                  paddingVertical: sizeHelper.calHp(15),
                  borderRadius: sizeHelper.calWp(25),
                  backgroundColor: "#FEE2E2",
                }}
              >
                <AllTransactions
                  width={sizeHelper.calWp(50)}
                  height={sizeHelper.calWp(50)}
                />
              </View>
            </View>
          </View>
        </View>
        {AllTransactionsData.length - 1 != index && (
          <View
            style={{
              width: "90%",
              height: 1,
              backgroundColor: theme.colors.border,
              alignSelf: "center",
            }}
          />
        )}
      </View>
    );
  };

  const DeliveryCOntainer = ({ label, amount }: any) => {
    return (
      <View
        style={{
          alignItems: "center",
          gap: sizeHelper.calHp(2),
        }}
      >
        <CustomText
          text={label}
          fontWeight="600"
          size={18}
          style={{ textAlign: "center" }}
          fontFam={fonts.IBMPlexSansArabic_Medium}
          color={theme.colors.graphite_gray}
        />
        <CustomText
          text={amount}
          fontFam={fonts.IBMPlexSansArabic_Bold}
          fontWeight="700"
        />
      </View>
    );
  };

  return (
    <ScreenLayout
      style={{
        paddingHorizontal: sizeHelper.calWp(-1),
        gap: sizeHelper.calHp(20),
      }}
    >
      <View
        style={{
          paddingHorizontal: sizeHelper.calWp(30),
          gap: sizeHelper.calHp(20),
        }}
      >
        <CustomHeader title={"المعاملات"} />

        <CustomSearch placeholder={"البحث عن المعاملات .."} />
      </View>
      <CustomCalendar />

      <View
        style={{
          paddingHorizontal: sizeHelper.calWp(30),
        }}
      >
        <View
          style={{
            padding: sizeHelper.calWp(30),
            backgroundColor: "#F9FAFB",
            borderRadius: sizeHelper.calWp(30),
            gap: sizeHelper.calHp(20),
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <DeliveryCOntainer
              label={"الربح بدون الإكراميات"}
              amount={"₪856.14"}
            />

            <DeliveryCOntainer label={"عمليات التوصيل"} amount={"₪36"} />
            <DeliveryCOntainer label={"إجمالي المسافة"} amount={"224 كم"} />
          </View>
          <View style={styles.line} />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <DeliveryCOntainer label={"اجمالي الربح"} amount={"₪936.14"} />

            <DeliveryCOntainer label={"الدفع الإلكتروني"} amount={"₪642.14"} />
            <DeliveryCOntainer label={"الدفع النقدي"} amount={"₪214"} />

            <DeliveryCOntainer label={"الإكراميات"} amount={"₪80.00"} />
          </View>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: sizeHelper.calWp(30),
        }}
      >
        <CustomText
          text={"جميع المعاملات"}
          style={{ alignSelf: "flex-end", marginBottom: sizeHelper.calHp(15) }}
          color={theme.colors.graphite_gray}
        />

        <FlatList
          data={AllTransactionsData}
          scrollEnabled={true}
          style={{
            padding: sizeHelper.calWp(20),
            backgroundColor: theme.colors.white,
            borderRadius: sizeHelper.calWp(20),
          }}
          contentContainerStyle={{
            gap: sizeHelper.calWp(30),
            paddingBottom: sizeHelper.calHp(20),
          }}
          renderItem={TransactionsItem}
        />
      </View>
    </ScreenLayout>
  );
};

export default TransactionsScreen;
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
});

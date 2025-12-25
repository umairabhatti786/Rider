import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import sizeHelper from '../../utils/Helpers';
import { theme } from '../../utils/Themes';
import CustomText from '../Text';
import CustomButton from '../Button';
import GradientButton from '../GradientButton';
import CrossBtn from '../../assets/svgs/cross.svg';
import { appStyles } from '../../utils/GlobalStyles';
import { fonts } from '../../utils/Themes/fonts';
import GradientText from '../../GradientText';
import InfoIcon from '../../assets/svgs/info.svg';
import GradientSwipeButton from '../GradientSwipeButton/inde';

const AcceptOrderSheet = ({onComplete,onClose}: any) => {
  return (
    <View
      style={{
        backgroundColor: '#F7F7F7',
        paddingHorizontal: sizeHelper.calWp(40),
        borderRadius: sizeHelper.calWp(30),
        width: '100%',
        gap: sizeHelper.calHp(40),
      }}
    >
      <View style={appStyles.rowjustify}>
        <View style={{ width: 40 }} />
        <CustomText text={'تفاصيل الطلب'} size={38} fontWeight="700" />
        <TouchableOpacity
          style={styles.box}
          onPress={onClose}
        >
          <CrossBtn
            width={sizeHelper.calWp(30)}
            height={sizeHelper.calWp(30)}
          />
        </TouchableOpacity>
      </View>
      <View style={appStyles.rowjustify}>
        <CustomText
          text={'#12345'}
          fontFam={fonts.IBMPlexSansArabic_SemiBold}
          fontWeight="600"
          size={24}
          color={theme.colors.steel_gray}
        />
        <CustomText
          text={'مكسيكاني اللقية | اللقية'}
          size={28}
          fontWeight="700"
          fontFam={fonts.IBMPlexSansArabic_Bold}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <CustomText
            text={'المسافة لنوصيل الطلب: '}
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
              text={'12.3 كم'}
              size={30}
              fontFam={fonts.IBMPlexSansArabic_Bold}
              fontWeight="700"
            />
          </GradientText>
        </View>
        <View
          style={{
            gap: sizeHelper.calWp(15),
            flexDirection: 'row-reverse',
            justifyContent: 'flex-end',
          }}
        >
          <InfoIcon
            width={sizeHelper.calWp(45)}
            height={sizeHelper.calWp(45)}
          />
          <View style={{ alignItems: 'flex-end' }}>
            <CustomText
              text={'تسليم الطلب'}
              fontFam={fonts.IBMPlexSansArabic_SemiBold}
              fontWeight="600"
              size={23}
              color={theme.colors.steel_gray}
            />

            <CustomText
              text={'الى [اسم العميل], [العنوان المحفوظ]'}
              // size={22}
              fontFam={fonts.IBMPlexSansArabic_SemiBold}
              fontWeight="600"
            />
          </View>
        </View>
      </View>
      
      <CustomButton
        text="نقدا"
        size={30}
        width={'80%'}
        style={{
          alignSelf: 'center',
        }}
      />
      <View
        style={appStyles.rowjustify}
      >
        <View
          style={{
            alignItems: 'flex-end',
          }}
        >
          <CustomText
            text={'مكسب المندوب:'}
            fontWeight="600"
            fontFam={fonts.IBMPlexSansArabic_Medium}
            color={theme.colors.graphite_gray}
          />
          <GradientText
            size={30}
            fontWeight="700"
            fontFamily={fonts.IBMPlexSansArabic_Bold}
          >
            <CustomText
              text={'₪ 25'}
              size={45}
              fontFam={fonts.IBMPlexSansArabic_Bold}
              fontWeight="700"
            />
          </GradientText>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
          }}
        >
          <CustomText
            text={'سعر المطعم:'}
            fontWeight="600"
            fontFam={fonts.IBMPlexSansArabic_Medium}
            color={theme.colors.graphite_gray}
          />
          <CustomText
            text={'₪ 105'}
            size={40}
            fontWeight="700"
              fontFam={fonts.IBMPlexSansArabic_Bold}
            color={theme.colors.graphite_gray}
          />
        </View>
        <View
          style={{
            alignItems: 'flex-end',
          }}
        >
          <CustomText
          text={"اجمالي:"}
            fontWeight="600"
            fontFam={fonts.IBMPlexSansArabic_Medium}
            color={theme.colors.graphite_gray}
          />
          <CustomText
            text={'₪ 130'}
            size={40}
            fontWeight="700"
              fontFam={fonts.IBMPlexSansArabic_Bold}
            color={theme.colors.graphite_gray}
          />
        </View>
      </View>

      <GradientSwipeButton
      onSwipe={onComplete}
      />
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

export default AcceptOrderSheet;

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  offline_container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    paddingHorizontal: sizeHelper.calWp(15),
    width: sizeHelper.calWp(270),

    paddingVertical: sizeHelper.calHp(8),
    borderRadius: sizeHelper.calWp(999),
    shadowColor: theme.colors.black,
    shadowRadius: 3,
    elevation: 3,
    gap: sizeHelper.calWp(20),
    alignSelf: 'center',
  },
});

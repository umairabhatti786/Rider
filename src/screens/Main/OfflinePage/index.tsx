import React, { useState } from 'react';
import {StyleSheet, View } from 'react-native';
import CustomText from '../../../components/Text';
import ScreenLayout from '../../../components/ScreenLayout';
import sizeHelper from '../../../utils/Helpers';
import { theme } from '../../../utils/Themes';
import CustomButton from '../../../components/Button';
import OfflineStatusImg from '../../../assets/svgs/offlineStatus.svg';
import CustomMenu from '../../../components/CustomMenu';

function OfflinePage({ navigation }: any) {
  const [isOffline, setIsOffline] = useState(false);
  return (
    <ScreenLayout
    >
     <CustomMenu
     isOffline={isOffline}
     setIsOffline={setIsOffline}
     />
      <View
        style={{
          alignItems: 'center',
          marginTop: sizeHelper.calHp(150),
        }}
      >
        <CustomText
          text={'قم بتغيير حالتك الى متصل'}
          size={34}
          fontWeight={'800'}
        />
        <CustomText
          text={'قم بتفعيل حالة الحساب لتتمكن من قبول الطلبات'}
          size={19}
          color="#847D83F5"
          style={{
            textAlign: 'center',
          }}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <OfflineStatusImg width={'90%'} />
        <CustomButton
        style={{marginTop:sizeHelper.calHp(40)}}
          onPress={() => navigation.navigate('OrderPage')}
          text="أحتاج المساعدة"
        />
        <View style={styles.botton_container}>
          <CustomText
            style={{}}
            text={'تواصل مع الدعم الفني اذا كنت تواجهة مشكلة  '}
            color={theme.colors.steel_gray}
          />
          <View
            style={{
              width: sizeHelper.calWp(8),
              height: sizeHelper.calWp(8),
              borderRadius: 999,
              backgroundColor: theme.colors.steel_gray,
              alignSelf: 'center',
            }}
          />
        </View>
      </View>
    </ScreenLayout>
  );
}

export default OfflinePage;
const styles = StyleSheet.create({
  botton_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    gap: sizeHelper.calWp(18),
    marginTop: sizeHelper.calHp(50),
  },
});

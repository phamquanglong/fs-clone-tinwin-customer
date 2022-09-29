import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

type Props = {};

const OrderSuccess = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        <Image
          source={require('../../assets/logoTinwinPrimary.png')}
          style={styles.imgLogO}
          resizeMode="contain"></Image>
        <Image
          source={require('../../assets/payment/tks.png')}
          style={styles.imgTks}
          resizeMode="contain"></Image>
        <Text style={styles.textTks}>Cảm ơn bạn đã mua hàng tại TinWin!</Text>
        <Text style={styles.textTitleCode}>Mã đơn hàng của bạn</Text>
        <View style={styles.boxCode}>
          <Text style={styles.textCode}>VNA123</Text>
        </View>
        <TouchableOpacity
          className={`border-orange-primary rounded-md`}
          style={styles.textBuyAgain}>
          <Text className={`text-orange-primary`}>Tiếp tục mua hàng</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  textBuyAgain: {alignItems: 'center', padding: 14, borderWidth: 1},
  textCode: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#FC832D',
    textAlign: 'center',
  },
  boxCode: {
    //   flex: 1,
    backgroundColor: '#fff3ea',
    paddingBottom: 11,
    paddingTop: 11,
    paddingLeft: 18,
    borderRadius: 8,
    paddingRight: 18,
    alignItems: 'center',
    // width: 90,
    alignSelf: 'center',
    marginBottom: 120,
  },
  textTitleCode: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    color: '#434343',
    alignSelf: 'center',
    width: 212,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
  textTks: {
    fontWeight: '600',
    fontSize: 19,
    lineHeight: 21,
    color: '#FC832D',
    alignSelf: 'center',
    width: 212,
    textAlign: 'center',
  },
  imgTks: {
    width: 232,
    height: 232,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 53,
  },
  imgLogO: {width: 101, height: 85, alignSelf: 'center'},
  padding: {padding: 24},
  container: {backgroundColor: '#fff', height: '100%'},
});

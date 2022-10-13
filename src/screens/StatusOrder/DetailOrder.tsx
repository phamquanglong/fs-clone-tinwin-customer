import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import BtnOrder from '../../components/buttons/BtnOrder';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {
  anotherOrange,
  beige,
  black,
  colorTextTitleNotifi,
  darkestGrey,
  grey,
  orangeBeige,
  whiteGrey,
} from '../../constant/const';

type Props = {};

const DetailOrder: React.FC = (props: Props) => {
  const navigation = useNavigation();
  const { titleBtn, btnPrimary } = props;
  var x = 1000000;
  x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

  const navigatePayment = () => {
    navigation.navigate('Payment');
  };
  const navigateDetailOrder = () => {
    navigation.navigate('DetailOrder');
  };
  useEffect(() => {
    navigation.setOptions({
      title: 'Thông tin đơn hàng',
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={style1.box}>
          <Image
            source={require('../../assets/order/logoShop.png')}
            style={style1.ImgLogo}
          />
          <Text style={style1.titleComfirm}>Đơn hàng đã được xác nhận</Text>
        </View>
      </View>
      <Text style={style1.addressTitle}>Địa chỉ nhận hàng</Text>
      <View style={styles.card}>
        <View style={style1.row}>
          <Image source={require('../../assets/order/square.png')} />
          <View style={style1.m1520}>
            <Text style={style1.name}>Robert Fox</Text>
            <Text style={style1.phoneN}>(+84) 12 345 6789</Text>
            <Text style={style1.address}>
              Toà nhà Mitec Tower Dương Đình Nghệ, Yên Hoà, Từ Liêm, Hà Nội
            </Text>
          </View>
        </View>
      </View>
      <View style={style1.mt5}>
        <View style={styles.card}>
          <View style={style1.flexAlign} className="">
            <View style={styles.title}>
              <Image source={require('../../assets/order/shop.png')}></Image>
              <Text style={styles.textTitle}>TV xiaomi Việt Nam</Text>
            </View>
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </View>
          <View style={styles.infor}>
            <Image
              source={require('../../assets/order/product.png')}
              style={styles.imgProduct}></Image>
            <View style={styles.textInfor}>
              <Text style={styles.productTitle}>
                Máy Lọc Không Khí Xiaomi Mi Air Purifier 4 lite
              </Text>
              <Text style={styles.productCode}>MÃ SP: a</Text>
              <View style={style1.flexMt10}>
                <Text style={styles.price}>{x}</Text>
                <Text style={styles.count}>x3</Text>
              </View>
            </View>
          </View>
          <View style={style1.flexmbmte}>
            <View style={style1.line} />
            <View style={style1.line} />
          </View>
          <View style={style1.flexMt20}>
            <Text style={style1.money}>Tổng tiền hàng</Text>
            <Text style={style1.money}>{x}</Text>
          </View>
          <View style={style1.flexMBMT1}>
            <View style={style1.line} />
            <View style={style1.line} />
          </View>
          <View style={style1.flex}>
            <Text style={style1.money}>Phí vận chuyển</Text>
            <Text style={style1.money}>{x}</Text>
          </View>
          <View style={style1.flexMBMT1}>
            <View style={style1.line} />
            <View style={style1.line} />
          </View>
          <View style={style1.flex}>
            <Text style={style1.total}>Tổng số tiền</Text>
            <Text style={style1.money}>{x}</Text>
          </View>
        </View>
        <Text style={style1.pttt}>Phương thức thanh toán</Text>
        <View style={style1.mt}>
          <View style={styles.card}>
            <View style={style1.flex1}>
              <Image
                source={require('../../assets/order/wallet.png')}
                style={style1.imgWallet}
              />
              <Text style={style1.wallet}>Ví Tin tin</Text>
            </View>
          </View>
        </View>
        <View style={style1.mt}>
          <View style={styles.card}>
            <View style={style1.boxCode}>
              <Text style={style1.code}>Mã đơn hàng: VNA123</Text>
            </View>
            <View style={style1.flex}>
              <Text style={style1.titleDate}>Thời gian đặt hàng</Text>
              <Text style={style1.dateTime}>25/04/2022 07:05</Text>
            </View>
            <View style={style1.flexMBMT1}>
              <View style={style1.line} />
              <View style={style1.line} />
            </View>
            <View style={style1.flexMb}>
              <Text style={style1.titleDate}>Thời gian đặt hàng</Text>
              <Text style={style1.dateTime}>25/04/2022 07:05</Text>
            </View>
            <View style={style1.flexMbMt}>
              <View style={style1.line} />
              <View style={style1.line} />
            </View>
            <View style={style1.mb10}>
              <BtnOrder
                content="Thanh toán ngay"
                onPress={navigatePayment}></BtnOrder>
            </View>
            <BtnOrder content="Abc" onPress={navigateDetailOrder}></BtnOrder>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const style1 = StyleSheet.create({
  line: { flex: 1, height: 1, backgroundColor: whiteGrey },
  mb10: { marginBottom: 10 },
  dateTime: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: grey,
  },
  titleDate: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: grey,
  },
  flexMb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  flexMbMt: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 42,
  },
  flexMBMT1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 10,
  },
  flex: { flexDirection: 'row', justifyContent: 'space-between' },
  flex1: { flexDirection: 'row' },
  code: {
    marginLeft: 13,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: anotherOrange,
    textAlign: 'center',
  },
  boxCode: {
    height: 62,
    backgroundColor: beige,
    paddingBottom: 11,
    paddingTop: 11,
    paddingLeft: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  mt: { marginTop: 11 },
  wallet: {
    marginLeft: 11.5,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: colorTextTitleNotifi,
  },
  imgWallet: { width: 19, height: 19 },
  pttt: {
    marginLeft: 24,
    marginTop: 11,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: colorTextTitleNotifi,
  },
  total: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: darkestGrey,
  },
  money: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: darkestGrey,
  },
  flexMt20: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  flexmbmte: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  flexMt10: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mt5: { marginTop: 5 },
  address: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: darkestGrey,
    marginTop: 2,
  },
  phoneN: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: darkestGrey,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: anotherOrange,
  },
  m1520: { marginLeft: 15, marginRight: 50 },
  row: { flexDirection: 'row' },
  addressTitle: {
    marginLeft: 24,
    marginTop: 7,
    marginBottom: 8,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: colorTextTitleNotifi,
  },
  titleComfirm: {
    marginLeft: 13,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    color: black,
  },
  ImgLogo: { width: 40, height: 40 },
  box: {
    //   flex: 1,
    borderWidth: 1,
    borderColor: orangeBeige,
    height: 62,
    backgroundColor: whiteGrey,
    paddingBottom: 11,
    paddingTop: 11,
    paddingLeft: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default DetailOrder;

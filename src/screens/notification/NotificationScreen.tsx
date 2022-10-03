import {
  Image,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {styles} from '../StatusOrder/style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
import {blue} from '../../constant/const';

const NotificationScreen: React.FC = () => {
  const [bool, setBool] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({title: 'Thông báo'});
  }, []);
  const bool1 = () => {
    setBool(!bool);
  };
  return (
    <ScrollView>
      <View style={styles1.flexAlign}>
        <Text style={styles1.update}>Cập nhật quan trọng</Text>
        <Text style={styles1.notifi}>{188} thông báo mới</Text>
      </View>
      <TouchableOpacity onPress={bool1} style={styles1.open}>
        <View style={styles1.row}>
          <Image source={require('../../assets/payment/Redbull.png')}></Image>
          <View style={styles1.flexAlignMl8}>
            <View>
              <Text style={styles1.titleContent}>
                Giao kiện hàng thành công
              </Text>
              <Text style={styles1.title}>
                Mã vận đơn
                <Text style={styles1.content}> SPXVN0256737377377</Text> của đơn
                hàng <Text style={styles1.content}>SPXVN029922887466</Text> đã
                giao thành công đến bạn{' '}
              </Text>
              <Text style={styles1.time}>11:12</Text>
            </View>
            {bool ? (
              <FontAwesomeIcon
                icon={faAngleUp}
                style={styles1.mr30}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                icon={faAngleDown}
                style={styles1.mr30}></FontAwesomeIcon>
            )}
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{backgroundColor: '#00000005', display: bool ? 'flex' : 'none'}}>
        <View style={styles1.boxNotiOpen}>
          <Text style={styles1.titleContent}>Xác nhận đơn hàng</Text>
          <Text style={styles1.title}>
            Vui lòng chọn “ Đã nhận được hàng” cho đơn hàng{' '}
            <Text style={styles1.content}>SPXVN029922887466</Text>
            nếu bạn hài lòng về sản phẩm, dịch vụ và không có nhu cầu Trả
            hàng/hoàn tiền.{' '}
          </Text>
          <Text style={styles1.time}>11:12{'      '} 22/05/2022</Text>
        </View>
        <View style={styles1.boxNotiOpen}>
          <Text style={styles1.titleContent}>Đang vận chuyển</Text>
          <Text style={styles1.title}>
            Mã vận đơn <Text style={styles1.content}>SPXVN029922887466</Text>{' '}
            của đơn hàng <Text style={styles1.content}>SPXVN029922887466</Text>{' '}
            đã được đại lý cửa hàng An An giao cho đơn vị vận chuyển
          </Text>
          <Text style={styles1.time}>11:12{'      '} 22/05/2022</Text>
        </View>
        <View style={styles1.boxNotiOpen}>
          <Text style={styles1.titleContent}>Xác nhận đã thanh toán</Text>
          <Text style={styles1.title}>
            Thanh toán cho đơn hàng{' '}
            <Text style={styles1.content}>SPXVN029922887466</Text> thành công.
            Vui lòng kiểm tra thời gian nhận hàng dự kiến nhé!
          </Text>
          <Text style={styles1.time}>11:12{'      '} 22/05/2022</Text>
        </View>
      </View>
      <TouchableOpacity style={styles1.boxNotiWhite}>
        <View style={styles1.row}>
          <Image source={require('../../assets/payment/Redbull.png')}></Image>
          <View style={styles1.boxNoti}>
            <View style={styles1.mw272}>
              <Text style={styles1.titleContent}>Xác nhận đơn hàng</Text>
              <Text style={styles1.title}>
                Vui lòng chọn “ Đã nhận được hàng” cho đơn hàng
                <Text style={styles1.content}> SPXVN029922887466</Text> nếu bạn
                hài lòng về sản phẩm, dịch vụ và không có nhu cầu Trả hàng/hoàn
                tiền.
              </Text>
              <Text style={styles1.time}>11:12</Text>
            </View>
            {bool ? (
              <FontAwesomeIcon
                icon={faAngleUp}
                style={styles1.ml30}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                icon={faAngleDown}
                style={styles1.ml30}></FontAwesomeIcon>
            )}
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles1.btnNoti}>
        <View style={styles1.row}>
          <LinearGradient
            className={`rounded-md`}
            colors={['#FD7D00', '#FEB336']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            locations={[0, 1]}
            style={styles1.linePayment}>
            <View style={styles1.boxNoti}>
              <Image
                source={require('../../assets/payment/tinwinLG.png')}></Image>
            </View>
          </LinearGradient>

          <View style={styles1.boxNoti}>
            <View style={styles1.mw295}>
              <Text style={styles1.titleContent}>Nạp tiền thành công</Text>
              <Text style={styles1.title}>
                Nạp thành công số tiền{' '}
                <Text style={styles1.content}>100 000đ</Text> vào ví Tinwin từ
                tài khoản <Text style={styles1.content}>techcombank</Text>. Hãy
                kiểm tra lại tài khoản của mình.
              </Text>
              <Text style={styles1.time}>11:12</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles1 = StyleSheet.create({
  notifi: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: '#FC832D',
    marginRight: 20,
    marginTop: 7,
    marginBottom: 7,
  },
  update: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: '#1F1F1F',
    marginLeft: 20,
    marginTop: 7,
    marginBottom: 7,
  },
  flexAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  open: {
    backgroundColor: '#fff',
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 12,
    paddingTop: 10,
  },
  time: {
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    color: '#8E8E93',
    marginTop: 6,
  },
  title: {
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    color: '#7B7B80',
  },
  content: {color: blue},
  titleContent: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: '#3A3A3C',
    marginBottom: 4,
    marginRight: 115,
  },
  mw295: {maxWidth: 295},
  boxNoti: {
    marginLeft: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonNoti: {
    width: 32,
    height: 32,
    padding: 3.5,
  },
  ml30: {marginLeft: 30},
  btnNoti: {
    backgroundColor: '#fff',
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 12,
    paddingTop: 10,
  },
  row: {flexDirection: 'row'},
  mw272: {maxWidth: 272},
  boxNotiWhite: {
    backgroundColor: '#FFF4E5',
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 12,
    paddingTop: 10,
  },
  boxNotiOpen: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 57,
    marginRight: 20,
  },
  mr30: {marginRight: 30},
  flexAlignMl8: {
    marginLeft: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linePayment: {
    maxWidth: 32,
    maxHeight: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default NotificationScreen;

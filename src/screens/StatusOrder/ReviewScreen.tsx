import {faStar} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BtnOrder from '../../components/buttons/BtnOrder';
import ModalCancel from '../../components/modal/modalCancel';
import {
  anotherGrey,
  anotherOrange,
  black,
  darkerGrey,
  darkestGrey,
  LighterGrey,
  orangeDark,
  white,
  whiteGrey,
} from '../../constant/const';
import {styles} from '../../screens/StatusOrder/style';

const Review: React.FC = () => {
  const navigation = useNavigation();
  const [choose, setChoose] = useState(1);
  const [rating, setRating] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      title: 'Đánh giá sản phẩm',
    });
  }, []);
  const setStar = (value: number) => {
    setRating(value);
  };
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const setChoose1 = () => {
    setChoose(1);
  };
  const setChoose2 = () => {
    setChoose(2);
  };
  const setChoose3 = () => {
    setChoose(3);
  };
  const setChoose4 = () => {
    setChoose(4);
  };
  const setChoose5 = () => {
    setChoose(5);
  };

  return (
    <SafeAreaView>
      <Text style={style1.titleP}>Sản phẩm</Text>
      <View style={style1.boxProduct}>
        <View style={style1.row}>
          <Image
            source={require('../../assets/order/product.png')}
            style={style1.star}></Image>
          <View style={styles.textInfor}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={style1.textProduct}>
                Máy Lọc Không Khí Xiaomi Mi Air Purifier 4 lite
              </Text>
            </TouchableOpacity>
            <View style={style1.mt10}>
              <Text style={styles.price}></Text>
              <Text style={styles.count}>x3</Text>
            </View>
          </View>
        </View>
        <View style={style1.boxLine}>
          <View style={style1.line} />
          <View style={style1.line} />
        </View>
        <View style={style1.alignSelfItem}>
          <TouchableOpacity onPress={() => setStar(1)} style={style1.mr5}>
            <Image
              source={require('../../assets/order/Vector.png')}
              style={style1.star}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStar(2)} style={style1.mr5}>
            {rating >= 2 ? (
              <Image
                source={require('../../assets/order/Vector.png')}
                style={style1.star}></Image>
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                size={48}
                color={orangeDark}></FontAwesomeIcon>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStar(3)} style={style1.mr5}>
            {rating >= 3 ? (
              <Image
                source={require('../../assets/order/Vector.png')}
                style={style1.star}></Image>
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                size={48}
                color={orangeDark}></FontAwesomeIcon>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStar(4)} style={style1.mr5}>
            {rating >= 4 ? (
              <Image
                source={require('../../assets/order/Vector.png')}
                style={style1.star}></Image>
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                size={48}
                color={orangeDark}></FontAwesomeIcon>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStar(5)}>
            {rating == 5 ? (
              <Image
                source={require('../../assets/order/Vector.png')}
                style={style1.star}></Image>
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                size={48}
                color={orangeDark}></FontAwesomeIcon>
            )}
          </TouchableOpacity>
        </View>

        <View style={style1.flexAlign}>
          <Text style={style1.yourReview}>Đánh giá của bạn</Text>
          <View style={style1.flexAlign}>
            <Text style={style1.text}></Text>
          </View>
        </View>
        <View style={style1.flexMb8}>
          <View style={style1.w160}>
            <TouchableOpacity
              onPress={setChoose1}
              className={`rounded-md`}
              style={{
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: choose === 1 ? anotherOrange : LighterGrey,
                borderWidth: 1,
                paddingLeft: 11,
                paddingRight: 13,
              }}>
              <Text
                style={{
                  color: choose === 1 ? anotherOrange : LighterGrey,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18,
                  textAlign: 'center',
                }}>
                Sản phẩm rất tuyệt vời
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style1.w160}>
            <TouchableOpacity
              onPress={setChoose2}
              className={`rounded-md`}
              style={{
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: choose === 2 ? anotherOrange : LighterGrey,
                borderWidth: 1,
                paddingLeft: 11,
                paddingRight: 13,
              }}>
              <Text
                style={{
                  color: choose === 2 ? anotherOrange : LighterGrey,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18,
                  textAlign: 'center',
                }}>
                Đóng gói chắn chắn
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style1.flex}>
          <View style={style1.w160}>
            <TouchableOpacity
              onPress={setChoose3}
              className={`rounded-md`}
              style={{
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: choose === 3 ? anotherOrange : LighterGrey,
                borderWidth: 1,
                paddingLeft: 11,
                paddingRight: 13,
              }}>
              <Text
                style={{
                  color: choose === 3 ? anotherOrange : LighterGrey,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18,
                  textAlign: 'center',
                }}>
                Thời gian giao hàng nhanh
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style1.w160}>
            <TouchableOpacity
              onPress={setChoose4}
              className={`rounded-md`}
              style={{
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: choose === 4 ? anotherOrange : LighterGrey,
                borderWidth: 1,
                paddingLeft: 11,
                paddingRight: 13,
              }}>
              <Text
                style={{
                  color: choose === 4 ? anotherOrange : LighterGrey,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18,
                  textAlign: 'center',
                }}>
                Đóng gói chắn chắn
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style1.boxLine}>
          <View style={style1.line} />
          <View style={style1.line} />
        </View>
        <View>
          <View style={style1.flexColRe}>
            <BtnOrder content={'Hoàn thành'}></BtnOrder>
          </View>
        </View>
      </View>
      <ModalCancel modalVisible={modalVisible} setModalVisible={toggleModal} />
    </SafeAreaView>
  );
};
const style1 = StyleSheet.create({
  flexColRe: {flexDirection: 'column-reverse', marginTop: 200},
  line: {flex: 1, height: 1, backgroundColor: whiteGrey},
  boxLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  w160: {width: 160},
  flex: {flexDirection: 'row', justifyContent: 'space-between'},
  flexMb8: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: darkestGrey,
  },
  flexAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  yourReview: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: darkerGrey,
    marginTop: 45,
    marginBottom: 13,
  },
  star: {width: 48, height: 48},
  mr5: {marginRight: 5},
  alignSelfItem: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mt10: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textProduct: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    color: black,
  },
  row: {
    marginTop: 0,
    flexDirection: 'row',
  },
  boxProduct: {
    backgroundColor: white,
    paddingBottom: 30,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 30,
    width: '100%',
  },
  titleP: {
    marginLeft: 24,
    marginTop: 9,
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: anotherGrey,
  },
});
export default Review;

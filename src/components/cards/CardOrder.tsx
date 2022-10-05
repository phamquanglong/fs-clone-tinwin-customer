import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {darkestGrey, lightGrey, whiteGrey} from '../../constant/const';
import {styles} from '../../screens/StatusOrder/style';
import BtnOrder from '../buttons/BtnOrder';
import {ModalBuyAgain} from '../modal/ModalAddToCart';
import ModalCancel from '../modal/modalCancel';

interface Props {
  style: string;
  onPress?: () => void;
  prop?: object;
  content: string;
}

const CardOrder: React.FC<Props> = props => {
  const {titleBtn, btnPrimary} = props;
  const [modalVisible, setModalVisible] = useState(false);
  var x = 1000000;
  x = x.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
  const navigation = useNavigation();
  const navi = () => {
    if (titleBtn === 'Thanh toán ngay') {
      navigation.navigate('DetailOrder');
    }
    setModalVisible(!modalVisible);
    if (titleBtn === 'Đã nhận') {
      navigation.navigate('OrderSuccess');
    }
  };
  const naviReview = () => {
    navigation.navigate('Review');
  };
  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Image source={require('../../assets/order/shop.png')}></Image>
        <Text style={styles.textTitle}>TV xiaomi Việt Nam</Text>
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
          <View style={style1.flexMt}>
            <Text style={styles.price}>{x}</Text>
            <Text style={styles.count}>x3</Text>
          </View>
        </View>
      </View>
      <View style={style1.boxLine}>
        <View style={style1.line} />
        <View style={style1.line} />
      </View>
      <TouchableOpacity style={style1.alignSelfItem}>
        <Text style={style1.textMore}>Xem thêm sản phẩm</Text>
        <FontAwesomeIcon
          icon={faAngleDown}
          size={12}
          color={lightGrey}></FontAwesomeIcon>
      </TouchableOpacity>
      <View style={style1.boxLine}>
        <View style={style1.line} />
        <View style={style1.line} />
      </View>
      <View style={style1.flexAlign}>
        <Text style={styles.totalCount}>20 sản phẩm</Text>
        <View style={style1.flexAlign}>
          <Text style={style1.titleTotal}>Tổng thanh toán</Text>
          <Text style={styles.totalPrice}>{x}</Text>
        </View>
      </View>
      <View style={style1.boxLine}>
        <View style={style1.line} />
        <View style={style1.line} />
      </View>
      <View
        style={{
          width: btnPrimary ? 160 : 140,
          alignSelf: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {btnPrimary ? (
          <View style={style1.m0}>
            <BtnOrder content={btnPrimary} onPress={naviReview} />
          </View>
        ) : (
          <View></View>
        )}
        <View>
          <BtnOrder content={titleBtn} onPress={navi} />
        </View>
      </View>
      {titleBtn === 'Hủy đơn' ? (
        // <UpdateAvatarModal modalVisible={modalVisible}
        // setModalVisible={setModalVisible}/>
        <ModalCancel
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      ) : (
        <></>
      )}
      {titleBtn === 'Mua lại' ? (
        <ModalBuyAgain
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      ) : (
        <></>
      )}
    </View>
  );
};
const style1 = StyleSheet.create({
  m0: {marginRight: 10},
  line: {flex: 1, height: 1, backgroundColor: whiteGrey},
  boxLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  titleTotal: {
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
  textMore: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: lightGrey,
    marginRight: 6,
  },
  alignSelfItem: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexMt: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default CardOrder;

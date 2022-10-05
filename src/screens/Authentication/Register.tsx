import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {lightGrey, orangeDark, orangeLight, white} from '../../constant/const';
import {styleRegister as style} from './style';

const Register: React.FC = ({}) => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>('');
  const options = {
    title: '',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: white,
    },
    headerShadowVisible: false, // applied here
  };
  const navigate = () => {
    navigation.navigate('OTPAuthen', {title: 'Đăng ký'});
  };
  const setUser = (value: string) => {
    setUserName(value);
  };
  useEffect(() => {
    navigation.setOptions(options);
    Keyboard.dismiss();
  }, []);
  return (
    <SafeAreaView>
      <View style={style.container}>
        <View>
          <Image
            source={require('../../assets/logoTinwinPrimary.png')}
            style={style.image}></Image>
          <View style={style.boxTextWelcome}>
            <Text style={style.textWelcome}>
              Chào mừng bạn đến với{' '}
              <Text style={style.textPrimary}>Tinwin.</Text>
            </Text>
          </View>
        </View>
        <View style={style.loginView}>
          <View style={style1.mb20}>
            <Text style={style.textDescription}>Email / Số điện thoại</Text>
            <TextInput
              style={style.input}
              value={userName}
              placeholder="Nhập Email / Số điện thoại"
              onChange={setUser}
              placeholderTextColor={lightGrey}
            />
          </View>
        </View>
        <View>
          <LinearGradient
            className={`${style} rounded-md`}
            colors={[orangeLight, orangeDark]}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            locations={[0, 1]}
            style={style1.alignHeight}>
            <TouchableOpacity className="p-3" onPress={navigate}>
              <Text style={style1.textCreate}>Tạo tài khoản</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
      <View style={style1.boxPolicy}>
        <Text style={style.textPolicy} className="self-center">
          Bằng cách tạo một tài khoản, bạn đồng ý với{' '}
          <Text style={style.textPolicyBlack}>Thỏa thuận Người dùng</Text> và{' '}
          <Text style={style.textPolicyBlack}>Chính sách Quyền riêng tư</Text>{' '}
          của TinWin
        </Text>
      </View>
      <View style={style1.boxVetable}>
        <Image
          source={require('../../assets/authen/vegetable.png')}
          style={style1.Img}></Image>
      </View>
    </SafeAreaView>
  );
};
const style1 = StyleSheet.create({
  textCreate: {
    color: white,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
  boxPolicy: {width: 260, alignSelf: 'center'},
  boxVetable: {
    flex: 1,
    alignSelf: 'flex-end',
    bottom: 0,
    marginTop: 70,
  },
  Img: {width: 375, height: 290},
  alignHeight: {alignItems: 'center', height: 50},
  mb20: {marginBottom: 20},
});
export default Register;

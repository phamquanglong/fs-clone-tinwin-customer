import {
  faApple,
  faFacebook,
  faGooglePlus,
} from '@fortawesome/free-brands-svg-icons';
import {faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  anotherOrange,
  colorForInput,
  grey,
  lightGrey,
  moreLightGrey,
  orangeDark,
  orangeLight,
  white,
} from '../../constant/const';

const ForgotPassword: React.FC = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>('');
  const options = {
    title: 'Gửi lại mật khẩu',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: moreLightGrey,
    },
    headerShadowVisible: false, // applied here
  };

  const navigate = () => {
    navigation.navigate('OTPAuthen', {title: 'Nhập mã xác minh'});
  };
  const setUser = (text: string) => {
    setUserName(text);
  };
  useEffect(() => {
    navigation.setOptions(options);
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.loginView}>
        <View style={style.marginBot}>
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
          className={` rounded-md`}
          colors={[orangeLight, orangeDark]}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          locations={[0, 1]}
          style={style.boxNext}>
          <TouchableOpacity className="p-3" onPress={navigate}>
            <Text style={style.textNext}>Tiếp theo</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};
export const style = StyleSheet.create({
  image: {
    width: 92,
    height: 72,
  },
  container: {
    marginLeft: 24,
    marginBottom: 29,
    marginRight: 25,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  boxTextWelcome: {
    marginTop: 20,
    width: 247,
  },
  textWelcome: {
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 35,
  },
  textPrimary: {
    color: anotherOrange,
  },
  loginView: {
    marginTop: 40,
  },
  textDescription: {
    color: 'grey',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 5,
  },
  input: {
    // width: 327,
    flex: 1,
    // alignItems: 'stretch',
    minHeight: 50,
    borderColor: colorForInput,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 30,
    color: grey,
  },
  textSMS: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 22,
    color: anotherOrange,
    marginTop: 10,
    // marginRight: 12,
  },
  textForgot: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 22,
    color: anotherOrange,
  },
  textNext: {
    color: white,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
  boxNext: {alignItems: 'center', height: 50},
  marginBot: {marginBottom: 20},
});
export default ForgotPassword;

import {faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {
  Keyboard,
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
  darkerGrey,
  grey,
  lightGrey,
  moreLightGrey,
  orangeDark,
  orangeLight,
  red,
  white,
} from '../../constant/const';

const FormForgotPassword: React.FC = () => {
  const navigation = useNavigation();
  const options = {
    title: 'Đặt lại mật khẩu',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: moreLightGrey,
    },
    headerShadowVisible: false, // applied here
  };
  useEffect(() => {
    navigation.setOptions(options);
    Keyboard.dismiss();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.loginView}>
        <View style={style.marginBot}>
          <Text style={style.textDescription}>
            Mật khẩu mới <Text style={style.redText}>*</Text>
          </Text>
          <TextInput
            style={style.input}
            placeholder="Nhập mật khẩu"
            autoCapitalize="none"
            // value={password}
            // secureTextEntry={isPasswordSecure}
            // onChange={value => setPassword(value)}
            placeholderTextColor={lightGrey}
          />
          <View style={style.eye}>
            <TouchableOpacity
            // onPressIn={() => setIsPasswordSecure(!isPasswordSecure)}
            // onPressOut={() => setIsPasswordSecure(!isPasswordSecure)}
            >
              <FontAwesomeIcon icon={faEyeSlash} size={20} color={lightGrey} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={style.textDescription}>
            Nhập lại mật khẩu mới <Text style={style.redText}>*</Text>
          </Text>
          <TextInput
            style={style.input}
            placeholder="Nhập mật khẩu"
            autoCapitalize="none"
            // value={password}
            // secureTextEntry={isPasswordSecure}
            // onChange={value => setPassword(value)}
            placeholderTextColor={lightGrey}
          />
          <View style={style.eye}>
            <TouchableOpacity
            // onPressIn={() => setIsPasswordSecure(!isPasswordSecure)}
            // onPressOut={() => setIsPasswordSecure(!isPasswordSecure)}
            >
              <FontAwesomeIcon icon={faEyeSlash} size={20} color={lightGrey} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.boxWarning}>
          <Text style={style.textWarning}>
            Mật khẩu phải dài từ 8-16 kí tự (Bao gồm tối thiểu 1 chữ viết hoa và
            1 kí tự đặc biệt)
          </Text>
        </View>
      </View>
      <View>
        <LinearGradient
          className={`rounded-md`}
          colors={[orangeLight, orangeDark]}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          locations={[0, 1]}
          style={style.btnNext}>
          <TouchableOpacity
            className="p-3"
            // onPress={() =>
            //   navigation.navigate('OTPAuthen', {title: 'Nhập mã xác minh'})
            // }
          >
            <Text style={style.textNext}>Tiếp theo</Text>
          </TouchableOpacity>
        </LinearGradient>
        {/* <ModalAuthen /> */}
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
  marginBot: {marginBottom: 20},
  redText: {color: red},
  eye: {
    position: 'absolute',
    right: 20,
    top: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxWarning: {
    width: 299,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  textWarning: {
    color: darkerGrey,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
  },
  btnNext: {alignItems: 'center', height: 50},
  textNext: {
    color: white,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
});
export default FormForgotPassword;

import {faArrowRotateRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useRef, useState} from 'react';
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
  anotherGrey,
  darkerGrey,
  darkestGrey,
  grey,
  greyOTP,
  orangeDark,
  orangeLight,
  red,
  white,
} from '../../constant/const';
import {styleSMS as style} from './style';

const OTP: React.FC = ({route}) => {
  const navigation = useNavigation();
  const [timeOut, setTimeOut] = useState(60);
  const [OTPComfirm, setOTP] = useState('');
  const {title} = route.params;
  const options = {
    title: title,
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: white,
    },
    headerShadowVisible: false, // applied here
  };
  let textInput = useRef(null);
  let lengthInput = 6;

  useEffect(() => {
    navigation.setOptions(options);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeOut > 0) {
        setTimeOut(prev => prev - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeOut]);

  const onChangeText = (val: any) => {
    setOTP(val);
  };
  const onNavigate = () => {
    // if (title === 'Đăng ký') {
    //   navigation.navigate('FormRegister');
    // }
    // if (title === 'Nhập mã xác minh') {
    //   navigation.navigate('FormResetPassword');
    // }
  };
  const focusTextInput = () => {
    textInput.focus();
  };
  return (
    <View>
      <TextInput
        ref={input => (textInput = input)}
        value={OTPComfirm}
        autoFocus={true}
        onChangeText={onChangeText}
        maxLength={lengthInput}
        returnKeyType="done"
        keyboardType="numeric"
        // editable={true}
        style={style1.none}></TextInput>
      <SafeAreaView style={style.container}>
        <View className="self-center">
          <Image
            source={require('../../assets/authen/Frame.png')}
            style={style.image}></Image>
        </View>

        <View style={style1.self}>
          <View style={style1.OTPContainer}>
            {Array(lengthInput)
              .fill()
              .map((data, index) => (
                <View key={index} style={style1.boxOTP}>
                  <TouchableOpacity onPress={focusTextInput}>
                    <Text style={style1.numberOTP}>
                      {OTPComfirm && OTPComfirm.length > 0
                        ? OTPComfirm[index]
                        : ''}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        </View>
        <View style={style1.boxNoti}>
          <Text style={style1.textNoti}>
            Quý khách vui lòng nhập mã xác thực gồm 6 chữ số đã được gửi về số
            điện thoại 091****678
          </Text>
        </View>
        {OTPComfirm.length === lengthInput ? (
          <View style={style1.mtmb}>
            <LinearGradient
              className={` rounded-md`}
              colors={[orangeLight, orangeDark]}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              locations={[0, 1]}
              style={style1.boxNext}>
              <TouchableOpacity className="p-3" onPress={onNavigate}>
                <Text style={style1.textNext}>Tiếp tục</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        ) : (
          ''
        )}
        {OTPComfirm.length === lengthInput ? (
          <></>
        ) : timeOut !== 0 ? (
          <View style={style1.boxWait}>
            <Text style={style1.textWait}>
              Vui lòng chờ <Text style={style1.redText}>{timeOut}s</Text> để
              nhận lại mã xác thực{' '}
            </Text>
          </View>
        ) : (
          <View style={style1.boxAgain}>
            <Text style={style1.textAgain}>Bạn vẫn chưa nhận được mã?</Text>
            <TouchableOpacity style={style1.btnAgain}>
              <FontAwesomeIcon
                icon={faArrowRotateRight}
                style={style1.icon}
                size={12}></FontAwesomeIcon>
              <Text style={style1.textSendAgain}>Nhấn gửi lại mã</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};
const style1 = StyleSheet.create({
  OTPContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  boxOTP: {
    paddingVertical: 11,
    width: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderColor: greyOTP,
  },
  numberOTP: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 40,
    color: darkestGrey,
  },
  boxNoti: {width: 288, alignSelf: 'center'},
  textNoti: {
    color: darkerGrey,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
  },
  boxNext: {alignItems: 'center', height: 50},
  textNext: {
    color: white,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
  boxWait: {marginTop: 47, alignSelf: 'center'},
  textWait: {
    textAlign: 'center',
    color: anotherGrey,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
  },
  boxAgain: {marginTop: 40, alignSelf: 'center'},
  textAgain: {
    textAlign: 'center',
    color: grey,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
  },
  btnAgain: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  icon: {
    color: red,
    marginRight: 5,
    marginTop: 9,
  },
  textSendAgain: {
    textAlign: 'center',
    color: red,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
    marginTop: 9,
  },
  mtmb: {marginTop: 40, marginBottom: 31},
  none: {position: 'absolute', bottom: -99999},
  self: {alignSelf: 'center'},
  redText: {color: red},
});
export default OTP;

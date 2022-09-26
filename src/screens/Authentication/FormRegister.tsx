import {faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FormRegister: React.FC = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [comfirm, setComfirm] = useState<string>('');
  const [isPasswordSecure, setIsPasswordSecure] = useState<boolean>(true);
  const [isPasswordSecureComfirm, setIsPasswordSecureComfirm] = useState(true);
  const options = {
    title: 'Đặt lại mật khẩu',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: '#f2f2f2',
    },
    headerShadowVisible: false, // applied here
  };
  useEffect(() => {
    navigation.setOptions(options);
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.loginView}>
        <View style={{marginBottom: 20}}>
          <Text style={style.textDescription}>Tên Hiển Thị</Text>
          <TextInput
            style={style.input}
            value={userName}
            placeholder="Nhập tên hiển thị"
            onChange={text => setUserName(text)}
          />
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={style.textDescription}>
            Mật khẩu <Text style={{color: '#FF3B30'}}>*</Text>
          </Text>
          <TextInput
            style={style.input}
            placeholder="Nhập mật khẩu"
            autoCapitalize="none"
            value={password}
            secureTextEntry={isPasswordSecure}
            onChange={value => setPassword(value)}
          />
          <View
            style={{
              position: 'absolute',
              right: 20,
              top: 40,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPressIn={() => setIsPasswordSecure(!isPasswordSecure)}
              onPressOut={() => setIsPasswordSecure(!isPasswordSecure)}>
              <FontAwesomeIcon icon={faEyeSlash} size={20} color="#AEAEB2" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={style.textDescription}>
            Nhập lại mật khẩu <Text style={{color: '#FF3B30'}}>*</Text>
          </Text>
          <TextInput
            style={style.input}
            placeholder="Nhập mật khẩu"
            autoCapitalize="none"
            value={comfirm}
            secureTextEntry={isPasswordSecureComfirm}
            onChange={value => setComfirm(value)}
          />
          <View
            style={{
              position: 'absolute',
              right: 20,
              top: 40,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPressIn={() =>
                setIsPasswordSecureComfirm(!isPasswordSecureComfirm)
              }
              onPressOut={() =>
                setIsPasswordSecureComfirm(!isPasswordSecureComfirm)
              }>
              <FontAwesomeIcon icon={faEyeSlash} size={20} color="#AEAEB2" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: 299,
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 40,
          }}>
          <Text
            style={{
              color: '#636366',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
              textAlign: 'center',
            }}>
            Mật khẩu phải dài từ 8-16 kí tự (Bao gồm tối thiểu 1 chữ viết hoa và
            1 kí tự đặc biệt)
          </Text>
        </View>
      </View>
      <View>
        <LinearGradient
          className={`${style} rounded-md`}
          colors={['#FD7D00', '#FEB336']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          locations={[0, 1]}
          style={{alignItems: 'center', height: 50}}>
          <TouchableOpacity
            className="p-3"
            onPress={() =>
              navigation.navigate('OTPAuthen', {title: 'Nhập mã xác minh'})
            }>
            <Text
              style={{
                color: '#FFF',
                alignSelf: 'center',
                fontSize: 16,
                fontWeight: '600',
                lineHeight: 22,
              }}>
              Tiếp theo
            </Text>
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
    color: '#FC832D',
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
    borderColor: '#0000001F 12%',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 30,
  },
  textSMS: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 22,
    color: '#FC832D',
    marginTop: 10,
    // marginRight: 12,
  },
  textForgot: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 22,
    color: '#FC832D',
  },
});
export default FormRegister;
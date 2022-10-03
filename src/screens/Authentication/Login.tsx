import {
  faApple,
  faFacebook,
  faGooglePlus,
} from '@fortawesome/free-brands-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets/colors';
import BtnPrimary from '../../components/BtnPrimary';
import { Forgot_passWord_Screen, LoginSMS_Screen, Register_Screen, TabBar } from '../../constant/route';
import { style } from './style';

const Login: React.FC = ({ }) => {
  const navigation = useNavigation();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onPressRoute = (route: string) => {
    navigation.navigate(route)
  }

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Image
          source={require('../../assets/logoTinwinPrimary.png')}
          style={style.image}></Image>
        <View style={style.boxTextWelcome}>
          <Text style={style.textWelcome}>
            Chào mừng bạn đến với <Text style={style.textPrimary}>Tinwin.</Text>
          </Text>
        </View>
      </View>
      <View style={style.loginView}>
        <View >
          <Text style={style.textDescription}>Email / Số điện thoại</Text>
          <TextInput
            style={style.input}
            value={userName}
            placeholder="Nhập Email / Số điện thoại"
            onChange={text => setUserName(text)}
          />
        </View>
        <View>
          <Text style={style.textDescription}>Mật khẩu</Text>
          <TextInput
            style={style.input}
            placeholder="Nhập mật khẩu"
            autoCapitalize="none"
            value={password}
            secureTextEntry={isPasswordSecure}
            onChange={value => setPassword(value)}
          />
          <View>
            <TouchableOpacity
              onPressIn={() => setIsPasswordSecure(!isPasswordSecure)}
              onPressOut={() => setIsPasswordSecure(!isPasswordSecure)}>
              <FontAwesomeIcon icon={faEyeSlash} size={20} color="#AEAEB2" />
            </TouchableOpacity>
            <Text > | </Text>
            <TouchableOpacity
              onPress={() => {
                onPressRoute(Forgot_passWord_Screen)
              }}>
              <Text style={style.textForgot}>Quên ?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            onPressRoute(LoginSMS_Screen)
          }}>
          <Text style={style.textSMS} className="self-end mr-4">
            Đăng nhập bằng sms
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <BtnPrimary
          style="items-center p-3"
          text="Đăng nhập"
          onPress={onPressRoute(TabBar)}
        />
      </View>
      <View>
        <View />
        <View>
          <Text>
            Hoặc tiếp tục với
          </Text>
        </View>
        <View />
      </View>
      <View>
        <FontAwesomeIcon icon={faFacebook} color={`${colors.lightBlue}`} size={55} />
        <FontAwesomeIcon icon={faGooglePlus} color={`${colors.blue}`} size={55} />
        <FontAwesomeIcon icon={faApple} color={`${colors.black}`} size={55} />
      </View>
      <View>
        <Text>
          Bạn mới biết đến tinwin?{' '}
          <TouchableOpacity
            className="mt-3"
            onPress={onPressRoute(Register_Screen)}>
            <Text>Đăng ký</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

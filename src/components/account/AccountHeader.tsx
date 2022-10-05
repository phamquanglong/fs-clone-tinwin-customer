import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../assets/colors';
import CartBtn from '../buttons/CartBtn';
import SettingsBtn from '../buttons/SettingsBtn';

const AccountHeader: React.FC = () => {
  return (
    <LinearGradient
      className="h-28 p-3"
      colors={[colors.primary, colors.primaryToGradient]}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      locations={[0, 1]}>
      <View className="h-10"></View>
      <View className="items-center flex-row justify-between mx-3">
        <Image
          source={require('../../assets/logoTinwin.png')}
          className="h-12 w-16"
        />

        <View className="flex-row w-16 justify-between">
          <SettingsBtn />
          <CartBtn color="white" />
        </View>
      </View>
    </LinearGradient>
  );
};

export default AccountHeader;

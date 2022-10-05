import { SafeAreaView } from 'react-native';
import AccountContainer from '../../components/account/AccountContainer';
import HeaderStack from '../../components/HeaderStack';

const SocialNetworkScreen: React.FC = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <HeaderStack text="Tài khoản mạng xã hội" isGoback={true} />

      <AccountContainer
        items={[
          {
            text: 'Tài khoản Facebook',
            icon: require('.././../assets/icons/facebook.png'),
          },
          {
            text: 'Tài khoản Google',
            icon: require('.././../assets/icons/google.png'),
          },
          {
            text: 'Tài khoản Apple',
            icon: require('.././../assets/icons/apple.png'),
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default SocialNetworkScreen;

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from './AccountScreen';
import ChangeInfoScreen from './ChangeInfoScreen';
import SettingsScreen from './SettingsScreen';
import SocialNetworkScreen from './SocialNetworkScreen';

const Stack = createNativeStackNavigator();

const AccountNavigator: React.FC = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="SocialNetwork"
        component={SocialNetworkScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="ChangeInfo"
        component={ChangeInfoScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;

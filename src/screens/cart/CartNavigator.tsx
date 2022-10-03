import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartAddressScreen from './CartAddressScreen';
import CartScreen from './CartScreen';

const Stack = createNativeStackNavigator();

const CartNavigator: React.FC = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="CartAddress"
        component={CartAddressScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;

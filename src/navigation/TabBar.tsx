import {
  faBell,
  faHome,
  faRing,
  faStore,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountNavigator from '../screens/account/AccountNavigator';
import CategoriesScreen from '../screens/categories/CategoriesScreen';
import HomeScreen from '../screens/home/HomeScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';

const TabBar: React.FC = () => {
  const Tab = createBottomTabNavigator();

  const screenOptions = ({route}) => ({
    // headerShown: false,
    tabBarIcon: ({focused, color, size}) => {
      return (
        <FontAwesomeIcon
          icon={
            route.name === 'Trang chủ'
              ? faHome
              : route.name === 'Danh mục'
              ? faStore
              : route.name === 'Thông báo'
              ? faBell
              : faUser
          }
          color={color}
          size={20}
        />
      );
    },
    tabBarActiveTintColor: '#FD7D00',
    tabBarStyle: {
      height: 70,
      paddingTop: 10,
    },
    tabBarOptions: {
      keyboardHidesTabBar: true,
    },
    tabBarLabelStyle: {
      marginBottom: 15,
    },
    tabBarHideOnKeyboard: true,
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Danh mục" component={CategoriesScreen} />
      <Tab.Screen
        name="Thông báo"
        component={NotificationScreen}
        options={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
      <Tab.Screen name="Tôi" component={AccountNavigator} />
    </Tab.Navigator>
  );
};

export default TabBar;

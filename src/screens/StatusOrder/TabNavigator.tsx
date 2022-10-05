import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useLayoutEffect} from 'react';
import {Dimensions, Text, Keyboard} from 'react-native';
import {anotherOrange, black, darkerGrey, white} from '../../constant/const';
import Cancel from './CancelledTab';
import Delivered from './DeliveredTab';
import Delivering from './DeliveringTab';
import Prepare from './PrepareTab';
import WaitComfirm from './WaitComfirmTab';
import WaitPay from './WaitForPayTab';

const Tab = createMaterialTopTabNavigator();
const TabNavi: React.FC = ({}) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Đơn mua',
      headerStyle: {backgroundColor: white, borderBottomWidth: 0},
      headerTitleStyle: {color: black},
      headerTintColor: black,
    });
  }, [navigation]);
  useEffect(() => {
    Keyboard.dismiss();
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="WaitForPay"
      screenOptions={{tabBarScrollEnabled: true}}
      tabBarOptions={options}>
      <Tab.Screen
        name="WaitForPay"
        component={WaitPay}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
                color: focused ? anotherOrange : darkerGrey,
                flexWrap: 'nowrap',
              }}>
              {' '}
              Chờ thanh toán{' '}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="WaitComfirm"
        component={WaitComfirm}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
                color: focused ? anotherOrange : darkerGrey,
              }}>
              {' '}
              Chờ xác nhận{' '}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Prepare"
        component={Prepare}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
                color: focused ? anotherOrange : darkerGrey,
              }}>
              {' '}
              Đang chuẩn bị{' '}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Delivering"
        component={Delivering}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
                color: focused ? anotherOrange : darkerGrey,
              }}>
              {' '}
              Đang giao{' '}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Delivered"
        component={Delivered}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
                color: focused ? anotherOrange : darkerGrey,
              }}>
              {' '}
              Đã giao{' '}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Cancel"
        component={Cancel}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
                color: focused ? anotherOrange : darkerGrey,
              }}>
              {' '}
              Đã hủy{' '}
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const options = {
  style: {
    backgroundColor: white,
    paddingLeft: 15,
  },
  indicatorStyle: {
    //   borderBottomColor: colorScheme.teal,
    borderBottomWidth: 3,
    width: 97,
    left: 24,
    borderColor: anotherOrange,
    zIndex: 1000,
  },
  tabStyle: {
    justifyContent: 'center',
    width: Dimensions.get('window').width / 3.45,
  },
};
export default TabNavi;

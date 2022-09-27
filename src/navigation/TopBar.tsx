
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Platform, SafeAreaView, ScrollView, Text, View } from 'react-native';

import HotSale from '../screens/Filter/HotSale';
import Name from '../screens/Filter/Name';
import Price from '../screens/Filter/Price';


interface Props {
    title: object[]
}

const TopBar: React.FC<Props> = (props) => {
    const Tab = createMaterialTopTabNavigator();
    const { title } = props

    const screenOptions = ({ route }) => ({


        tabBarIndicatorStyle: {
            backgroundColor: '#FC832D',
            height: 3,

        },
        tabBarActiveTintColor: '#636366',

        tabBarStyle: {
            margin: 10,
            backgroundColor: 'white',

        },
        indicatorStyle: {
            backgroundColor: '#333',
            height: 4,

        }


    });

    return (
        <View className={`flex-1 h-screen`}>


            <Tab.Navigator screenOptions={screenOptions}>
                {
                    title.map(item => <Tab.Screen name={item.name} component={item.component} />)
                }

            </Tab.Navigator>
        </View>

    );
};

export default TopBar;

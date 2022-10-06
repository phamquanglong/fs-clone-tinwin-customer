import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { Component, useState } from 'react';
import {
    FlatList,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface Props {
    label: object[];
}


const BtnFilter: React.FC<Props> = props => {
    const { label } = props;
    const [status, setStatus] = useState(label[0].title);

    const renderItem = ({ item }) => (
        <View >
            <TouchableOpacity
                className={`w-28 items-center border-b-2 ${status === item.title ? 'border-b-[#FC832D]' : 'border-b-[#48484A]'
                    } `}
                onPress={() => setStatus(item.title)}>
                <Text
                    className={`mb-3 ${status === item.title ? 'text-[#FC832D]' : 'text-[#48484A]'
                        }`}>
                    {item.title}
                </Text>
            </TouchableOpacity>

        </View >

    )

    return (
        <View>
            <View className={`px-6 mt-6`}>
                <FlatList data={label} renderItem={renderItem} horizontal />
            </View>


            <View>
                {label.map(item => (
                    <View key={item.id} >
                        {status === item.title && item.component ?
                            <View>
                                <item.component />
                            </View> : ''
                        }

                    </View>


                ))}
            </View>
        </View >
    );
};

export default BtnFilter;
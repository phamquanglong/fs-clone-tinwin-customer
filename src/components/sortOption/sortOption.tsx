import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { Component, useState } from 'react';
import { Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    label: object[]
}



const SortOption: React.FC<Props> = (props) => {
    const { label } = props
    const [status, setStatus] = useState(label[0].title)
    const setStatusFilter = (item: string) => {
        setStatus(item)
    }

    const renderItem = () => (
        <View>
            {/* <item.component /> */}
            <Text>Check</Text>
        </View>
    )

    return (
        <View className={`flex-row px-6 mt-6`}>
            {label.map(item =>
                <TouchableOpacity
                    className={`w-28 items-center ${item.style}`}
                    key={item.id}
                    onPress={() => { setStatusFilter(item.title) }}>
                    <Text className={`${status === item.title ? 'text-[#FC832D]' : 'text-[#48484A]'}`}>{item.title}</Text>
                </TouchableOpacity>)}
        </View>
    )
}

export default SortOption
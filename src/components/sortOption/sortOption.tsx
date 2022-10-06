import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import { Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    id: number
    title: string
    style?: string
}

const sortLabel = [
    { id: 1, title: "Mới nhất" },
    { id: 2, title: "Bán chạy", style: 'border-x' },
    { id: 3, title: "Giá" }
]

const SortOption: React.FC = () => {

    const [status, setStatus] = useState('Mới nhất')
    const setStatusFilter = (item: string) => {
        setStatus(item)
    }

    return (
        <View className={`flex-row px-6 mt-6`}>
            {sortLabel.map(item =>
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
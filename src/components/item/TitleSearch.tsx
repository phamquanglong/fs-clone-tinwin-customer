import React, { useState } from 'react';
import { SafeAreaView, Text, Image, View, TouchableOpacity, StyleSheet, FlatList, ImageSourcePropType } from 'react-native';

interface PassSearch {
    // id: string,
    title: string,
    icon?: ImageSourcePropType
}

const TitleSearch: React.FC<PassSearch> = (props) => {
    const { title, icon } = props
    return (
        <View>
            <Text className={`text-[#2D2D2D] text-sm font-normal my-3.5`}>{title}</Text>
            <View className={`mx-0 h-0.5 bg-[#F9F9F9]`} />
        </View>
    )
}

export default TitleSearch
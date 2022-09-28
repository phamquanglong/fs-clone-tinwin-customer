import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { SafeAreaView, Text, Image, View, TouchableOpacity, StyleSheet, FlatList, ListRenderItem, ScrollView } from 'react-native';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Categories } from '../../assets/Data';
import { useNavigation } from '@react-navigation/native';


interface category {
    id: string,
    title: string,
    image?: string,
    count?: string,
    onPress?: () => void
}

const CategoryItem: React.FC<category> = (item) => (
    <View className={`flex-1`} >

        <TouchableOpacity className={`mx-6 mb-5 flex-row h-[75px]`} onPress={item.onPress}>
            {item.image &&
                <View className={`w-[75px] h-[75px] mr-6 border border-[#D7D7D7] rounded-[10px] justify-center items-center`}>
                    <Image source={item.image} />
                </View>
            }

            <View className={` justify-center `}>
                <Text className={`text-center text-sm leading-[14px] text-[#2E2E2E] font-medium`} >{item.title}</Text>
            </View>
            <View className={` absolute right-3 top-7 `}>
                <FontAwesomeIcon icon={faChevronRight} />
            </View>

        </TouchableOpacity>

    </View>
)

const ShopCaregories: React.FC = () => {
    const navigation = useNavigation()
    const renderItem: ListRenderItem<category> = (item) => {
        return (
            <CategoryItem title={item.item.title} id={item.item.id} image={item.item.image} onPress={() => navigation.navigate('DetailCategories')} />
        )
    }
    return (
        <View className={`mt-6`}>
            <FlatList data={Categories} renderItem={renderItem} />

        </View>

    )
}

export default ShopCaregories
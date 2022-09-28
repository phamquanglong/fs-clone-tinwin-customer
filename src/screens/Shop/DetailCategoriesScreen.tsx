import React, { useState } from 'react';
import { SafeAreaView, Text, Image, View, TouchableOpacity, Animated, FlatList, ListRenderItem, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import FilterBtn from '../../components/buttons/FilterBtn';
import ProductsContainer from '../../components/product/ProductsContainer';
import { data } from '../../Data/Data';
import SortOption from '../../components/sortOption/sortOption';
import SearchBtnHome from '../../components/buttons/SearchBtnHome';

const sortLabel = [
    { id: 1, title: "Mới nhất" },
    { id: 2, title: "Bán chạy" },
    { id: 3, title: "Giá" }
]

const DetailCategoriesScreen: React.FC = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView className={`bg-white flex-1`}>

            <View className="flex-row mx-3">
                <View className={'self-center mr-4'}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <FontAwesomeIcon color='#1F1F1F' icon={faChevronLeft} />
                    </TouchableOpacity>

                </View>
                <SearchBtnHome onPress={() => navigation.navigate('Search')} />
                <View>
                    <FilterBtn />
                </View>
            </View>
            <View className={`flex-row px-6`}>
                {sortLabel.map(item => <SortOption id={item.id} title={item.title} />)}
            </View>
            <View className={`bg-white flex-1`}>
                <ProductsContainer
                    flatlistStyle={{ justifyContent: 'space-evenly' }}
                    data={data}

                />
            </View>
        </SafeAreaView>
    );
};

export default DetailCategoriesScreen;


import React, { useState } from 'react';
import { SafeAreaView, Text, Image, View, TouchableOpacity, StyleSheet, FlatList, ListRenderItem, ScrollView } from 'react-native';
import { SearchBar } from '../../components/SearchField';
import { Categories } from '../../assets/Data';
import { useNavigation } from '@react-navigation/native';
import ListCategories from '../../components/item/ListCategories';
import TitleSearch from '../../components/item/TitleSearch';
import InputItem from '../../components/InputItem';
import TabBar from '../../navigation/TopBar';
import CategoriesContainer from '../../components/categories/CategoriesContainer';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'áo thun',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'áo croptop',
    },
];
const DATA2 = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Nước tăng lực Redbull',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Nước tăng lực Number One',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd9baa97f63',
        title: 'Nước tăng lực Monster',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-gbd91aa97f63',
        title: 'Nước tăng lực Sting',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fvbd91aa97f63',
        title: 'Nước tăng lực Mountain',
    },
];

const SearchScreen: React.FC = () => {
    const [search, setSearch] = useState('')
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <ScrollView>
                <View className={`px-6`}>
                    <View className={`flex-row`}>
                        <SearchBar placeholder='Tìm kiếm' width={280} />

                        <View className={`flex self-center ml-6`}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image source={require('../../images/cancel.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className={`mt-9`}>
                        {DATA2.map(item =>
                            <TouchableOpacity onPress={() => navigation.navigate('SearchResult')}>
                                <TitleSearch id={item.id} title={item.title} key={item.id} />
                            </TouchableOpacity>)}

                    </View>

                    <View className={`mt-4`}>
                        <Text className={`text-[#2D2D2D] text-[15px] font-bold`}>Tìm kiếm gần đây</Text>
                    </View>
                    <View>
                        {DATA.map((item, index) => (
                            index < 3 && <TitleSearch title={item.title} id={item.id} key={item.id} />
                        ))}
                    </View>

                </View>



                <View className={`w-fit h-1.5 bg-[#F9F9F9]`} />

                <View>
                    <View className={`pl-6 mt-4 mb-5`}>
                        <Text className={`text-[#2D2D2D] text-[15px] font-bold`}>Danh mục hàng</Text>
                    </View>

                    <ListCategories />

                </View>


            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchScreen;


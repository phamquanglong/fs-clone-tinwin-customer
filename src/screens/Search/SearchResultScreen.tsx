import React, { useState } from 'react';
import { SafeAreaView, Text, Image, View, TouchableOpacity, Animated, FlatList, ListRenderItem, ScrollView } from 'react-native';
import { SearchBar } from '../../components/SearchField';
import { Categories } from '../../assets/Data';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import FilterBtn from '../../components/buttons/FilterBtn';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ProductsContainer from '../../components/product/ProductsContainer';
import CartBtn from '../../components/buttons/CartBtn';
import TopBar from '../../navigation/TopBar';
import TopTabNavigation from '../../navigation/TopTabNavigation';
import HotSale from '../Filter/HotSale';
import Price from '../Filter/Price';
import Name from '../Filter/Name';

const DATA = [
    { id: 'a', title: 'Nước tăng lực', icon: require('../../images/cancel.png') },
    { id: 'b', title: 'Chăm sóc cá nhân', icon: require('../../images/cancel.png') },
    { id: 'c', title: 'Coca cola', icon: require('../../images/cancel.png') }
];

const data = [
    { id: 1, name: 'Bán chạy', component: HotSale },
    { id: 2, name: 'Giá', component: Price },
    { id: 3, name: 'Tên A→Z', component: Name }
]


interface tagSearch {
    id: string,
    title: string
}



const Item: React.FC<tagSearch> = (item) => (

    <View className={`h-[30px] rounded-lg bg-[#FC832D]/[0.1] justify-center items-center mt-3 mr-3 flex-row px-3`}>
        <Text className={`text-[#FC832D] text-sm font-normal`}>{item.title}</Text>
        <View className={`ml-2`}>
            <TouchableOpacity >
                <FontAwesomeIcon icon={faXmark} size={15} color={'#FC832D'} />
            </TouchableOpacity>
        </View>
    </View>

)

const SearchResultScreen: React.FC = () => {
    const [search, setSearch] = useState('')
    const navigation = useNavigation()

    const renderItem: ListRenderItem<tagSearch> = (item) => {
        return (
            <Item title={item.item.title} id={item.item.id} />
        )
    }
    return (
        <SafeAreaView className="bg-white h-full">

            <View className={`mx-2`}>
                <View className={`flex-row`}>
                    <View className={'self-center mr-4'}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <FontAwesomeIcon color='#1F1F1F' icon={faChevronLeft} />
                        </TouchableOpacity>

                    </View>

                    <SearchBar placeholder='Tìm kiếm' width={200} />
                    <View>
                        <FilterBtn />
                    </View>
                    <CartBtn
                        color="#FD7D00"
                        style="border border-gray-200 justify-center px-3 ml-3 rounded-lg"
                    />

                </View>

                <View className={`ml-3`}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        numColumns={2}
                    />

                </View>

            </View>
            <View >
                <TopBar title={data} />
            </View>


        </SafeAreaView>
    );
};

export default SearchResultScreen;


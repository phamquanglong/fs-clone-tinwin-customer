import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    Image,
    View,
    TouchableOpacity,
    Animated,
    FlatList,
    ListRenderItem,
    ScrollView,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../assets/colors';

const DATA = [
    { id: 'a', title: 'Nước tăng lực', icon: require('../../images/cancel.png') },
    {
        id: 'b',
        title: 'Chăm sóc cá nhân',
        icon: require('../../images/cancel.png'),
    },
    { id: 'c', title: 'Coca cola', icon: require('../../images/cancel.png') },
];



interface tagSearch {
    id: string;
    title: string;
    onPress?: () => void
}

const Item = (item: tagSearch,) => (
    <View
        className={`h-[30px] rounded-lg bg-[#FC832D]/[0.1] justify-center items-center mt-3 mr-3 flex-row px-3`}>
        <Text className={`text-[#FC832D] text-sm font-normal`}>{item.title}</Text>
        <View className={`ml-2`}>
            <TouchableOpacity >
                <FontAwesomeIcon icon={faXmark} size={15} color={`${colors.orange}`} />
            </TouchableOpacity>
        </View>
    </View>
);

const TagSeach: React.FC = () => {

    const [data, setData] = useState(DATA)

    const deleteItem = (tag: tagSearch) => {
        setData(data.filter(item => item.id !== tag.id))
    }

    const renderItem: ListRenderItem<tagSearch> = (item) => {
        return <Item title={item.item.title} id={item.item.id} />;
    };


    return (


        <View className={`ml-3`}>
            <FlatList data={data} renderItem={renderItem} numColumns={2} />
        </View>

    );
};

export default TagSeach
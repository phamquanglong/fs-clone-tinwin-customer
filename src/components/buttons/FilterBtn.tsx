import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { NAVIGATE_FILTER } from '../../navigation/navigate';

const FilterBtn: React.FC = () => {
    const navigation = useNavigation();

    const navigateFilter = () => {
        navigation.navigate(NAVIGATE_FILTER);
    };

    return (
        <View className="">
            <TouchableOpacity
                onPress={navigateFilter}
                className={`border border-gray-200 justify-center px-4 py-3 ml-3 rounded-lg`}>
                <Image source={require('../../assets/icons/filter.png')} />
            </TouchableOpacity>
        </View>
    );
};

export default FilterBtn;

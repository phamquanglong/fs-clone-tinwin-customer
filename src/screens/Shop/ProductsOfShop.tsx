import { SafeAreaView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import SortOption from '../../components/sortOption/sortOption';
import ProductsContainer from '../../components/product/ProductsContainer';
import { data } from '../../Data/Data';
import { useState } from 'react';

const sortLabel = [
    { id: 1, title: "Mới nhất" },
    { id: 2, title: "Bán chạy", style: 'border-x' },
    { id: 3, title: "Giá" }

]

const ProductsOfShop: React.FC = () => {

    return (
        <SafeAreaView className={`bg-white flex-1`}>
            <View>
                <SortOption label={sortLabel} />
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

export default ProductsOfShop;

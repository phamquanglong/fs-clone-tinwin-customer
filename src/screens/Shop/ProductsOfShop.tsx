import { SafeAreaView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import SortOption from '../../components/sortOption/sortOption';
import ProductsContainer from '../../components/product/ProductsContainer';
import { data } from '../../Data/Data';

const sortLabel = [
    { id: 1, title: "Mới nhất" },
    { id: 2, title: "Bán chạy" },
    { id: 3, title: "Giá" }
]

const ProductsOfShop: React.FC = () => {
    return (
        <SafeAreaView className={`bg-white flex-1`}>
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

export default ProductsOfShop;

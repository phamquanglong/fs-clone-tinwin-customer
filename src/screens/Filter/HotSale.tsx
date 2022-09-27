import { SafeAreaView, Text, ScrollView, View } from 'react-native';
import ProductsContainer from '../../components/product/ProductsContainer'
import { data } from '../../Data/Data';

const HotSale: React.FC = () => {
    return (
        <ScrollView className="bg-white h-screen mb-48">
            <View >
                <ProductsContainer
                    flatlistStyle={{ justifyContent: 'space-evenly' }}
                    data={data}
                />
            </View>

        </ScrollView>
    );
};

export default HotSale;

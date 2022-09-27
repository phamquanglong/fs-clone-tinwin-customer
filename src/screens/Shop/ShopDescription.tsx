
import { SafeAreaView, Text, View, Image, ScrollView } from 'react-native';
import ShopDetailContainer from '../../components/ShopDetail/ShopDetailContainer';
import ProductsContainer from '../../components/product/ProductsContainer';
import { data } from '../../Data/Data';

const item = [
    { id: 1, title: 'Công ty', value: 'Công Ty TNHH Cổ Phần An An' },
    { id: 2, title: 'Địa chỉ', value: '196 Dương Đình Nghệ, Cầu Giấy HN', },
    { id: 3, title: 'Mã số thuế', value: '0105926126', },
    { id: 4, title: 'Số điện thoại', value: '0123 124 124', },
    { id: 5, title: 'Email', value: 'emailname@gmail.com', },
    { id: 6, title: 'Link website', value: 'https://www.figma.com', }
]

const ShopDescription: React.FC = () => {
    return (
        <SafeAreaView className="bg-white flex-1">

            <View>
                <ShopDetailContainer
                    title="Mô tả gian hàng"
                    icon={require('../../images/intro.png')}
                    data={item}
                />
            </View>
            <View className='items-center flex'>
                <Image source={require('../../images/panel.png')} />
            </View>

            <View>
                <ProductsContainer
                    textBtn="Xem tất cả"
                    data={data}
                    title="Sản phẩm mới"
                    icon={require('../../assets/icons/home/outstanding.png')}
                />
            </View>


        </SafeAreaView>
    );
};

export default ShopDescription;


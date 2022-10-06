import { useRoute } from '@react-navigation/native';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import CartBtn from '../../components/buttons/CartBtn';
import SearchBtnHome from '../../components/buttons/SearchBtnHome';
import GoBackBtn from '../../components/buttons/GoBackBtn';
import FilterBtn from '../../components/buttons/FilterBtn';
import IntroductDetailShop from '../../components/ShopDetail/IntroductDetailShop';
import ShopDescription from './ShopDescription';
import CategoriesOfShop from './CategoriesOfShop';
import ProductsOfShop from './ProductsOfShop';
import { useNavigation } from '@react-navigation/native';
import BtnFilter from '../../components/Search/BtnFilter';
import { white } from '../../constant/const';
import { avatar_img, shop_img } from '../../assets/images';


const item = [
    { id: 1, title: 'Cửa hàng', component: ShopDescription },
    { id: 2, title: 'Sản phẩm', component: ProductsOfShop },
    { id: 3, title: 'Danh mục hàng', component: CategoriesOfShop }
]

const ShopDetailScreen: React.FC = () => {
    const route = useRoute();
    const { id } = route.params;
    const navigation = useNavigation()

    return (
        <SafeAreaView className="bg-white flex-1">

            <ScrollView View className={`flex-none`}>
                <View className="flex-row justify-between p-5 absolute z-10 w-full">
                    <GoBackBtn
                        style="py-3 px-6 bg-black-opacity rounded-lg w-10 items-center justify-center"
                        color={white}
                    />
                    <SearchBtnHome placeholder='Tìm kiếm' style='text-white' color={white} />
                    <View className="flex-row">
                        <FilterBtn color={white} />
                        <CartBtn
                            color={white}
                            style="border border-white justify-center px-3 ml-3 rounded-lg"
                        />
                    </View>
                </View>

                <Image
                    source={shop_img}
                    className="w-full h-48 bg-blue-400"
                />
                <View className=" p-5 absolute top-20 flex-row">
                    <Image source={avatar_img} />
                    <View className={`ml-5`}>
                        <IntroductDetailShop title='Gian hàng An An' value='1234k' rating={4.5} />
                    </View>
                </View>

                <View className={`flex-1`}>
                    {/* <TopBar title={item} /> */}
                    <BtnFilter label={item} />
                </View>

            </ScrollView>


        </SafeAreaView>
    );
};

export default ShopDetailScreen;

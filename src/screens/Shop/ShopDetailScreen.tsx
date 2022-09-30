import { useRoute } from '@react-navigation/native';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import CartBtn from '../../components/buttons/CartBtn';
import SearchBtnHome from '../../components/buttons/SearchBtnHome';
import GoBackBtn from '../../components/buttons/GoBackBtn';
import FilterBtn from '../../components/buttons/FilterBtn';
import IntroductDetailShop from '../../components/ShopDetail/IntroductDetailShop';
import { panelImage } from '../../assets/images';
import TopBar from '../../navigation/TopBar';
import ShopDescription from './ShopDescription';
import CategoriesOfShop from './CategoriesOfShop';
import ProductsOfShop from './ProductsOfShop';
import { useNavigation } from '@react-navigation/native';
import { Tabs } from 'react-native-collapsible-tab-view'
import { data } from '../../Data/Data';
import SortOption from '../../components/sortOption/sortOption';


const HEADER_HEIGHT = 250
const item = [
    { id: 1, name: 'Cửa hàng', component: ShopDescription },
    { id: 2, name: 'Sản phẩm', component: ProductsOfShop },
    { id: 3, name: 'Danh mục hàng', component: CategoriesOfShop }
]

// const item = [
//     { id: 1, title: 'Cửa hàng', component: ShopDescription },
//     { id: 2, title: 'Sản phẩm', component: ProductsOfShop },
//     { id: 3, title: 'Danh mục hàng', component: CategoriesOfShop }
// ]

const renderNavBar = () => (
    <View>
        <View className="flex-row justify-between p-5 absolute z-10 w-full">
            <GoBackBtn
                style="py-3 bg-black-opacity rounded-lg w-10 items-center justify-center"
                color="white"
                size={25}
            />
            <SearchBtnHome placeholder='Tìm kiếm' style='text-white' color='white' onPress={() => navigation.navigate('Search')} />
            <View className="flex-row">
                <FilterBtn color="white" style='text-white' />
                <CartBtn
                    color="white"
                    style="border border-white justify-center px-3 ml-3 rounded-lg"
                />
            </View>
        </View>

        <Image
            source={require('../../images/shop.png')}
            className="w-full h-48 bg-blue-400"
        />
        <View className=" p-5 absolute top-20 flex-row">
            <Image source={require('../../images/avatar.png')} />
            <View className={`ml-5`}>
                <IntroductDetailShop title='Gian hàng An An' value='1234k' rating={4.5} />
            </View>
        </View>

    </View>
)

const ShopDetailScreen: React.FC = () => {
    const route = useRoute();
    const { id } = route.params;
    const navigation = useNavigation()

    return (
        <SafeAreaView className="bg-white flex-1">
            <ScrollView className="bg-white flex-1">


                <View className='flex-none'>
                    <View className="flex-row justify-between p-5 absolute z-10 w-full">
                        <GoBackBtn
                            style="py-3 bg-black-opacity rounded-lg w-10 items-center justify-center"
                            color="white"
                            size={25}
                        />
                        <SearchBtnHome placeholder='Tìm kiếm' style='text-white' color='white' onPress={() => navigation.navigate('Search')} />
                        <View className="flex-row">
                            <FilterBtn color="white" style='text-white' />
                            <CartBtn
                                color="white"
                                style="border border-white justify-center px-3 ml-3 rounded-lg"
                            />
                        </View>
                    </View>

                    <Image
                        source={require('../../images/shop.png')}
                        className="w-full h-48 bg-blue-400"
                    />
                    <View className=" p-5 absolute top-20 flex-row">
                        <Image source={require('../../images/avatar.png')} />
                        <View className={`ml-5`}>
                            <IntroductDetailShop title='Gian hàng An An' value='1234k' rating={4.5} />
                        </View>
                    </View>

                </View>
                <View className={`flex-1 h-screen`}>
                    <TopBar title={item} />
                </View>
                {/* <View>
                    <SortOption label={item} />
                </View> */}
            </ScrollView>

        </SafeAreaView>


    );
};

export default ShopDetailScreen;

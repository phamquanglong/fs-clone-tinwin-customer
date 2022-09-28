
import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import CartBtn from '../../components/buttons/CartBtn';
import SearchBtnHome from '../../components/buttons/SearchBtnHome';
import CategoriesContainer from '../../components/categories/CategoriesContainer';
import HomeHeader from '../../components/home/HomeHeader';
import WalletCard from '../../components/home/WalletCard';
import ProductsContainer from '../../components/product/ProductsContainer';

export const data = [
  {
    id: 1,
    image: require('../../assets/logoTinwinPrimary.png'),
    name: 'Tinwin',
    price: '200.000đ',
    rating: 4,
  },
  {
    id: 2,
    image: require('../../assets/logoTinwinPrimary.png'),
    name: 'Tinwin',
    price: '600.000đ',
    rating: 3.5,
  },
  {
    id: 3,
    image: require('../../assets/logoTinwinPrimary.png'),
    name: 'Tinwin',
    price: '100.000đ',
    rating: 3.2,
  },
  {
    id: 4,
    image: require('../../assets/logoTinwinPrimary.png'),
    name: 'Tinwin',
    price: '120.000đ',
    rating: 4.1,
  },
  {
    id: 5,
    image: require('../../assets/logoTinwinPrimary.png'),
    name: 'Tinwin',
    price: '50.000đ',
    rating: 4.7,
  },
  {
    id: 6,
    image: require('../../assets/logoTinwinPrimary.png'),
    name: 'Tinwin',
    price: '400.000đ',
    rating: 5,
  },
  {
    id: 7,
    image: require('../../assets/logoTinwinPrimary.png'),
    name: 'Tinwin',
    price: '200.000đ',
    rating: 2.6,
  },
  {
    id: 8,
    image: require('../../assets/logoTinwinPrimary.png'),
    name: 'Tinwin',
    price: '100.000đ',
    rating: 5,
  },
];


const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  return (

    <SafeAreaView className="bg-white h-full">
      <HomeHeader />
      <View className="flex-row mx-3">
        <SearchBtnHome onPress={() => navigation.navigate('Search')} />
        <CartBtn
          color="#FD7D00"
          style="border border-gray-200 justify-center px-3 ml-3 rounded-lg"
        />
      </View>
      <ScrollView>
        <WalletCard />

        <CategoriesContainer
          textBtn=""
          flatlistStyle={{
            width: 500,
            flexWrap: 'wrap',
          }}
          title="Ngành hàng"
          icon={require('../../assets/icons/home/industry.png')}
          data={data}
        />

        <CategoriesContainer
          textBtn="Xem thêm"
          flatlistStyle={{
            width: 750,
            flexWrap: 'wrap',
          }}
          title="Gian hàng nổi bật"
          icon={require('../../assets/icons/home/stall.png')}
          data={data}
          style="items-center mb-5 "
        />

        <ProductsContainer
          textBtn="Xem thêm"
          data={data}
          title="Sản phẩm nổi bật"
          icon={require('../../assets/icons/home/outstanding.png')}
        />

        <ProductsContainer
          flatlistStyle={{ justifyContent: 'space-evenly' }}
          textBtn="Xem thêm"
          data={data}
          title="Tìm kiếm hàng đầu"
          icon={require('../../assets/icons/home/industry.png')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

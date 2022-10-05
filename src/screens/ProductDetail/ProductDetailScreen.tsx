import { useState } from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useRoute } from '@react-navigation/native';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import BtnBorder from '../../components/BtnBorder';
import BtnPrimary from '../../components/BtnPrimary';
import CartBtn from '../../components/buttons/CartBtn';
import GoBackBtn from '../../components/buttons/GoBackBtn';
import SearchBtn from '../../components/buttons/SearchBtn';
import ProductDetailContainer from '../../components/productDetail/ProductDetailContainer';
import ProductInfoContainer from '../../components/productDetail/ProductInfoContainer';
import RatingContainer from '../../components/productDetail/RatingContainer';
import StallAccount from '../../components/stall/StallAccount';
import useAddToWishlist from '../../hooks/wishlist/useAddToWishlist';
import useGetProductById from '../../hooks/productDetail/useGetProductById';
import { data } from '../home/HomeScreen';

const ProductDetailScreen: React.FC = () => {
  const route = useRoute();
  const { id } = route.params;
  const dispatchAddToWishlist = useAddToWishlist();
  const product = useGetProductById(id, data);

  const arr = [
    {
      id: 1,
      text: 'Thương hiệu',
      value: 'Xiaomi',
    },
    {
      id: 2,
      text: 'Nhà sản xuất',
      value: 'Xiaomi',
    },
    {
      id: 3,
      text: 'Hạn sử dụng',
      value: 'DD/MM/YYYY',
    },
    {
      id: 4,
      text: 'Kích thước đóng gói',
      value: '24 x 24 x 53 cm',
    },
    {
      id: 5,
      text: 'Trọng lượng sản phẩm',
      value: '7kg',
    },
    {
      id: 6,
      text: 'Đơn vị',
      value: 'Chiếc',
    },
  ];

  const addToCart = () => {
    dispatchAddToWishlist({ ...product, quantity: 1 });
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="flex-row justify-between p-5 absolute z-10 w-full">
          <GoBackBtn
            style="py-3 px-6 bg-black-opacity rounded-lg w-10 items-center justify-center"
            color="white"
          />
          <View className="flex-row">
            <SearchBtn
              style="py-3 px-6 bg-black-opacity rounded-lg w-10 items-center justify-center"
              color="white"
            />
            <CartBtn
              color="white"
              style="bg-black-opacity p-3 rounded-lg ml-3"
            />
          </View>
        </View>
        <Image
          source={require('../../assets/logoTinwinPrimary.png')}
          className="w-full h-80 bg-blue-400"
        />
        <ProductInfoContainer />
        <StallAccount />
        <ProductDetailContainer
          arr={arr}
          icon={faInfoCircle}
          title="Thông tin chi tiết"
        />
        <ProductDetailContainer
          text="Mô tả sản phẩm"
          icon={faInfoCircle}
          title="Mô tả sản phẩm"
        />
        <RatingContainer />
      </ScrollView>
      <View className="flex-row m-3">
        <BtnBorder
          text="Thêm vào giỏ"
          style="p-3 flex-1 items-center mr-3"
          onPress={addToCart}
        />
        <BtnPrimary text="Mua ngay" style="px-16 py-3" />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

import { useState } from 'react';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import useConvertToVND from '../../hooks/useConvertToVND';
import useAddToWishlist from '../../hooks/wishlist/useAddToWishlist';
import BtnIcon from '../BtnIcon';
import useShowNotification from '../../hooks/useShowNotification';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { NAVIGATE_PRODUCT_DETAIL } from '../../navigation/navigate';
import tw from 'tailwind-react-native-classnames';

interface Props {
  item: object;
}

const ProductCard: React.FC<Props> = (props: Props) => {
  const navigation = useNavigation();
  const { item } = props;

  const dispatchAddToWishlist = useAddToWishlist();

  const navigateProductDetail = () => {
    navigation.navigate(NAVIGATE_PRODUCT_DETAIL, { id: item.id });
  };

  const addToCart = () => {
    dispatchAddToWishlist({ ...item, quantity: 1 });
  };

  return (
    <TouchableOpacity
      onPress={navigateProductDetail}
      className="p-3 border border-gray-200 rounded-lg mb-3 w-44">
      <Image source={item.image} className={`w-full h-32`} />
      <Text className="text-lg font-medium text-black">{item.name}</Text>
      <Text>Đã bán 200</Text>
      <Rating
        style={tw`items-start mt-3`}
        type="star"
        startingValue={item.rating}
        imageSize={10}
        readonly
        ratingCount={5}
      />
      <Text className="text-orange-primary text-xl font-bold my-2">
        {useConvertToVND(item.price)}
      </Text>
      <View className="flex-row justify-between">
        <TouchableOpacity className=" rounded-lg px-4 py-2 bg-orange-100">
          <Text className="text-black">Mua ngay</Text>
        </TouchableOpacity>
        <BtnIcon icon={faCartArrowDown} style="py-2 px-4" onPress={addToCart} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import AddressItem from '../../components/address/AddressItem';
import BtnPrimary from '../../components/BtnPrimary';
import CartContainer from '../../components/cart/CartContainer';
import SelectAllCartItem from '../../components/cart/SelectAllCartItem';
import HeaderStack from '../../components/HeaderStack';
import useDefaultAddress from '../../hooks/useDefaultAddress';
import useDeleteAllWishlist from '../../hooks/wishlist/useDeleteAllWishlist';
import {NAVIGATE_CART_ADDRESS} from '../../navigation/navigate';
import {getWishlistState} from '../../redux/wishlist/selectors';

const CartScreen: React.FC = () => {
  const wishlistSelector = useSelector(getWishlistState);

  const wishlist = wishlistSelector.wishlist;
  const navigation = useNavigation();
  const deleteAllWishlist = useDeleteAllWishlist();
  const {defaultAddress} = useDefaultAddress();

  const navigateCartAddress = () => {
    navigation.navigate(NAVIGATE_CART_ADDRESS);
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <HeaderStack text="Giỏ hàng" isGoback={true} />
      <ScrollView className="h-full">
        <AddressItem
          id={defaultAddress.id}
          icon={require('../../assets/icons/account/location.png')}
          address={defaultAddress.address}
          name={defaultAddress.name}
          phone={defaultAddress.phone}
          onPress={navigateCartAddress}
        />
        {wishlist.length > 0 ? (
          <View>
            <SelectAllCartItem
              title="Tất cả"
              iconRight={faTrash}
              onPress={() => deleteAllWishlist()}
            />
            <View className="h-0.5 bg-gray-200" />
            <CartContainer data={wishlist} title="Xiaomi Viêtj Nam" />
          </View>
        ) : (
          <View className="h-96 items-center justify-center">
            <Text>Không có sản phẩm nào trong giỏ</Text>
          </View>
        )}
      </ScrollView>
      <View className="m-3">
        <View className="my-3">
          <Text>Tổng cộng</Text>
        </View>
        <BtnPrimary text="Mua hàng" style="p-3 items-center" />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

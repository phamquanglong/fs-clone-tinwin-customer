import { Image, ImageSourcePropType, Text, TouchableOpacity } from 'react-native';
import { NAVIGATE_SHOP_DETAIL } from '../../navigation/navigate';
import { useNavigation } from '@react-navigation/native';

interface Props {
  item: object

}

const StallCard: React.FC<Props> = (props: Props) => {
  const { item } = props;
  const navigation = useNavigation()
  const onPressRoute = () => {
    navigation.navigate(NAVIGATE_SHOP_DETAIL, { id: item.id })
  }
  return (
    <TouchableOpacity onPress={onPressRoute} className="items-center m-3" >
      <Image source={item.image} className="bg-blue-300 h-28 w-40 rounded-lg" />
      <Text className="text-black">{item.name}</Text>
    </TouchableOpacity>
  );
};

export default StallCard;

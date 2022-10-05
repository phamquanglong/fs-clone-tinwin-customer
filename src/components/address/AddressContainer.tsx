import {useNavigation} from '@react-navigation/native';
import {FlatList, ImageSourcePropType} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {NAVIGATE_ADD_NEW_ADDRESS} from '../../navigation/navigate';
import AddressItem from './AddressItem';

interface Props {
  data: object[];
  icon?: ImageSourcePropType;
  setValue?: React.Dispatch<React.SetStateAction<any>>;
}

const AddressContainer: React.FC<Props> = (props: Props) => {
  const {data, icon, setValue} = props;

  const navigation = useNavigation();

  const onPress = (item: object) => {
    icon !== undefined
      ? navigation.navigate(NAVIGATE_ADD_NEW_ADDRESS, {
          title: 'Sửa địa chỉ',
          item: {
            name: item.name,
            phone: item.phone,
            address: item.address,
          },
        })
      : setValue(item.id);
  };

  const renderItem = ({item}) => (
    <AddressItem
      id={item.id}
      icon={icon}
      onPress={() => onPress(item)}
      name={item.name}
      phone={item.phone}
      address={item.address}
    />
  );

  return (
    <FlatList
      className="relative z-0"
      contentContainerStyle={tw`h-full`}
      data={data}
      keyExtractor={key => key.id}
      renderItem={renderItem}
    />
  );
};

export default AddressContainer;

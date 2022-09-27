import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  onPress?: () => void;
  placeholder?: string;
  style?: string
  color?: string
}

const SearchBtnHome: React.FC<Props> = (props: Props) => {
  const { onPress, placeholder, style, color } = props;

  return (
    <TouchableOpacity
      className="flex-row flex-1 border border-gray-200 rounded-lg p-3 items-center"
      onPress={onPress}>
      <FontAwesomeIcon icon={faSearch} color={color} />
      <Text className={style}>{placeholder ? placeholder : 'Nhập từ khoá tìm kiếm'}</Text>
    </TouchableOpacity>
  );
};

export default SearchBtnHome;

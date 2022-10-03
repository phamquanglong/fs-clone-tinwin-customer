import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Text, TextInput, View} from 'react-native';

interface Props {
  title?: string;
  placeholder: string;
  style?: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<any>>;
  keyboardType?: string;
}

const InputItem: React.FC<Props> = (props: Props) => {
  const {title, placeholder, style, value, setValue, keyboardType} = props;

  return (
    <View className={style}>
      {title !== undefined && (
        <Text className="my-2">
          {title}
          <Text className="text-red-danger">*</Text>
        </Text>
      )}

      {placeholder === 'Nhập từ khoá tìm kiếm' && (
        <View className="absolute justify-center h-full left-3">
          <FontAwesomeIcon icon={faSearch} />
        </View>
      )}
      <TextInput
        maxLength={keyboardType !== undefined ? 10 : undefined}
        keyboardType={keyboardType}
        onChangeText={e => setValue !== undefined && setValue(e)}
        value={value}
        placeholder={placeholder}
        className={`border border-gray-200 p-3 rounded-lg ${
          placeholder === 'Nhập từ khoá tìm kiếm' && 'pl-10'
        }`}
      />
    </View>
  );
};

export default InputItem;

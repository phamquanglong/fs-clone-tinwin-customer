import {Text, View} from 'react-native';

interface Props {
  text: string;
  value: string;
  index: number;
}

const InfoDetailItem: React.FC<Props> = (props: Props) => {
  const {text, value, index} = props;

  return (
    <View
      className={`flex-row justify-between p-3 px-5 ${
        index % 2 == 1 ? 'bg-white' : 'bg-gray-100'
      }`}>
      <Text className="text-gray-600">{text}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default InfoDetailItem;

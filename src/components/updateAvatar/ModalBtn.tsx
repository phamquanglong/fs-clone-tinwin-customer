import { Text, TouchableOpacity } from 'react-native';

interface Props {
  color?: string;
  textColor?: string;
  text: string;
  onPress?: () => void;
}

const ModalBtn: React.FC<Props> = (props: Props) => {
  const { color, text, onPress, textColor } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`p-3 bg-${color} m-2 rounded-lg items-center`}>
      <Text className={`text-${textColor} text-lg`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ModalBtn;

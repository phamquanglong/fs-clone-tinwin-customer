import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  style?: string;
  onPress?: () => void;
  text: string;
}

const BtnPrimary: React.FC<Props> = (props: Props) => {
  const { text, style, onPress } = props;

  return (
    <LinearGradient
      className={`${style} rounded-md`}
      colors={['#FD7D00', '#FEB336']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      locations={[0, 1]}
    >

      <TouchableOpacity className={`m-3`} onPress={onPress}>
        <Text className="text-white text-base font-semibold">{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default BtnPrimary;

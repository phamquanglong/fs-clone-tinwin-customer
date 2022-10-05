import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../assets/colors';
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
      className={`rounded-md`}
      colors={[colors.primary, colors.primaryToGradient]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      locations={[0, 1]}>
      <TouchableOpacity className={style} onPress={onPress}>
        <Text className="text-white">{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default BtnPrimary;

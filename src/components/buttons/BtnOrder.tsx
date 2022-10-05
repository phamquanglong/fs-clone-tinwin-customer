import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {orangeDark, orangeLight, white} from '../../constant/const';

interface Props {
  style: string;
  onPress?: () => void;
  prop?: object;
  content: string;
}

const BtnOrder: React.FC<Props> = props => {
  const {content, style, onPress, prop} = props;

  return (
    <LinearGradient
      className={`${style} rounded-md`}
      colors={[orangeLight, orangeDark]}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      locations={[0, 1]}>
      <TouchableOpacity className="p-3" onPress={onPress} {...prop}>
        <Text style={styles1.text}>{content}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
const styles1 = StyleSheet.create({
  text: {
    color: white,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
  },
});
export default BtnOrder;

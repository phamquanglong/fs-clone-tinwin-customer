import {SafeAreaView, ScrollView, Text} from 'react-native';
import CardOrder from '../../components/cards/CardOrder';

const WaitComfirm: React.FC = () => {
  return (
    <ScrollView>
      <CardOrder titleBtn="Hủy đơn"></CardOrder>
      <CardOrder titleBtn="Hủy đơn"></CardOrder>
      <CardOrder titleBtn="Hủy đơn"></CardOrder>
    </ScrollView>
  );
};

export default WaitComfirm;

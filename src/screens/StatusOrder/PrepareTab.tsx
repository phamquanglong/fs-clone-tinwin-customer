import {ScrollView} from 'react-native';
import CardOrder from '../../components/cards/CardOrder';

const Prepare: React.FC = () => {
  return (
    <ScrollView>
      <CardOrder titleBtn="Hủy đơn"></CardOrder>
      <CardOrder titleBtn="Hủy đơn"></CardOrder>
      <CardOrder titleBtn="Hủy đơn"></CardOrder>
    </ScrollView>
  );
};

export default Prepare;

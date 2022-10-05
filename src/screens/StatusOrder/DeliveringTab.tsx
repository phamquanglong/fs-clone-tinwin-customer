import {ScrollView} from 'react-native';
import CardOrder from '../../components/cards/CardOrder';

const Delivering: React.FC = () => {
  return (
    <ScrollView>
      <CardOrder titleBtn="Đã nhận"></CardOrder>
      <CardOrder titleBtn="Đã nhận"></CardOrder>
      <CardOrder titleBtn="Đã nhận"></CardOrder>
    </ScrollView>
  );
};

export default Delivering;

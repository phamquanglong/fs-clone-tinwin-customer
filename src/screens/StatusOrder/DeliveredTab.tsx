import {ScrollView} from 'react-native';
import CardOrder from '../../components/cards/CardOrder';

const Delivered: React.FC = () => {
  return (
    <ScrollView>
      <CardOrder titleBtn="Mua lại" btnPrimary="Đánh giá"></CardOrder>
      <CardOrder titleBtn="Mua lại"></CardOrder>
      <CardOrder titleBtn="Mua lại"></CardOrder>
    </ScrollView>
  );
};

export default Delivered;

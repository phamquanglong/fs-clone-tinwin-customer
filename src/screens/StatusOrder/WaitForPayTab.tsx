import {ScrollView} from 'react-native';
import CardOrder from '../../components/cards/CardOrder';

const WaitPay: React.FC = () => {
  return (
    <ScrollView>
      <CardOrder titleBtn="Thanh toán ngay"></CardOrder>
      <CardOrder titleBtn="Thanh toán ngay"></CardOrder>
      <CardOrder titleBtn="Thanh toán ngay"></CardOrder>
    </ScrollView>
  );
};

export default WaitPay;

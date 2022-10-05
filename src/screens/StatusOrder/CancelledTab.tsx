import {ScrollView} from 'react-native';
import CardOrder from '../../components/cards/CardOrder';

const Cancel: React.FC = () => {
  return (
    <ScrollView>
      <CardOrder titleBtn="Mua lại"></CardOrder>
      <CardOrder titleBtn="Mua lại"></CardOrder>
      <CardOrder titleBtn="Mua lại"></CardOrder>
    </ScrollView>
  );
};

export default Cancel;

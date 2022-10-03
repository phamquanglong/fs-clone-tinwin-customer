import {useState} from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {colors} from '../assets/colors';
import tw from 'tailwind-react-native-classnames';

interface Props {
  text: string;
  style?: string;
  onChange?: void;
  icon?: IconProp;
}

const CheckBoxItem: React.FC<Props> = (props: Props) => {
  const {text, style, onChange, icon} = props;
  const [isChecked, setIsChecked] = useState(false);

  const onChangeCheck = () => {
    setIsChecked(!isChecked);
    onChange !== undefined && onChange();
  };

  return (
    <View className={`flex-row items-center ${style}`}>
      <CheckBox
        boxType="square"
        style={tw`mr-1`}
        onChange={onChangeCheck}
        value={isChecked}
        tintColor={colors.primary}
        tintColors={{true: colors.primary, false: colors.disable}}
      />
      <FontAwesomeIcon icon={icon} style={tw`mr-2`} />
      <Text className="text-black">{text}</Text>
    </View>
  );
};

export default CheckBoxItem;

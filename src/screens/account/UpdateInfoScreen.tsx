import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import BtnPrimary from '../../components/BtnPrimary';
import HeaderStack from '../../components/HeaderStack';
import InputItem from '../../components/InputItem';

const UpdateInfoScreen: React.FC = () => {
  const route = useRoute();
  const { value, setValue, id } = route.params;

  const navigation = useNavigation();

  const [val, setVal] = useState('');

  useEffect(() => {
    setVal(value);
  }, []);

  const onConfirm = () => {
    setValue(val);
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <HeaderStack text="Chỉnh sửa thông tin" isGoback={true} />
      <InputItem
        style="mx-3"
        value={val}
        placeholder=""
        setValue={setVal}
        keyboardType={id === 4 ? 'number-pad' : undefined}
      />

      <View className="m-3">
        <BtnPrimary
          text="Xác nhận"
          style="p-3 items-center"
          onPress={onConfirm}
        />
      </View>
    </SafeAreaView>
  );
};

export default UpdateInfoScreen;

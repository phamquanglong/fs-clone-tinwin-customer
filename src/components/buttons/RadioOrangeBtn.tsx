import {StyleSheet, View} from 'react-native';
import {anotherOrange, grey} from '../../constant/const';

export function RadioOrangeBtn(props: any) {
  return (
    <View
      style={[
        {
          height: 20,
          width: 20,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: props.selected ? anotherOrange : grey,
          alignItems: 'center',
          justifyContent: 'center',
        },
        props.style,
      ]}>
      {props.selected ? <View style={style.text} /> : null}
    </View>
  );
}
const style = StyleSheet.create({
  text: {
    height: 10,
    width: 10,
    borderRadius: 6,
    backgroundColor: anotherOrange,
  },
});

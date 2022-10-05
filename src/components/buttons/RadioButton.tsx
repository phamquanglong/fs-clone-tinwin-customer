import {StyleSheet, View} from 'react-native';
import {grey} from '../../constant/const';

export function RadioButton(props: any) {
  return (
    <View style={[props.style, style.border]}>
      {props.selected ? <View style={style.inline} /> : null}
    </View>
  );
}

const style = StyleSheet.create({
  border: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inline: {
    height: 10,
    width: 10,
    borderRadius: 6,
    backgroundColor: grey,
  },
});

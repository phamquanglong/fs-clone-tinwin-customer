import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React from 'react';
import BtnOrder from '../../components/buttons/BtnOrder';
import {
  red,
  black,
  blueGrey,
  darkBlue,
  darkGrey,
  grey,
  moreLightGrey,
  orangeDark,
  orangeLight,
  colorTextTitleNotifi,
  white,
  anotherGrey,
} from '../../constant/const';
type Props = {};

const DebitCard = (props: Props) => {
  return (
    <SafeAreaView>
      <View style={style1.title}>
        <Text style={style1.textTitle}>Thông tin thẻ</Text>
        <View style={style1.boxCard}>
          <Image
            source={require('../../assets/payment/cc-visa.png')}
            style={style1.imageCard}></Image>
          <Image
            source={require('../../assets/payment/cc-mastercard.png')}
            style={style1.imageCard}></Image>
          <Image
            source={require('../../assets/payment/cc-jcb.png')}
            style={style1.imageCard}></Image>
        </View>
      </View>
      <View style={style1.container}>
        <View style={style1.h88}>
          <Text style={style1.textInput}>
            Số thẻ<Text style={style1.redText}>*</Text>
          </Text>
          <View
            className={`flex-row  h-[45px] py-3.5 rounded-lg border-solid border-[1px] border-gray-200 px-3.5 mb-2`}
            style={style1.w100}>
            <TextInput
              className={`pl-2`}
              placeholder={'Nhập số in trên thẻ'}
              autoCapitalize="none"
            // onChangeText={text => setSearchText(text)}

            // value={searchText}
            />
          </View>
          <Text style={[style1.textInput, style1.margin]}>
            Tên chủ thẻ<Text style={style1.redText}>*</Text>
          </Text>
          <View
            className={`flex-row  h-[45px] py-3.5 rounded-lg border-solid border-[1px] border-gray-200 px-3.5`}
            style={style1.w100}>
            <TextInput
              className={`pl-2`}
              placeholder={'Nhập tên in trên thẻ'}
              autoCapitalize="none"
            // onChangeText={text => setSearchText(text)}

            // value={searchText}
            />
          </View>

          <View style={style1.flex}>
            <View>
              <Text style={[style1.textInput, style1.margin]}>
                Ngày hết hạn<Text style={style1.redText}>*</Text>
              </Text>
              <View
                className={`flex-row  h-[45px] py-3.5 rounded-lg border-solid border-[1px] border-gray-200 px-3.5`}
                style={style1.w}>
                <TextInput
                  className={`pl-2`}
                  placeholder={'Nhập ngày hết hạn'}
                  autoCapitalize="none"
                // onChangeText={text => setSearchText(text)}

                // value={searchText}
                />
              </View>
            </View>
            <View>
              <Text style={[style1.textInput, style1.margin]}>
                CCV<Text style={style1.redText}>*</Text>
              </Text>
              <View
                className={`flex-row  h-[45px] py-3.5 rounded-lg border-solid border-[1px] border-gray-200 px-3.5`}
                style={style1.w1}>
                <TextInput
                  className={`pl-2`}
                  placeholder={'Nhập mã'}
                  autoCapitalize="none"
                // onChangeText={text => setSearchText(text)}

                // value={searchText}
                />
              </View>
            </View>
          </View>
        </View>
        <BtnOrder content="Thêm thẻ" />
      </View>
    </SafeAreaView>
  );
};
const style1 = StyleSheet.create({
  title: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 7,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: colorTextTitleNotifi,
  },
  boxCard: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageCard: { width: 23, height: 18 },
  container: {
    backgroundColor: white,
    paddingBottom: 30,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 30,
    height: '100%',
  },
  h88: { height: '88%' },
  textInput: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: anotherGrey,
    marginBottom: 5,
  },
  margin: {
    marginBottom: 5,
    marginTop: 10,
  },
  redText: { color: red },
  flex: { flexDirection: 'row', justifyContent: 'space-between' },
  w: { width: 181 },
  w1: { width: 136 },
  w100: { width: '100%' },
});
export default DebitCard;

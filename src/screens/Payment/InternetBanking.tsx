import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from '../StatusOrder/style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {anotherGrey, colorBoxBank, darkerGrey} from '../../constant/const';

type Props = {};

const InternetBanking = (props: Props) => {
  return (
    <View style={styles.card}>
      <View
        className={`flex-row  h-[45px] py-3.5 rounded-lg border-solid border-[1px] border-gray-200 px-3.5`}
        style={style1.w100}>
        <FontAwesomeIcon icon={faMagnifyingGlass} color={anotherGrey} />

        <TextInput
          className={`pl-2`}
          placeholder={'Tìm kiếm'}
          autoCapitalize="none"
          // onChangeText={text => setSearchText(text)}

          // value={searchText}
        />
      </View>
      <View style={style1.viewBox}>
        <View style={style1.boxBank}>
          <Image
            source={require('../../assets/payment/Techcombank.png')}
            style={style1.imgBank}
          />
          <Text style={style1.nameBank}>Bank Name</Text>
        </View>
        <View style={style1.boxBank}></View>
        <View style={style1.boxBank}></View>
        <View style={style1.boxBank}></View>
      </View>
    </View>
  );
};
const style1 = StyleSheet.create({
  boxBank: {
    width: '30%',
    height: 107,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colorBoxBank,
    marginTop: 11,
    justifyContent: 'center',
  },
  nameBank: {
    alignSelf: 'center',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    color: darkerGrey,
  },
  imgBank: {alignSelf: 'center', width: 48, height: 48},
  viewBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  w100: {width: '100%'},
});
export default InternetBanking;

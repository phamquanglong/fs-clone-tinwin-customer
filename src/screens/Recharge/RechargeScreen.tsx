import { SafeAreaView, Text, TextInput, View, } from 'react-native';
import React, { useState } from 'react';
import GoBackBtn from '../../components/buttons/GoBackBtn';
import CardMoney from '../../components/CardMoney/CardMoney';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import HandleRadioButton from '../../components/Radio/RadioButton';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';



const radioButtonsData: RadioButtonProps[] = [
    {
        id: '1',
        label: [<FontAwesomeIcon icon={faBuildingColumns} color={'#FC832D'} size={20} />, 'Ngân hàng nội địa'],
        value: 'Ngân hàng nội địa'
    },
    {
        id: '2',
        label: [<FontAwesomeIcon icon={faCreditCard} color={'#FC832D'} size={20} />, 'Thẻ tín dụng/Ghi nợ'],
        value: 'Thẻ tín dụng/Ghi nợ'
    }]

const RechargeScreen: React.FC = () => {

    return (
        <SafeAreaView className={`bg-white flex-1`}>
            <View className={`flex-row items-center`}>
                <GoBackBtn style="py-3 px-6"
                    color="#1F1F1F"
                    size={20} />
                <Text className={`text-[#48484A] text-lg font-bold ml-6`}>Nạp tiền đến ví TinWin</Text>
            </View>
            <View className={`mt-7`}>
                <CardMoney />
            </View>
            <View className={`bg-backgroundBreak h-2`}></View>
            <View className={`mt-7 ml-6`}>
                <Text className={`text-[#636366] text-xs font-medium`}>Số tiền (Số dư 123.000đ)</Text>
                <TextInput className={`h-12 text-3xl font-semibold`} placeholder='Nhập số tiền' />
            </View>
            <View className={`bg-backgroundBreak h-8 justify-center pl-6`}>
                <Text>Chọn phương thức nạp tiền</Text>
            </View>
            <View>
                {/* <RadioGroup
                    radioButtons={radioButtons}
                    onPress={onPressRadioButton}
                    containerStyle={{ color: '#FC832D' }}

                /> */}
                <HandleRadioButton value={radioButtonsData} />
            </View>

        </SafeAreaView>
    );
};

export default RechargeScreen;

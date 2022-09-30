import { SafeAreaView, Text, View, TextInput } from 'react-native';

interface money {
    value: number
}

const MoneyInput: React.FC<money> = (props) => {
    const { value } = props
    return (
        <SafeAreaView>
            <View className={`mt-7 ml-6`}>
                <Text className={`text-[#636366] text-xs font-medium`}>Số tiền (Số dư 123.000đ)</Text>
                <TextInput className={`h-16 text-3xl font-semibold text-[#FD7D00]`} placeholder='Nhập số tiền' value={value.toString()} />
            </View>
        </SafeAreaView>
    );
};

export default MoneyInput;

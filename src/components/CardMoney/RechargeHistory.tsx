import { FlatList, ListRenderItem, SafeAreaView, Text, View } from 'react-native';

interface history {
    id: number
    type: string
    time: string
    money: number
    root: string
}
const data = [
    {
        id: 0,
        type: 'Nạp tiền vào ví',
        money: 100000,
        time: '21-04-2022 11:37',
        root: '(VNPAY)'
    },
    {
        id: 1,
        type: 'Thanh toán',
        money: -100000,
        time: '21-04-2022 11:37',

    },
    {
        id: 2,
        type: 'Thanh toán',
        money: -200000,
        time: '21-04-2022 11:37',

    },
    {
        id: 3,
        type: 'Nạp tiền vào ví',
        money: 100000,
        time: '21-04-2022 11:37',
        root: '(VNPAY)'
    },
    {
        id: 4,
        type: 'Hoàn tiền',
        money: 200000,
        time: '21-04-2022 11:37',
        root: '(VNPAY)'
    },
    {
        id: 5,
        type: 'Thanh toán',
        money: -300000,
        time: '21-04-2022 11:37',
        root: '(VNPAY)'
    },
    {
        id: 6,
        type: 'Nạp tiền vào ví',
        money: 500000,
        time: '21-04-2022 11:37',
        root: '(Ví Tinwin)'
    }
]

const RechargeHistory: React.FC<history> = (props) => {
    const style = (item: history) => {
        const color = item.money > 0 ? 'text-[#34C759]' : 'text-[#3A3A3C]'
        const trans = item.money > 0 ? '+' : ''
        return { color, trans }
    }



    const renderItem: ListRenderItem<history> = (item) => (
        <View className='flex-row justify-between px-4 mt-6'>
            <View >
                <Text className={`text-[#3A3A3C] text-base`}>{item.item.type}</Text>
                <Text className={`text-[#AEAEB2] text-xs`}>{item.item.time}</Text>
            </View>
            <View>
                <Text className={`text-base ${style(item.item).color}`}>{style(item.item).trans}{item.item.money} vnđ</Text>
                <Text className={`text-right text-[#AEAEB2] text-xs`}>{item.item.root}</Text>
            </View>
        </View>
    )
    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={renderItem} />
        </SafeAreaView>
    );
};

export default RechargeHistory;

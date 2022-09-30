import { SafeAreaView, Text, View } from 'react-native';
import GoBackBtn from '../../components/buttons/GoBackBtn';
import RechargeHistory from '../../components/CardMoney/RechargeHistory';

const data = [
    {
        id: 0,
        type: 'Nạp tiền vào ví',
        money: '+100,000vnđ',
        time: '21-04-2022 11:37',
        root: '(VNPAY)'
    },
    {
        id: 1,
        type: 'Thanh toán',
        money: '-100,000vnđ',
        time: '21-04-2022 11:37',

    },
    {
        id: 2,
        type: 'Thanh toán',
        money: '-200,000vnđ',
        time: '21-04-2022 11:37',

    },
    {
        id: 3,
        type: 'Nạp tiền vào ví',
        money: '+100,000vnđ',
        time: '21-04-2022 11:37',
        root: '(VNPAY)'
    },
    {
        id: 4,
        type: 'Hoàn tiền',
        money: '+200,000vnđ',
        time: '21-04-2022 11:37',
        root: '(VNPAY)'
    },
    {
        id: 5,
        type: 'Thanh toán',
        money: '-300,000vnđ',
        time: '21-04-2022 11:37',
        root: '(VNPAY)'
    },
    {
        id: 6,
        type: 'Nạp tiền vào ví',
        money: '+500,000vnđ',
        time: '21-04-2022 11:37',
        root: '(Ví Tinwin)'
    }
]

const RechargeHistoryScreen: React.FC = () => {
    return (
        <SafeAreaView className={`flex-1`}>
            <View className={`flex-row items-center`}>
                <GoBackBtn style="py-3 px-6"
                    color="#1F1F1F"
                    size={20} />
                <Text className={`text-[#48484A] text-lg font-bold ml-6`}>Lịch sử giao dịch Ví</Text>
            </View>

            <View>
                <RechargeHistory list={data} />
            </View>

        </SafeAreaView>
    );
};

export default RechargeHistoryScreen;

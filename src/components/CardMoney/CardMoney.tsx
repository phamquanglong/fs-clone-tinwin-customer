import { useState } from 'react';
import MoneyInput from './MoneyInput';
import { FlatList, ListRenderItem, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';


interface cardMoney {
    id: number
    value: number
}

const listCardMoney = [
    { id: 1, value: 100000 },
    { id: 2, value: 200000 },
    { id: 3, value: 300000 },
    { id: 4, value: 500000 },
    { id: 6, value: 1000000 },
    { id: 7, value: 2000000 }
]


const CardMoney: React.FC = () => {

    const [status, setStatus] = useState(0)
    const setStatusFilter = (item: number) => {
        setStatus(item)
    }

    const renderItem: ListRenderItem<cardMoney> = (item) => (

        <TouchableOpacity
            className={`border rounded-lg w-28 h-12 mb-3 justify-center items-center 
        ${status === item.item.value ? 'border-[#FC832D]' : 'border-[#48484A]'}`}
            onPress={() => { setStatusFilter(item.item.value) }}>

            <Text className={`text-[#48484A] text-base font-semibold 
            ${status === item.item.value ? 'text-[#FC832D]' : 'text-[#48484A]'}`}>
                {item.item.value}
            </Text>

        </TouchableOpacity>

    );
    return (
        <SafeAreaView >
            <Text className={`ml-3.5 mb-3 text-[#636366] text-xs font-medium`}>Số tiền nạp</Text>
            <FlatList
                data={listCardMoney}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: 'space-evenly' }}
            />
            <View className={`bg-backgroundBreak h-2`}></View>
            <View>
                <MoneyInput value={status} />
            </View>
        </SafeAreaView>
    );
};

export default CardMoney;

import { useState } from 'react';
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

const Item: React.FC<cardMoney> = (props) => (
    <TouchableOpacity className={`border border-[#D7D7D7] rounded-lg w-28 h-12 mb-3 justify-center items-center`}>
        <Text className={`text-[#48484A] text-base font-semibold`}>{props.value}</Text>
    </TouchableOpacity>
)

const CardMoney: React.FC = () => {

    const [status, setStatus] = useState()
    const setStatusFilter = (item: number) => {
        setStatus(item)
    }

    const renderItem: ListRenderItem<cardMoney> = (item) => (
        <Item id={item.item.id} value={item.item.value} onPress={() => { setStatusFilter }} />
    )
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
        </SafeAreaView>
    );
};

export default CardMoney;

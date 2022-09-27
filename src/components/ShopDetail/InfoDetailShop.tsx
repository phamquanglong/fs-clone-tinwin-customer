import { Text, View } from 'react-native';

interface Props {
    title: string,
    value: string
}

const InfoDetailShop: React.FC<Props> = (props) => {

    return (

        <View className={`flex-row justify-between p-3 px-6`}>
            <Text className={`text-[#636366] text-base font-medium`}>{props.title}</Text>
            <Text className={`text-[#48484A] text-base font-normal max-w-[230px] text-right`}>{props.value}</Text>
        </View>


    );
};

export default InfoDetailShop;

import { FlatList, ImageSourcePropType, Text, View } from 'react-native';
import InfoDetailShop from './InfoDetailShop';
import HomeTitle from '../home/HomeTitle';

interface Props {
    title: string;
    icon: ImageSourcePropType;
    data: object[]
}

const ShopDetailContainer: React.FC<Props> = (props) => {
    const { data } = props

    return (
        <View>
            <HomeTitle title={props.title} icon={props.icon} />
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <InfoDetailShop
                            title={item.title}
                            value={item.value} />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>


        </View>
    );
};

export default ShopDetailContainer;

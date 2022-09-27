import { Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';

interface Props {
    title: string;
    value: string;
    rating: number
}

const IntroductDetailShop: React.FC<Props> = (props: Props) => {
    const { title, value, rating } = props;

    return (
        <View >
            <Text className={`text-base text-white uppercase font-semibold`}>{title}</Text>
            <Text className={`text-[#FC832D] font-semibold text-sm`}>{value} Sản phẩm</Text>
            <View className={`flex-row`}>
                <Rating
                    style={{
                        alignItems: 'flex-start',
                        marginEnd: 5,

                    }}
                    type="star"
                    startingValue={rating}
                    imageSize={13}
                    readonly
                    ratingCount={5}
                    ratingColor='#FD7D00'

                />
                <Text className={`text-[#FEB336]`}>{rating}</Text>
            </View>

        </View>
    );
};

export default IntroductDetailShop;

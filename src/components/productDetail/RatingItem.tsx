import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import tw from 'tailwind-react-native-classnames';

interface Props {
  item?: object;
}

const RatingItem: React.FC<Props> = (props: Props) => {
  const {item} = props;

  return (
    <View className="mb-3">
      <TouchableOpacity className="flex-row items-center">
        <Image
          source={item.image}
          className="bg-blue-400 w-8 h-8 rounded-full"
        />
        <View className="ml-2">
          <Text>{item.name}</Text>
          <Rating
            style={tw`items-start mr-5`}
            type="star"
            startingValue={item.rating}
            imageSize={10}
            readonly
            ratingCount={5}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="ml-10">
        <Text className="my-3">{item.comment}</Text>
        <Text className="text-xs text-gray-600">05-06-2022 11:21</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RatingItem;

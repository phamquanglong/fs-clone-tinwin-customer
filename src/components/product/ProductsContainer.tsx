import { useState } from 'react';
import { FlatList, ImageSourcePropType, View } from 'react-native';
import HomeTitle from '../home/HomeTitle';
import ProductCard from './ProductCard';

interface Props {
  data: object[];
  title?: string;
  icon?: ImageSourcePropType;
  flatlistStyle?: object;
  textBtn?: string;
}

const ProductsContainer: React.FC<Props> = (props: Props) => {
  const { data, icon, title, flatlistStyle, textBtn } = props;

  const [isEnd, setIsEnd] = useState(false);

  return (
    <View className={`flex-1`}>
      <HomeTitle title={title} icon={icon} textBtn={textBtn} />
      <FlatList
        onScrollBeginDrag={() => setIsEnd(false)}
        onEndReached={() => setIsEnd(true)}
        showsHorizontalScrollIndicator={false}
        horizontal={title === 'Sản phẩm nổi bật' ? true : false}
        numColumns={title === 'Sản phẩm nổi bật' ? undefined : 2}
        // contentContainerStyle={flatlistStyle}
        columnWrapperStyle={flatlistStyle}
        data={data}
        keyExtractor={key => key.id}
        renderItem={({ item }) => (
          <View className={`${title === 'Sản phẩm nổi bật' ? 'ml-3' : ''}`}>
            <ProductCard item={item} />
          </View>
        )}
      />

      {title === 'Sản phẩm nổi bật' && (
        <View className="bg-gray-200 w-8 h-1 flex-row rounded-full my-5 self-center">
          <View
            className={`bg-${!isEnd ? 'orange-primary' : 'gray-200'
              } w-1/2 h-1 rounded-full`}></View>
          <View
            className={`bg-${isEnd ? 'orange-primary' : 'gray-200'
              } w-1/2 h-1 rounded-full`}></View>
        </View>
      )}
    </View>
  );
};

export default ProductsContainer;

import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useState } from 'react';
import {

    Image,
    Modal,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,

} from 'react-native';
import BtnBorder from '../BtnBorder';
import BtnPrimary from '../BtnPrimary';
import CloseBtn from './CloseBtn';

interface Props {
    style?: string;
    color?: string;
}
const FilterBtn: React.FC<Props> = (props) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const { style, color } = props;

    return (
        <View>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                className={`border border-gray-200 justify-center px-4 py-4 ml-3 rounded-lg`}>
                <Image source={require('../../assets/icons/filter.png')} style={{ tintColor: color }} />
            </TouchableOpacity>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <SafeAreaView>
                    <View className="h-full bg-white p-3">
                        <View className="flex-row items-center justify-between">
                            <Text className="text-lg font-bold text-black">
                                Bộ lọc tìm kiếm
                            </Text>
                            <CloseBtn onPress={() => setModalVisible(false)} />
                        </View>

                        <ScrollView className="flex-1"></ScrollView>
                        <View className="flex-row">
                            <BtnBorder
                                text="Thiết lập lại"
                                style="p-3 flex-1 items-center mr-3"
                            />
                            <BtnPrimary
                                text="Áp dụng"
                                style="justify-center px-16 items-center flex-1"
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    );

};

export default FilterBtn;

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';


interface Props {
    id: number
    title: string
}

const SortOption: React.FC<Props> = (props) => {
    const { id, title } = props
    return (
        <TouchableOpacity className={`w-28 items-center mt-4 `} key={id}>
            <Text>{title}</Text>
        </TouchableOpacity>

    )
}

export default SortOption
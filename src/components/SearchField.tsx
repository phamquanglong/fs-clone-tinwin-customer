import React, { useEffect, useState } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
    StatusBar
} from "react-native";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


interface TextFieldProps {
    width: number,
    placeholder: string,

}

export const SearchBar: React.FC<TextFieldProps> = ({
    width,
    placeholder = 'Tìm kiếm',

}) => {
    const [searchText, setSearchText] = useState('')

    return (

        <View className={`flex-row  h-[45px] 
        rounded-lg border-solid border-[1px] border-gray-200 px-3.5`}
            style={{ width: width }}
        >
            <StatusBar backgroundColor={'#ffffff'} />
            <View className="pt-3.5">
                <FontAwesomeIcon icon={faMagnifyingGlass} color='#7B7B80' size={18} />
            </View>

            <TextInput

                placeholder={placeholder}
                autoCapitalize='none'
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
            />


            {/* <Text className={style}>{placeholder ? placeholder : 'Nhập từ khoá tìm kiếm'}</Text> */}

        </View >



    )
}
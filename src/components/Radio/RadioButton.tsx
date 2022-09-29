import { useState } from 'react';
import { Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';




interface Props {

    value: object

}

const HandleRadioButton: React.FC<Props> = (props) => {
    const { value } = props;
    const [item, setItem] = useState('')

    return (
        <View className={"ml-6 mb-5 justify-center"}>
            {/* <FontAwesomeIcon icon={icon} /> */}
            <RadioForm
                initial={0}
                radio_props={value}
                onPress={(value) => { setItem(value) }}
                buttonSize={10}
                buttonOuterSize={20}
                selectedButtonColor={'#FC832D'}
                labelStyle={{ fontSize: 20, marginLeft: 10, marginBottom: 32 }}
                style={{ marginTop: 32 }}
                buttonStyle={{ marginTop: 32 }}
                animation={false}
                buttonColor={'#8E8E93'}
            // disabled={false}
            // formHorizontal={false}
            />
        </View>
    );
};

export default HandleRadioButton;

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { Component, useState } from 'react';
import {
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface Props {
    label: object;
}

const RenderItemComponent: React.FC<Props> = props => {
    const { label } = props;


    return (

        <View>
            <label.component />
        </View>

    );
};

export default RenderItemComponent;
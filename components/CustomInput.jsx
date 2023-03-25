import React from "react";
import { View, TextInput } from 'react-native';
import { customInputStyles } from "../styles/CustomInputStyles";
export const CustomInput = ({ onChangeText, maxLength, placeholder, name, inputMode, validation, value }) => {
    return (
        <View style={customInputStyles.container}>
            <TextInput onChangeText={onChangeText} maxLength={maxLength} placeholder={placeholder} inputMode={inputMode} defaultValue={value ?? ''} />
        </View>
    )
}
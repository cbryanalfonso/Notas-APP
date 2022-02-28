import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { TextInput } from "react-native-paper";


export default function InputTxt(props) {
    const [secury, setSecury] = useState(props.secury ? true : false);
    return (
        <TextInput
            mode="outlined"
            label={`${props.placeholder}`}
            outlineColor="#050522"
            activeOutlineColor="#050522"
            right={<Icon name="eye-outline" type="material-community" size={5} color="black"/>}
            placeholderTextColor='#050522'
            autoCapitalize="none"
            onChangeText={props.onChangeText}
            onBlur={props.onBlur}
            value={props.initialValue}
            style={{marginVertical: 7}}
            secureTextEntry={secury}
        />
    )
}
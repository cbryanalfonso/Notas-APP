import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon, Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function EditorNotes({ navigation }) {
    return (
        <KeyboardAwareScrollView style={styles.container}>
            <View style={styles.subContainer}>
                <TouchableOpacity style={styles.botones} onPress={()=> navigation.goBack()}>
                    <Icon name="chevron-left" type="material-community" size={24} color='white' />
                </TouchableOpacity>
                <View style={{ marginLeft: "55%", flexDirection: 'row', }}>
                    <TouchableOpacity style={styles.botones}>
                        <Icon name="eye-outline" type="material-community" size={24} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.botones, {marginLeft: 20}]}>
                        <Icon name="content-save-outline" type="material-community" size={24} color='white' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerCuerpo}>
                <Input
                    placeholder="Title"
                    style={{fontSize: 48, color: 'white'}}
                    inputContainerStyle={{ borderBottomWidth: 0, }}

                />
                 <Input
                    placeholder="Type something"
                    style={{fontSize: 20, color: 'white'}}
                    inputContainerStyle={{ borderBottomWidth: 0, }}

                />
            </View>

        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525',
        paddingTop: 20,

    },
    botones: {
        backgroundColor: '#3B3B3B',
        borderRadius: 15,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    subContainer: {
        flex: 0.2,
        //backgroundColor: 'red',
        flexDirection: 'row',
        paddingHorizontal: 20,
        
    },
    containerCuerpo: {
        flex: 0.8,
        marginTop: "10%",
        marginHorizontal: "5%"
    }
})
import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Boton from "../../components/botones/Boton";
import { Icon } from "react-native-elements";


export default function RegisterScreen() {
    const [registerVisible, setRegisterVisible] = useState(true)
    return (
        <View style={styles.container}>
            <View style={styles.subContainer1}>
                <Image style={{ width: '100%', height: '100%', }} source={require('../assets/icons/Study-modified.png')} resizeMode='contain' />
            </View>
            <View style={styles.subContainer2}>
                <View style={styles.containerBienvenida}>
                    <Text style={styles.txtTitulo}>Welcome</Text>
                    <Text style={styles.txt}>Welcome to Note App, this is an aplication, were you can put your homeworks or something like that</Text>
                </View>
                <View style={styles.containerBtn}>
                    <Boton
                        onPress={() => setRegisterVisible(true)}
                        text="Create an Account"
                        addstyle={{ justifyContent: 'center' }}
                        styled="yellowRegister"
                    />
                    <Boton
                        onPress={() => console.log("hey")}
                        text="Login"
                    //addstyle={{justifyContent: 'center'}}
                    //styled="yellowRegister"
                    />
                </View>

            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={registerVisible}
            //onRequestClose={() => alert("Config close")}
            >
                <SafeAreaView style={styles.containerModal}>
                    <View style={styles.subcontainerModal}>
                        <View style={{ flex: 0.2, flexDirection: "row", }}>
                            <View style={{ flex: 0.4, justifyContent: "center", paddingLeft: 30 }}>
                                <Text style={styles.txtBienvenidaRegister}>Hello ...</Text>
                                <Text style={[styles.txtBienvenidaRegister,{fontWeight: "bold", fontSize: 30}]}>Register</Text>
                            </View>
                            <View style={styles.iconoSalir}>
                                <Icon onPress={()=>setRegisterVisible(false)} name="close-circle-outline" type="material-community" size={30} color="#EF5858"/>
                            </View>

                        </View>

                    </View>

                </SafeAreaView>

            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050522',
    },
    subContainer1: {
        flex: 0.4,
        // backgroundColor: 'red'
    },
    subContainer2: {
        flex: 0.6,
    },
    containerBienvenida: {
        flex: 0.4,
        alignItems: "center",
        justifyContent: "center"
    },
    containerBtn: {
        flex: 0.6,
        // backgroundColor: 'red',
        paddingHorizontal: "15%",
        justifyContent: "center",
    },
    txtTitulo: {
        color: '#EF5858',
        fontSize: 36,
        //fontFamily: ''
    },
    txt: {
        color: '#F4F4F4',
        fontSize: 19,
        paddingHorizontal: "10%",
        paddingTop: 10
    },
    txtBienvenidaRegister:{
        color: '#050522',
        fontSize: 20,
        
    },
    iconoSalir: {
        flex: 0.6,
        alignItems: "flex-end",
        justifyContent: "center",
        paddingRight: 30
    },
    containerModal:{ 
        flex: 1, 
        justifyContent: "flex-end" 
    },
    subcontainerModal:{ 
        flex: 0.7, 
        backgroundColor: '#FFECAA',
        borderTopLeftRadius: 40, 
        borderTopRightRadius: 40 
    },

})
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Boton from "../../components/botones/Boton";


export default function RegisterScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer1}>
                <Image style={{width: '100%', height: '100%', }} source={require('../assets/icons/Study-modified.png')} resizeMode = 'contain'/>
            </View>
            <View style={styles.subContainer2}>
                <View style={styles.containerBienvenida}>
                    <Text style={styles.txtTitulo}>Welcome</Text>
                    <Text style={styles.txt}>Welcome to Note App, this is an aplication, were you can put your homeworks or something like that</Text>
                </View>
                <View style={styles.containerBtn}>
                    <Boton
                        onPress={() => console.log("hey")}
                        text="Create an Account"
                        addstyle={{justifyContent: 'center'}}
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
    containerBienvenida:{
        flex: 0.4,
        alignItems: "center",
        justifyContent: "center"
    },
    containerBtn:{
        flex: 0.6,
       // backgroundColor: 'red',
        paddingHorizontal: "15%",
        justifyContent: "center",
    },
    txtTitulo:{
        color: '#EF5858',
        fontSize: 36,
        //fontFamily: ''
    },
    txt:{
        color: '#F4F4F4',
        fontSize: 19,
        paddingHorizontal: "10%",
        paddingTop: 10
    }
    
})
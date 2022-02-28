import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Boton from "../../components/botones/Boton";
import { Icon } from "react-native-elements";
import { Formik } from "formik";
import { TextInput } from "react-native-paper";
import InputTxt from "../../components/Input/InputTxt";


export default function RegisterScreen() {
    const [registerVisible, setRegisterVisible] = useState(false)
    const [loginVisible, setLoginVisible] = useState(true)
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
                        onPress={() => setLoginVisible(true)}
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
                                <Text style={[styles.txtBienvenidaRegister, { fontWeight: "bold", fontSize: 30 }]}>Register</Text>
                            </View>
                            <View style={styles.iconoSalir}>
                                <Icon onPress={() => setRegisterVisible(false)} name="close-circle-outline" type="material-community" size={30} color="#EF5858" />
                            </View>

                        </View>
                        <View style={styles.containerForm}>
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    password: '',
                                    confirmPassword: '',
                                    //imageUrl: '',
                                }}
                                onSubmit={(values) => register(values)}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values }) => (
                                    <View style={{ marginBottom: '15%', paddingHorizontal: 20 }}>

                                        <InputTxt
                                            placeholder={"Username"}
                                            onChangeText={handleChange('name')}
                                            onBlur={handleBlur('name')}
                                            initialValue={values.name}
                                        />
                                        <InputTxt
                                            placeholder={"Email"}
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            initialValue={values.email}
                                        />
                                        <InputTxt
                                            placeholder={"Password"}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            initialValue={values.password}
                                            secury={true}
                                        />
                                        <InputTxt
                                            placeholder={"Confirm Password"}
                                            onChangeText={handleChange('confirmPassword')}
                                            onBlur={handleBlur('confirmPassword')}
                                            initialValue={values.confirmPassword}
                                            secury={true}
                                        />
                                        <Boton
                                            onPress={() => console.log("hey")}
                                            text="Register"
                                        //addstyle={{justifyContent: 'center'}}
                                            styled="btnRegister"
                                        />


                                    </View>
                                )}
                            </Formik>

                            
                        </View>
                        <View style={styles.footerModal}>
                            <Text style={[styles.txtBienvenidaRegister, {fontSize: 16}]}>Already have an Account {' '}
                                    <Text 
                                    style={styles.txtURL}
                                    onPress={()=>{
                                        setRegisterVisible(false)
                                        setLoginVisible(true)

                                    }}
                                    >Login</Text>
                            </Text>
                        </View>

                    </View>

                </SafeAreaView>

            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={loginVisible}
            //onRequestClose={() => alert("Config close")}
            >
                <SafeAreaView style={styles.containerModal}>
                    <View style={[styles.subcontainerModal,{flex: 0.5}]}>
                        <View style={{ flex: 0.3, flexDirection: "row", }}>
                            <View style={{ flex: 0.4, justifyContent: "center", paddingLeft: 30 }}>
                                <Text style={styles.txtBienvenidaRegister}>Welcome Back!!!</Text>
                                <Text style={[styles.txtBienvenidaRegister, { fontWeight: "bold", fontSize: 30 }]}>Login</Text>
                            </View>
                            <View style={styles.iconoSalir}>
                                <Icon onPress={() => setLoginVisible(false)} name="close-circle-outline" type="material-community" size={30} color="#EF5858" />
                            </View>

                        </View>
                        <View style={styles.containerForm}>
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    password: '',
                                    confirmPassword: '',
                                    //imageUrl: '',
                                }}
                                onSubmit={(values) => register(values)}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values }) => (
                                    <View style={{ marginBottom: '15%', paddingHorizontal: 20 }}>

                                       
                                        <InputTxt
                                            placeholder={"Email"}
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            initialValue={values.email}
                                        />
                                        <InputTxt
                                            placeholder={"Password"}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            initialValue={values.password}
                                            secury={true}
                                        />
                                       
                                        <Boton
                                            onPress={() => console.log("hey")}
                                            text="Login"
                                        //addstyle={{justifyContent: 'center'}}
                                            styled="btnRegister"
                                        />


                                    </View>
                                )}
                            </Formik>

                            
                        </View>
                        <View style={styles.footerModal}>
                            <Text style={[styles.txtBienvenidaRegister, {fontSize: 16}]}>Don't have an Account? {' '}
                                    <Text 
                                    style={styles.txtURL}
                                    onPress={()=>{
                                        setLoginVisible(false)
                                        setRegisterVisible(true)

                                    }}
                                    >Register</Text>
                            </Text>
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
    txtBienvenidaRegister: {
        color: '#050522',
        fontSize: 20,

    },
    iconoSalir: {
        flex: 0.6,
        alignItems: "flex-end",
        justifyContent: "center",
        paddingRight: 30
    },
    containerModal: {
        flex: 1,
        justifyContent: "flex-end"
    },
    subcontainerModal: {
        flex: 0.7,
        backgroundColor: '#FFECAA',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    containerForm: {
        flex: 0.65,
        //backgroundColor: 'yellow'
    },
    footerModal:{
        flex: 0.15, 
        justifyContent: "center", 
        alignItems: "center"
    },
    txtURL:{
        color: "#EF5858",
        fontSize: 16,
    },

})
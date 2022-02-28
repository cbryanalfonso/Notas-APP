import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Boton from "../../components/botones/Boton";
import { Icon } from "react-native-elements";
import { Formik } from "formik";
import { TextInput } from "react-native-paper";
import InputTxt from "../../components/Input/InputTxt";
import { firebase } from "@react-native-firebase/auth";
import { firebase as db } from "@react-native-firebase/database";


export default function RegisterScreen() {
    const [registerVisible, setRegisterVisible] = useState(false)
    const [loginVisible, setLoginVisible] = useState(true)
    const [usuario, setUsuario] = useState('')



    const uploadProfile = async (usuarios, correo, nombre, contra) => {
        console.log("Tamos dentro ->", usuarios);
        console.log("Tamos dentro ->", correo);
        console.log("Tamos dentro ->", nombre);
        console.log("Tamos dentro ->", contra);
        db
            .database()
            .ref(`/Usuarios/${usuarios}`)
            .set({
                name: nombre,
                email: correo,
                password: contra,
                uid: usuarios,
            })
            .then(() => {
                // navigation.navigate('LoginScreen')
                console.log("Lo que se sube a base de datos->")
            }
            )
            .catch(error => {
                console.log(error)
            })
    }

    const register = values => {
        if (values.password === values.confirmPassword) {
            if (values.email && values.password) {
                firebase.auth()
                    .createUserWithEmailAndPassword(values.email, values.password)
                    .then((userCredential) => {
                        var user = userCredential.user
                        user.updateProfile({
                            displayName: values.name,
                        })
                            .then(() => {
                                setUsuario(user.uid)
                                uploadProfile(user.uid, values.email, values.name, values.password)
                            })
                            .catch((error) => {
                                alert(error)
                            })
                    })
                    .catch(error => {
                        // setLoader(false);
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorMessage);
                        alert(errorMessage)
                    });
            } else {
                alert("Please complete the data.")
            }
        } else {
            alert("Password doesn´t match")
        }
    }
    const signIn = values => {
        if (values.email && values.password) {
            firebase
                .auth()
                .signInWithEmailAndPassword(values.email, values.password)
                .then(userCredential => {
                    console.log("Inicio de sesión exitoso ...");

                   /*  db.database().ref('Usuarios/' + getCurrentUser().uid)
                        .update({ state: true })

                    navigation.navigate('Menu') */
                })
                .catch(error => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                });

            /**
             * 
             *  firebase
                .database()
                    .ref('/Usuarios')
                    .on('value', snapshot => {
                        console.log('User data: ', snapshot.val());
                    })
             */
        } else {
            alert('Please complete ...')
        }
    }


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
                                            onPress={handleSubmit}
                                            text="Register"
                                            //addstyle={{justifyContent: 'center'}}
                                            styled="btnRegister"
                                        />


                                    </View>
                                )}
                            </Formik>


                        </View>
                        <View style={styles.footerModal}>
                            <Text style={[styles.txtBienvenidaRegister, { fontSize: 16 }]}>Already have an Account {' '}
                                <Text
                                    style={styles.txtURL}
                                    onPress={() => {
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
                    <View style={[styles.subcontainerModal, { flex: 0.5 }]}>
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
                                    email: '',
                                    password: '',

                                }}
                                onSubmit={(values) => signIn(values)}
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
                                            onPress={handleSubmit}
                                            text="Login"
                                            styled="btnRegister"
                                        />


                                    </View>
                                )}
                            </Formik>


                        </View>
                        <View style={styles.footerModal}>
                            <Text style={[styles.txtBienvenidaRegister, { fontSize: 16 }]}>Don't have an Account? {' '}
                                <Text
                                    style={styles.txtURL}
                                    onPress={() => {
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
    footerModal: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    txtURL: {
        color: "#EF5858",
        fontSize: 16,
    },

})
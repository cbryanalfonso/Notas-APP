import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { FAB } from "react-native-paper";

export default function HomeScreen({navigation}) {
    const [inicio, setInicio] = useState('')
    const [state, setState] = useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={'#252525'}
                barStyle={'light-content'}
            />
            {inicio ? (
                <View style={styles.header}>

                </View>
            ) :
                <View style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <Text style={[styles.txt, { fontSize: 40, fontWeight: '500' }]}>Notes</Text>
                        <View style={styles.btnHeaders}>
                            <TouchableOpacity style={styles.botones}>
                                <Icon name="magnify" type="material-community" size={24} color='white' />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.botones, { marginLeft: 80 }]}>
                                <Icon name="information-outline" type="material-community" size={24} color='white' />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", flex: 0.68 }}>
                        <Image source={require('../assets/icons/Home.png')} style={{ width: 400, height: 400, marginTop: -30 }} resizeMode='contain' />
                        <Text style={styles.txt}>Create your first note!</Text>
                    </View>
                    
                        <FAB.Group
                            open={open}
                            icon={open ? 'note-outline' : 'plus'}
                            actions={[
                               
                                {
                                    icon: 'star',
                                    label: 'Fav Notes',
                                    onPress: () => console.log('Pressed star'),
                                },
                                
                                {
                                    icon: 'note-edit',
                                    label: 'New Note',
                                    onPress: () => navigation.navigate('Editor'),
                                    small: false,
                                },
                            ]}
                            onStateChange={onStateChange}
                            onPress={() => {
                                if (open) {
                                    // do something if the speed dial is open
                                }
                            }}
                            style={{ paddingBottom: "20%",}}
                            fabStyle={{
                                //backgroundColor: '#252525'
                                backgroundColor: '#272727'
                            }}
                        />


                   

                </View>
            }


        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#050522'
        backgroundColor: '#252525'
    },
    header: {
        flex: 0.12,
        flexDirection: 'row',
        //justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20

    },
    txt: {
        fontSize: 20,
        color: 'white'
    },
    btnHeaders: {
        flex: 0.6,
        justifyContent: "space-around",
        paddingLeft: "55%",
        flexDirection: 'row'
    },
    botones: {
        backgroundColor: '#3B3B3B',
        borderRadius: 15,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    }
})
import { firebase } from "@react-native-firebase/auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "react-native";
import Ap from "./Ap";
import RegisterScreen from "./screen/RegisterLogin/RegisterScreen";
import EditorNotes from "./screen/View/EditorNotes";
import HomeScreen from "./screen/View/HomeScreen";

const Stack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppBottomNavigator() {
    const [user, setUser] = useState()
    useLayoutEffect(() => {
        const suscriber = firebase.auth().onAuthStateChanged(us => {
            if (us) {
                setUser(true)
            } else {
                setUser(false)
            }
        })
        return suscriber;
    }, [])

    const StackNoAuth = () => (
        <Stack.Navigator>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
    )

    const StackAuth = () => (
        <MainStack.Navigator>
            <Stack.Screen name="AppBottom" component={Ap} options={{headerShown: false}}/>
            <Stack.Screen name="Editor" component={EditorNotes} options={{headerShown: false}} />
        </MainStack.Navigator>
    )

  /*   const AppBottom = () => (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
        </Tab.Navigator>
    ) */
    return (
        <NavigationContainer>
            <StatusBar 
                backgroundColor={'#050522'}
                barStyle={"light-content"}
            />
            {user ? <StackAuth /> : <StackNoAuth />}
        </NavigationContainer>
    )
}


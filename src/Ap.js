import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import RegisterScreen from "./screen/RegisterLogin/RegisterScreen";
import HomeScreen from "./screen/View/HomeScreen";
import Profile from "./screen/View/Profile";

const Tab = createBottomTabNavigator();
export default function Ap() {



    return (
        <Tab.Navigator
            initialRouteName='Home'



            screenOptions={{
                // tabBarActiveBackgroundColor:'red',
                //active FFDE69 inactive FFECAA
                tabBarActiveBackgroundColor: '#FFDE69',
                tabBarInactiveBackgroundColor: '#FFECAA',
                //tabBarHideOnKeyboard: true,
                tabBarItemStyle: { borderRadius: 25 },
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 15,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    backgroundColor: '#FFECAA',
                    borderRadius: 25,
                    height: 60,

                },
                tabBarActiveTintColor: '#1B1A40',
                tabBarInactiveTintColor: 'gray',

            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
                title: "Home",
                tabBarActiveTintColor: '#EF5858',
                tabBarIcon: () => (
                    <Icon name="home" type="material-community" size={30} color='#EF5858' />
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                headerShown: false,
                tabBarActiveTintColor: '#EF5858',
                tabBarIcon: () => (
                    <Icon name="account" type="material-community" size={30} color='#EF5858' />
                )
            }} />
        </Tab.Navigator>
    )
}
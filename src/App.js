import React from "react";
import { Dimensions, TextInput, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import AppBottomNavigator from "./AppBottomNavigator";
import RegisterScreen from "./screen/RegisterLogin/RegisterScreen";

const WIDTH = Dimensions.get('screen').width;

export default function App() {
    return (
      <AppBottomNavigator/>
    );
}
/*
//d="M-17.5 378.5C31.5 32.5 302.5 463 375 89C447.5 -285 375 644 375 974H0C0 644 -66.5 724.5 -17.5 378.5Z" // put your path here
                    //d="M-17.5 10 L98 65 L70 25 L16 77 L11 30 L0 4 L90 50 L50 10 L11 22 L77 95 L20 4"
                    //10 L98 65 L70 25 L16 77 L11 30 L0 4 L90 50 L50 10 L11 22 L77 95 L20 25
                    //fill="blue"

*/
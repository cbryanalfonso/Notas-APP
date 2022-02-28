import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";



const Boton = ({ onPress, text, styled, addstyle, extraText }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[getButtonStyle(styled), addstyle ? addstyle : null]}>
            <Text style={[getTextStyle(styled), extraText ? extraText : null]}>
                {text}
            </Text>

        </TouchableOpacity>
    );
}

const getButtonStyle = color => {
    switch (color) {
      case 'yellowRegister':
        return {
          backgroundColor: '#FFDE69',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          minWidth: 10,
          marginTop:6,
          paddingTop: "5%",
          marginBottom: 10,
          paddingBottom: "5%",
          //marginBottom: hp(4),
          
        };
      default:
        return {
          //backgroundColor: '#008DC4',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          borderWidth: 1,
          borderColor: '#FFDE69',
          paddingTop: "5%",
          marginBottom: 10,
          paddingBottom: "5%",
         // paddingTop: hp(0.8),
          //paddingBottom: hp(0.8),
          //marginLeft: wp(30),
        };
    }
  };
  const getTextStyle = color => {
    switch (color) {
      case 'yellowRegister':
        return {
          color: '#1B1A40',
          fontSize: 20,
          fontWeight: '700',
        };
      default:
        return {
          color: '#FFDE69',
          fontSize: 20,
        };
    }
  };

  const styles = StyleSheet.create({
    fonts: {
      fontFamily: 'Poppins',
    },
  });
  export default Boton;
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';
import ColorP from './../Util';

export default function ResultadoCalculado(props){
    const {capital,interes,mes,total,errorMensaje}= props;
    console.log(props)
    return (
        <View>
            <Text>hola desde el componente nuevo</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    content: {
      marginHorizontal: 40,
    },
    boxResult: {
      padding: 30,
    },
    title: {
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 20,
    },
    value: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    error: {
      textAlign: 'center',
      color: '#f00',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
  
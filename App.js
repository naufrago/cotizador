import React, {useState, useEffect} from 'react';
import {SafeAreaView,ScrollView, StatusBar, StyleSheet,
  Text,useColorScheme,View,} from 'react-native';
import ColorP from './utilidades/Util';
import Formulario from './utilidades/componentes/Formulario';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [mes, setMes] = useState(null);

  useEffect(()=>{
    console.log(capital, interes, mes);
  },[capital,interes,mes])
  return (
    <>
      <SafeAreaView style={estilos.safeArea}>
        <View style={estilos.background} />
        <Text style={estilos.titleApp}>cotiza tu prestamo</Text>
        <Formulario
          setCapital={setCapital}
          setInteres={setInteres}
          setMes={setMes}
        />
      </SafeAreaView>
    </>
  )
};

const estilos = StyleSheet.create({
  safeArea: {
    height: 250,
    alignItems: 'center',
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  background: {
    backgroundColor: ColorP.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
})


import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, StyleSheet,
  Text, useColorScheme, View, Alert, Button
} from 'react-native';
import ColorP from './utilidades/Util';
import Formulario from './utilidades/componentes/Formulario';
import ResultadoCalculado from './utilidades/componentes/ResultadoCalculado';
import Footer from './utilidades/componentes/Footer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [mes, setMes] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMensaje, setErrorMensaje] = useState('');

  // esta pendiente del cambio de estado de las variables
  useEffect(() => {
    if (capital || interes || mes) {
      calcular();
    } else {
      reset()
    }
  }, [capital, interes, mes]);

  // / limpia el error y el total
  const reset = () => {
    setErrorMensaje('');
    setTotal(null);
  };

  // realiza el calculo del total 
  // y si hay errores determina con un texto el error
  const calcular = () => {
    reset()
    if (!capital) {
      setErrorMensaje('Añade la cantidad que quieres solicitar');
    } else if (!interes) {
      setErrorMensaje('Añade el interes del prestamos');

    } else if (!mes) {
      setErrorMensaje('Seleccióna los meses a pagar');

    } else {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -mes)) / i);
      setTotal({
        valormensual: fee.toFixed(2).replace('.', ','),
        totalpagar: (fee * mes).toFixed(2).replace('.', ','),
      });
    }
  };

   function botonCalcular(){
    console.log("object");
    calcular();
    setTimeout(() => {
      if (total) {
        // Alert.alert(`el valor mensual a pagar es de $ ${total.valormensual}, y el valor total pagado al culminar los ${mes} sera de $ ${total.totalpagar} `)
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Resultado',
          textBody: `el valor mensual a pagar es de $ ${total.valormensual}, y el valor total pagado al culminar los ${mes} meses sera de $ ${total.totalpagar} `,
          button: 'Cerrar',
        })
      }
    }, 1000);
  }


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
      <KeyboardAwareScrollView>
        <View style={estilos.caja}>
          <ResultadoCalculado
            capital={capital}
            interes={interes}
            mes={mes}
            total={total}
            errorMensaje={errorMensaje}
          />
          <AlertNotificationRoot/>
        </View>
      </KeyboardAwareScrollView>

      
      

        <Footer calculate={botonCalcular} /> 
     
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
  caja: {
    minHeight: 400
  }
})


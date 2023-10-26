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
    
    return (    
        <View style={styles.content}>
          {total && (
            <View style={styles.boxResult}>
              <Text style={styles.title}>RESUMEN</Text>
              <DataResult title="Cantidad solicitada:" value={`$ ${capital}`} />
              <DataResult title="Interes %:" value={`${interes} %`} />
              <DataResult title="Plazos:" value={`${mes} meses`} />
              <DataResult title="Pago mensual:" value={`$ ${total.valormensual} `} />
              <DataResult
                title="Total a pagar:"
                value={`$ ${total.totalpagar} `}
              />
            </View>
          )}
          <View>
            <Text style={styles.error}>{errorMensaje}</Text>
          </View>
        </View>
      );
}

function DataResult(props) {
    const {title, value} = props;
  
    return (
      <View style={styles.value}>
        <Text>{title}</Text>
        <Text>{value}</Text>
      </View>
    );
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
  
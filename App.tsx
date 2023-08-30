/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ReactNativeForegroundService from '@supersami/rn-foreground-service';
import { registrar } from './services/location.service';

import { PermissionsAndroid } from 'react-native';
//import RNLocation from 'react-native-location';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount ] = useState<number>(0);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(()=>{
    ReactNativeForegroundService.add_task(() => 
      log(), {
      delay: 5000,
      onLoop: true,
      taskId: "taskid",
      onError: (e) => console.log(`Error logging:`, e),
    });
  }, [])
  const startTask = () => {
    ReactNativeForegroundService.start({
      id: 1244,
      title: "Foreground Service",
      message: "We are live World",
      icon: "ic_launcher",
      button: true,
      button2: true,
      buttonText: "Button",
      button2Text: "Anther Button",
      buttonOnPress: "cray",
      setOnlyAlertOnce: 'true',
      color: "#000000",
      progress: {
        max: 100,
        curr: 50,
      },
    });
  };

  

  const stopTask = () => {
    ReactNativeForegroundService.stopAll();
  }

  const log = async () => {
    console.log('ENTROO');
    let hola = await registrar({
      id: 5,
      acuraccy: 8,
      altitude: 1,
      altitudeAcuraccy: 1,
      heading: 1,
      latitude: 1,
      longitud: 1,
      speed: 8
    });
  
  
  };

  const enviar = async () => {
    console.log('ENTROO');
    let hola = await registrar({
      id: 5,
      acuraccy: 99,
      altitude: 1,
      altitudeAcuraccy: 1,
      heading: 1,
      latitude: 1,
      longitud: 1,
      speed: 8
    });
  Alert.alert('Respuesta :: ', hola.toString() )
  
  };


//request the permission before starting the service.
const permisos = async () => {

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permiso de Ubicación',
          message: 'Necesitamos acceder a tu ubicación para...',
          buttonNeutral: 'Preguntar después',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Aceptar',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permiso de ubicación otorgado');
      } else {
        console.log('Permiso de ubicación denegado');
      }
    } catch (error) {
      console.warn(error);
    }
  
/*const backgroundgranted = await PermissionsAndroid.request(
  PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
  {
    title: 'Background Location Permission',
    message:
      'We need access to your location ' +
      'so you can get live quality updates.',
    buttonNeutral: 'Ask Me Later',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK',
  },
);
if (backgroundgranted === PermissionsAndroid.RESULTS.GRANTED) {
  //do your thing!
  console.log('Tiene Permisos')
}else{
  console.log('NOOO Tiene Permisos')
}*/
}

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          <Button onPress={permisos} title='Permisos' />
          <Button onPress={enviar} title='Enviar' />
          <Button onPress={startTask} title='Iniciar la tarea' />
          <Button onPress={stopTask} title='Parar la tarea' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

import React from 'react'; 

import { StatusBar } from 'expo-status-bar';
import { Pressable, ImageBackground, Button, Alert, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-web';


const App = () => {
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [imc, setImc] = React.useState('');


  // let calcImc = (e) => {
  //   e.preventDefault()

  //   if (weight == 0 || height == 0) {
  //     alert('Enter a valid value')
  //   } else {
  //     let imc = (weight / (height * height) * 703)
  //     setImc(imc.toFixed(1))
  //   }
  // }
  function calcImc(){
    let height1 = height / 100;
    let imc1 = weight / (height1 * height1);
    setImc(imc1);
  }

  const { onPress, title = 'CALCULAR' } = React.useState('');

  return (
    <ImageBackground source={require('./backgroundWP.jpg')} style={styles.container}>
    <View style={styles.mainDiv}>
      <Text style={styles.textTitle}>Calculadora de IMC</Text>
        <View style={styles.container}>
          <View style={{flexDirection:"column", marginBottom: 200}}>
              <TextInput 
                textAlign='center'
                style={styles.heightBox}                
                value={height}
                onChangeText={height => setHeight(height)}
                placeholder="Insira sua altura"              
                >          
              </TextInput>
              <TextInput 
                textAlign='center'
                style={styles.weightBox}
                onChangeText={weight => setWeight(weight)}
                value={weight}
                placeholder="Insira seu peso"
                >          
              </TextInput>
              <View>
                <Pressable 
                  style={styles.button}
                  onPress={calcImc}>                  
                  <Text style={styles.textButton}>{title}</Text>                  
                </Pressable>                                                
              </View>   
              <Text style={styles.imcFormat}>
                  Seu IMC é: {(imc.toPrecision(2))}
              </Text> 
            </View>                          
        <StatusBar style="auto"/>
              
      </View>
    </View>
    </ImageBackground>
    
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center'      
  },
  mainDiv: {
    backgroundColor: 'rgba(27, 5, 43, 0.5)',
    borderRadius: 20,
    margin: 70,
    padding: 20
  },
  imcFormat: {
    fontSize: 30,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 50
  },
  button: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#CF50CF',
    borderRadius: 30
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 30,    
    padding: 50,
    borderBottomLeftRadius: 60,
    marginTop: 50,    
    marginBottom: 100,    
    color: 'white'

  },
  heightBox: {
    borderRadius: 20,
    backgroundColor: '#F572F5',
    height: 70,
    width: 300,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
   
  },
  weightBox: {
    backgroundColor: '#F572F5',
    height: 70,
    width: 300,
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

  },
  buttonBox: {
    width: 200,
  },
  footer: {
    color: 'white',
    alignSelf: 'flex-start',
    marginBottom: -20
  }
});

export default App;
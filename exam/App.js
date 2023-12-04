import React, { useState } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const image = require('./images/guignolee.jpg')

function App(){
  const [dons, setDons] = useState(0)
  return (
    <View style={styles.main}>
      <View style={styles.sectionImg}>
        <Image source={image} />
        <Text style={styles.text}>Voulez-vous faire un don ?</Text>
      </View>
      <View style={styles.sectionButton}>
        <Button 
          onPress={() => {
            setDons(dons + 1)
          }}
          style={styles.button}
          title='Don de 1$' />
        <Button 
          onPress={() => {
            setDons(dons + 2)
          }}
          style={styles.button}
          title='Don de 2$' />
      </View>
      <View style={styles.sectionTotal}>
        <Text style={styles.text}>Merci pour votre don de : {dons}$</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    color: 'red',
    display: 'flex'
  },
  sectionImg: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  sectionButton: {
    display: 'flex',
    flexDirection: 'row',
    height: '35%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  sectionTotal: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'red',
    height: 15,
    width: 25
  },
  text: {
    color: 'red',
    textAlign: 'center'
  }
});

export default App;

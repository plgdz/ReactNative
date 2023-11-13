/**
 * Annexe 4 - cours C54
 * App de départ à modifier par les étudiants
 * 
 */

import React from 'react';

import {

  Text,
  Button,
  Image,
  View,
  StyleSheet,
} from 'react-native';

import { liste } from './donnees.js';

function Galerie() {
  let index = 0;
  let sculpture = liste[index];
  const remoteImage = { uri: sculpture.url };


  function handleClick() {
    index = index + 1;
  } 


  return (
   
    <View style={styles.main}>
      <Button onPress={handleClick} title="Suivant"/>
   
      
      <Text>
        {sculpture.name + "de " +sculpture.artist}
      </Text>
      <Text>  
        ({index + 1} of {liste.length})
      </Text>

      <Image style={styles.image} source={remoteImage} />
     
    </View>
  );
}


const styles = StyleSheet.create(
  {
    image : {
      width:160,
      height:160,
    },

    main : {
      alignItems:'center'
    }
  }
)
export default Galerie;

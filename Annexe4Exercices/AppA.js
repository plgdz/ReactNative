/**
 * Annexe 4 - cours C54
 * App de départ à modifier par les étudiants
 * 
 */

import React, {useState} from 'react';

import {

  Text,
  Button,
  Image,
  View,
  StyleSheet,
} from 'react-native';

import { liste } from './donnees.js';

function Galerie() {
  const [index, setIndex ] = useState(0);
  let sculpture = liste[index];
  const remoteImage = { uri: sculpture.url };


  function handleClick() {
  
       setIndex(index+1);

  } 
 
  function recule(){
    setIndex(index-1);
  } 


  return (
   
    <View style={styles.main}>
      
       <Button onPress={handleClick} title="Suivant"/> 
   
      
      <Text style={styles.text}>
        {sculpture.name + " de " +sculpture.artist}
      </Text>
      <Text style={styles.text}>  
        ({index+1} of {liste.length})
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

    text: {
      fontSize:22,
      textAlign:'center'
    },

    main : {
      alignItems:'center',  // les enfants du composant sont centrés horizontalement
      justifyContent:'center', // les enfants du composants sont centrés verticalement
      flex:1,   //pour que le composant occupe tout l'espace vertical 
    }
  }
)
export default Galerie;

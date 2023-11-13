/**
 * Annexe 4 - cours C54
 * App de départ à modifier par les étudiants
 * 
 */

import React, {useState} from 'react';

import {
  Pressable, TouchableOpacity, TouchableHighlight,
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


  function avance() {
  
       if ( index<3 )
        setIndex(index+1);
       else
         setIndex(0);

  } 
 
  function recule(){
    if ( index >0)
     setIndex(index-1);
    else
     setIndex(3);
  } 


  return (
   
    <View style={styles.main}>
      <View style={styles.ligneBoutons}>
       <TouchableOpacity style={styles.bouton} onPress={recule} title="Précédent"> 
         <Text style={styles.texteB}>Précédent</Text>
       </TouchableOpacity>
       <TouchableHighlight style={styles.bouton} onPress={avance} title="Suivant"> 
       <Text style={styles.texteB}>Suivant</Text>
       </TouchableHighlight>
      </View>
      
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
      alignItems:'center', // les enfants du composant sont centrés horizontalement
      justifyContent:'center', // les enfants du composants sont centrés verticalement
      flex:1,   //pour que le composant occupe tout l'espace vertical 
    }, 

    ligneBoutons : {
      flexDirection:'row',
   
    },

    bouton : {

      
      marginLeft: 15,
      paddingVertical: 18,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'blue',
      
    }, 

    texteB :{
      color: 'white',
      fontSize:17,
    }

  }
)
export default Galerie;

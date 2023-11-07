import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

const heartImg = require('./heart.png')

function App() {
  const [etat, setEtat] = useState(false)

  return (
    <View style={style.main}>
      <TouchableHighlight onPress={() => {setEtat(!etat)}}>
        <Image source={heartImg} style={etat ? style.like:style.unlike} />
      </TouchableHighlight>   
      <Text>j'aime ?</Text>
    </View>
  )
}

const style = StyleSheet.create({
  main:{
    alignItems:'center'
  },
  unlike: {
    tintColor: '#000'
  },
  like:{
    tintColor:'red'
  }
})

export default App
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native'

const imagePlay = require('./images/play.png')
const imageVolume = require('./images/sound.png')
const imagePleinEcran = require('./images/full-screen.png')
const imageHd = require('./images/hd-sign.png')
const imageFond = require('./images/video.jpg')

function App(){
    return (
      <View style={style.main}>
          <ImageBackground source={imageFond} style={style.bg}>
            <View style={style.conteneurBas}>
                <Image source={imagePlay} />
                <Image source={imageVolume} />

              <View style={style.progress}></View>
                <Image source={imageHd} />
                <Image source={imagePleinEcran} />

            </View>

          </ImageBackground>
      </View>
    )
}

const style = StyleSheet.create({
  main:{
    height:'100%',
    justifyContent:'space-around'
  },
  bg:{
    height: 250
  },
  conteneurBas :{
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    position:'absolute',
    bottom:0,
    width:'100%',
    height: 40,
    alignItems:'center'
  },
  conteneurIcon: {
    display:'flex',
    flexDirection:'row',
  },
  progress:{
    backgroundColor: '#ffffff50',
    height: 10,
    width: 150,
    borderRadius: 8,
  }
})

export default App;

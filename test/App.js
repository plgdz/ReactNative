/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import { authenticateSpotify } from './SpotifyAuth';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableHighlight,

} from 'react-native';

import { createNativeStackNavigator  } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()
function App() {
  //Hooks
  const [token, setToken] = useState('')
  const [artist, setArtist] = useState({})
  const [chargement, setChargement] = useState(true)
  const [imgUrl, setImage] = useState([])

  //Fonctions
  async function getToken() {
    try {
      const response = await authenticateSpotify()
      console.log('response', response.accessToken)
      setToken(response.accessToken)
    }
    catch (error) {
      console.log(error)
    }
    finally {
      console.log('Token récupéré')
    }
  }

  async function getArtist() {
    try {
      const response = await fetch('https://api.spotify.com/v1/artists/1G0YV9WooUBjrwDq0Q7EFK', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      const json = await response.json()
      console.log(json)
      setArtist(json)
      setImage(json.images[0].url)
    }
    catch (error) {
      console.log(error)
    }
    finally {
      console.log('Artiste récupéré')
    }
  }

  getImage = () => {
    setImage(artist.images)
    console.log('image', imgUrl)
    setChargement(false)
  }


  useEffect(() => {getToken()}, [])
  useEffect(() => {getArtist()}, [token])
  useEffect(() => {getImage()}, [artist])
  
  return (
    <ScrollView>
      {chargement ? <Text>Chargement en cours</Text> :
        <View style={styles.sectionContainer} >
          <Text style={styles.sectionTitle}>
            {artist.name}
          </Text>
          <Text style={styles.sectionDescription}>
            {artist.genres}
          </Text>
          <View style={styles.imgContainer}>
            <Image
              source={{uri: imgUrl[0].url}}
              style={styles.image}
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableHighlight 
              style={styles.bouton}
              onPress={() => {console.log('btn 1')}}>
              <Text>btn 1</Text>
            </TouchableHighlight>
            <TouchableHighlight 
              style={styles.bouton}
              onPress={() => {console.log('btn 2')}}>
              <Text>btn 2</Text>
            </TouchableHighlight>
          </View>
        </View>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'red',
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  image: {
    width: 300,
    height: 300,
    margin: 'auto',
  },
  btnContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 32,
    backgroundColor: 'black',
    height: 200,
  },
  bouton : {
    marginLeft: 15,
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue', 
  }, 
});

export default App;

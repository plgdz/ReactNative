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

} from 'react-native';


async function auth() {
  const [token, setToken] = useState({})
  try {
    const response = await authenticateSpotify()
    const json = await response.json()
    console.log(json)
    return json
  }
  catch (error) {
    console.log(error)
  }
  finally {
    console.log('test')
  }
}

function App() {
  //Hooks
  const [token, setToken] = useState({})
  const [artist, setArtist] = useState({})
  const [chargement, setChargement] = useState(true)
  const [imgUrl, setImage] = useState({})

  useEffect(() => { loader() }, [])

  async function loader () {
    try {
      const response = await authenticateSpotify()
      const json = response
      setToken(json)
      console.log(token)

      const responseArtist = await fetch('https://api.spotify.com/v1/artists/1G0YV9WooUBjrwDq0Q7EFK',
        { method: 'GET',
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
            'Content-Type': 'application/json',
          },} );
      const jsonArtist = responseArtist.json()
      setArtist(jsonArtist)
      console.log(artist) 
      setImage({uri: artist.images[0].url})
      console.log('  ',imgUrl)
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setChargement(false)
      console.log(chargement)
    }
  }
  
  return (
    <ScrollView>
      <Text>PAUL</Text>
        {chargement ? 
          <Text>Chargement en cours</Text> :
          <Image style={styles.image} source={imgUrl} />
        }
      {/* <Image style={styles.image} source={imgUrl} /> */}
    </ScrollView>
  )
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

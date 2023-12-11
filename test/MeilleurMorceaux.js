import React from 'react'
import {FlatList, Text, View} from 'react-native'
import { authenticateSpotify } from './SpotifyAuth'
import { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Image, TouchableHighlight } from 'react-native'


function MeilleursMorceaux(nav) {
  const [token, setToken] = useState(nav.route.params.token)
  const [artist, setArtist] = useState(nav.route.params.artist)
  const [chargement, setChargement] = useState(true)
  const [meilleurMorceaux, setMeilleurMorceaux] = useState({})

  //Fonctions
  async function getMeilleurMorceaux() {
    try {
      const response = await fetch('https://api.spotify.com/v1/artists/'+artist.id+'/top-tracks?market=CA', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      const json = await response.json()
      console.log('trakca', json)
      setMeilleurMorceaux(json)
      setChargement(false)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMeilleurMorceaux()
  }, [])

  return (
    <View>
        {chargement ? <Text>Chargement en cours</Text> :
          <FlatList
            data={meilleurMorceaux.tracks}
            renderItem={({ item }) => 
            <View>
                <View style={styles.artiste}>
                  <Image style={styles.image} source={{ uri: item.album.images[0].url }} />
                  <Text style={styles.nom}>{item.name}</Text>
                </View>
            </View>}
          />
        }
    </View>
  )
}

const styles = StyleSheet.create({
  artiste: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  nom: {
    marginLeft: 10
  }
  
})

export default MeilleursMorceaux
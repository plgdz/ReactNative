import React from 'react'
import {FlatList, Text, View} from 'react-native'
import { authenticateSpotify } from './SpotifyAuth'
import { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Image, TouchableHighlight } from 'react-native'


function Similar(nav) {
  const [token, setToken] = useState(nav.route.params.token)
  const [artist, setArtist] = useState(nav.route.params.artist)
  const [chargement, setChargement] = useState(true)
  const [artistesSimilaires, setArtistesSimilaires] = useState({})
  console.log(token)
  console.log(artist.id)

  //Fonctions
  async function getArtistesSimilaires() {
    try {
      const response = await fetch('https://api.spotify.com/v1/artists/'+artist.id+'/related-artists', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      const json = await response.json()
      setArtistesSimilaires(json)
      setChargement(false)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getArtistesSimilaires()
  }, [])

  return (
    <View>
      {chargement ? <Text>Chargement en cours</Text> :
        <FlatList
          data={artistesSimilaires.artists}
          renderItem={({ item }) => 
          <View>
              <View style={styles.artiste}>
                <Image style={styles.image} source={{ uri: item.images[0].url }} />
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
    marginRight: 10
  },
  nom: {
    fontSize: 20
  }
})

export default Similar
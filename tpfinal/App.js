import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  authenticateSpotify
} from './SpotifyAuth'

function App() {
  // let test = await authenticateSpotify()
  // console.log(test)

  useEffect(() => { loader() }, [])

  async function loader () {
    try {
      const response = await authenticateSpotify()
      const json = await response.json()
      console.log(json)
    }
    catch (error) {
      console.log(error)
    }
    finally {
      console.log('finaly')
    }
  }

  return (
    <View>
      <Text>TEST</Text>
    </View>
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

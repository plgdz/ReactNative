import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';

function loader() {
  
}

function App() {
  //Hooks
  const [donnees, setDonnees] = useState([])
  const [chargement, setChargement] = useState(true)

  useEffect(() => { loader() }, [])

  async function loader () {
    try {
      const response = await fetch('https://api.jsonbin.io/v3/b/655a97bc12a5d376599bdc0a?meta=false')
      const json = await response.json()
      console.log(json)

      setDonnees(json)
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setChargement(false)
    }
  }

  return (
    <View>
    {chargement ? <Text>Chargement en cours</Text> :
      <FlatList 
        data={donnees}
        renderItem = { ({item}) => <View>
          <Text style={styles.titre}>
            {item.title}
          </Text>
          <Text>
            {item.description}
          </Text>
        </View>}  
      />
    }
    </View>
  )
}

const styles = StyleSheet.create({
  titre:{
    color:'red',
    fontSize:20
  }
})

export default App;

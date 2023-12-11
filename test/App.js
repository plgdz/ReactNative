import {React} from 'react';
import {
  StyleSheet,
  
} from 'react-native';

import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { NavigationContainer  } from '@react-navigation/native';

import Main from './Main.js'
import Similar from './ArtisteSimilaires.js'
import MeilleurMorceaux from './MeilleurMorceaux.js'


const Stack = createNativeStackNavigator()
function App() {
  
  
  return (
    <NavigationContainer>
      	<Stack.Navigator initialRouteName='Main'>
        		<Stack.Screen name='Main' component={Main}/>
       		  <Stack.Screen name='Similar' component={Similar}/>
            <Stack.Screen name='MeilleurMorceaux' component={MeilleurMorceaux}/>
     	 </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
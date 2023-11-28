import {React} from 'react';
import {
  StyleSheet,
  
} from 'react-native';

import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { NavigationContainer  } from '@react-navigation/native';

import {EcranAccueil} from './EcranAccueil.js'
import {EcranAjouter} from './EcranAjouter.js'


const Stack = createNativeStackNavigator()
function App() {
  
  
  return (
    <NavigationContainer>
      	<Stack.Navigator>
        		<Stack.Screen name='Accueil' component={EcranAccueil}/>
       		  <Stack.Screen name='AjouterEvalution' component={EcranAjouter}/>
     	 </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;

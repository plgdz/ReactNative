import React from 'react';
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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {EcranAccueil} from 'Ecra'


function App() {
  const Stack = createNativeStackNavigator()
  
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

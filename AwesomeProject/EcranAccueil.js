import React from `react`
import {Text, Button, View} from 'react-native'

function EcranAccueil(nav){
    return (
        <View>
            <Text>Evaluation de biere de micro</Text>
            <Button title='Ajouter une eval' onPress={()=>nav.navigate('AjouterEvaluation')}></Button>
            <Button title='Voir les evals'></Button>
        </View>
    )
}

export default EcranAccueil
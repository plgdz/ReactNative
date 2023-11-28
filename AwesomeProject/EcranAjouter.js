import { Slider } from '@react-native-assets/slider'
import React from 'react'
import {Text, Button, View, StyleSheet} from 'react-native'

function EcranAjouter(nav){
    return (
        <View>
            <Text>Evaluation de biere de micro</Text>
            <TextInput placeholder="Entrez le nom de la biere"></TextInput>
            <View>
                <Text>Evaluation</Text>
                <Slider maximumValue={5} minimumValue={0} style={{flex:3}}></Slider>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        rangee:{
            flexDirection: 'row'
        }
    }
)

export default EcranAjouter
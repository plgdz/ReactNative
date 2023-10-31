import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

// Composant fonctionnel

// function Chanson() {
//     const nom  = 'La Puissance'
//     return (
//         <View>
//             <Text>{nom}</Text>
//         </View>
//     )
// }


// Composant en arrow function

// const Chanson = () => {
//     const nom  = 'La Puissance'
//     return (
//         <View>
//             <Text>{nom}</Text>
//         </View>
//     )
// }


// Composant class

class Chanson extends React.Component{

    render() {
        const nom = "Rohff"
        return (
            <View style={style.viewAppearance} >
                <Text>{nom}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create(
    {
        viewAppearance : {
            backgroundColor: 'red',
            borderRadius: 8,
            margin: 10
        }
    }
)

export default Chanson

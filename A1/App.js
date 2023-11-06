import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Chanson from './chanson.js'

function creerTab() {
    const tab = []
    for (let index = 0; index < 4; index++) {
        tab.push(<Chanson />)
    }
    return tab
}

const imagePlay = require('./images/play.png')


class Playlist extends React.Component{

        
    render() {
        return (
            <View  >
                <View style={style.row}>
                    <Chanson />
                    <Chanson />
                </View> 
                <View style={style.row}>
                    <Chanson />
                    <Chanson />
                </View> 
            </View>
        )
    }
}

const style = StyleSheet.create(
    {
        row : {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        
    }
    
)

export default Playlist

import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Btn() {
  return (
    <Pressable style={styles.btnContainer}>
        <View style={styles.btnDisplay}>
            <Text style={styles.textDisplay}>Ajouter un photographe</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    btnDisplay: {
        backgroundColor : "#644536",
        padding : 8,
        borderRadius : 5
        
    },
    textDisplay: {
        color : "#eee2e2",
        fontSize : 20 
    }
})
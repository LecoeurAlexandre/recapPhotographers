import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Btn({children, onPress}) {
  
    return (
    <Pressable style={styles.btnContainer} onPress={onPress}>
        <View style={styles.btnDisplay}>
            <Text style={styles.textDisplay}>{children}</Text>
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
        backgroundColor : "#eee2e2",
        padding : 8,
        borderRadius : 5
        
    },
    textDisplay: {
        color : "#2E3138",
        fontSize : 20 
    }
})
import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Btn from '../components/Btn'

export default function HomePageScreen({navigation}) {
  return (

      <View style={styles.homeContainer}>
        <View style={styles.textAreas}>
          <Text style={styles.titleLayout}>Photographes de Cherbourg (XIXème siècle)</Text>
            <Text style={styles.textLayout}>Visualisez les informations biographiques et professionnelles importantes de tous les photographes cherbourgeois du XIXème siècle.</Text>
        </View>
        <View style={styles.btnLayout}>
          <Pressable onPress={() => navigation.navigate('AddPhotographer')}>
            <Btn style={styles.btnCenter} />
          </Pressable>
        </View>  
      </View>
  )
}

const styles = StyleSheet.create({
  homeContainer : {
    flex: 1,
    backgroundColor: 'black'
  },
  titleLayout : {
    color : "#eee2e2",
    fontSize : 25,
    fontFamily : 'cursive',
    marginTop : 20,
    marginBottom : 100
  },
  textLayout : {
    color : "#eee2e2",
    textAlign : 'center',
    margin : 5,
    padding : 5,
    borderColor : '#eee2e2',
    borderWidth : 2
  },
  textAreas : {
    alignItems: 'center',
  },
  btnLayout : {
    position : 'absolute',
    bottom : 40,
    left : '22%'
  },
})
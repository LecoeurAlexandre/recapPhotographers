import { StyleSheet, TextInput, ScrollView, Text, Button } from 'react-native'
import React, { useState } from 'react'
import BASE_DB_URL from '../env'

export default function FormScreen() {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [birthDate, setBirthDate] = useState()
  const [birthPlace, setBirthPlace] = useState()
  const [deathDate, setDeathDate] = useState()
  const [deathPlace, setDeathPlace] = useState()
  const [infos, setInfos] = useState()
  const [photo, setPhoto] = useState()

  const addPhotographer = async () => {
    const newPhotographer = {
      firstname : firstName,
      lastname : lastName,
      birthdate : birthDate,
      birthplace : birthPlace,
      deathdate : deathDate,
      deathPlace : deathPlace,
      infos : infos,
      photo : photo
    }
    console.log(newPhotographer)
    const response = await fetch(BASE_DB_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPhotographer)
    })

    if (!response.ok) {
      throw new Error("Il y a eu une erreur lors de l'ajout d'une tâche !")
    }

    //const data = await response.json()
  }
  
  
  return (
    <ScrollView>
      <Text style={styles.label}>Prénom</Text><TextInput style={styles.input} onChangeText={setFirstName} placeholder="Tancrède"/>
      <Text style={styles.label} autoCapitalize='characters'>Nom</Text><TextInput style={styles.input} onChangeText={setLastName} placeholder="MARTIN"/>
      <Text style={styles.label}>Date de naissance</Text><TextInput style={styles.input} onChangeText={setBirthDate} placeholder="JJ/MM/AAAA"/>
      <Text style={styles.label}>Lieu de naissance</Text><TextInput style={styles.input} onChangeText={setBirthPlace} placeholder="Cherbourg"/>
      <Text style={styles.label}>Date de décès</Text><TextInput style={styles.input} onChangeText={setDeathDate} placeholder="JJ/MM/AAAA"/>
      <Text style={styles.label}>Lieu de décès</Text><TextInput style={styles.input} onChangeText={setDeathPlace} placeholder="Cherbourg"/>
      <Text style={styles.label} numberOfLines={10}>Infos professionnelles</Text><TextInput style={styles.input} onChangeText={setInfos} placeholder="Installation au ..."/>
      <Text style={styles.label}>Photo d'identité</Text><TextInput style={styles.input} onChangeText={setPhoto} placeholder="../assets/"/>
      <Button title='Soumettre' onPress={addPhotographer}></Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  label: {
    marginLeft : 12,
    marginVertical : 6,
    fontWeight : 'bold',
    color : 'black'

  },
  input: {
    height: 40,
    marginHorizontal: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
})
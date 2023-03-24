import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import BASE_DB_URL from '../env'
import { useSelector, useDispatch } from 'react-redux'
import { addPhotographer } from '../store/photographersSlice'

export default function PhotographersList() {
  const allPhotographers= useSelector((state) => state.photographers.photographers)
  const dispatch = useDispatch()

  useEffect(() => {
    async function getAllPhotographers(){
      const response = await fetch(BASE_DB_URL)
    
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des photographes !")
      }
      
      const data = await response.json()
      console.log("response"+ data)
      dispatch(addPhotographer(data))
      //console.log(allPhotographers)
    }
    getAllPhotographers();
  },[])

  

  return (
    <FlatList data={allPhotographers} renderItem={(itemData) => {
      return (
        <View>
          <Text>{itemData.firstname}</Text>
          <Text>{itemData.lastname}</Text>
        </View>  
      )
    }} keyExtractor={(item,index)=> {
      return item.id
    }}></FlatList>
  )
}

const styles = StyleSheet.create({})
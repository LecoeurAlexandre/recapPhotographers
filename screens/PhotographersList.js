import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import BASE_DB_URL from '../env'
import { useSelector, useDispatch } from 'react-redux'
import { addPhotographer } from '../store/photographersSlice'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function PhotographersList() {
  const allPhotographers= useSelector((state) => state.photographers.photographers)
  const dispatch = useDispatch()


  const getAllPhotographers = async()=>{
    const response = await fetch(BASE_DB_URL)
    
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des photographes !")
    }
    
    const data = await response.json()
    console.log("response", data)
    let tmptab=[]
    if(data !== undefined){
      for(let key in data){
        tmptab.push({id:key,...data[key]})
      }
      dispatch(addPhotographer(tmptab))
    }
  }

  useEffect(() => {
    getAllPhotographers();
  },[])

  

  return (
    <SafeAreaView>
      {
        allPhotographers.length !==0 &&
        <FlatList data={allPhotographers} renderItem={(itemData) => {
    
          console.log("item",itemData.item)
          return (
            <View>
              <Text style={styles.text}>{itemData.item.firstname}</Text>
              <Text style={styles.text}>{itemData.item.lastname}</Text>
            </View>
          )
        }} keyExtractor={(item,index)=> {
          return index
        }}></FlatList>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    height:80,
  },
  text:{
    color:"black"
  }
})
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BiographicalNote from "./screens/BiographicalNote";
import FormScreen from "./screens/FormScreen";
import HomePageScreen from "./screens/HomePageScreen";
import PhotographersList from "./screens/PhotographersList";
import { StyleSheet } from 'react-native'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drawer" component={MyDrawer} options={{headerShown: false}}/>
      <Drawer.Screen name="InfosPhotographers" component={BiographicalNote} options={{title : 'Notice biographique'}}/>
    </Stack.Navigator>
  )
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomePageScreen} options={{title : 'Accueil'}}/>
      <Drawer.Screen name="Photographers" component={PhotographersList} options={{title : 'Photographes'}}/>
      <Drawer.Screen name="AddPhotographer" component={FormScreen} options={{title : 'Ajouter photographe'}}/>
    </Drawer.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

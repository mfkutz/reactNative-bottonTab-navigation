import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import ScreenOne from './components/ScreenOne';
import ScreenTwo from './components/ScreenTwo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarStyle: { backgroundColor: "black" }
        }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: "Inicio",
              headerTitle: "Hello",
              tabBarActiveTintColor: "violet",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Entypo name="add-user" size={24} color={color} />

              ),

            }}
          />
          <Tab.Screen
            name="ScreenOne"
            component={ScreenOne}
            options={{
              title: "Opcion",
              /* tabBarShowLabel: false, */
              tabBarActiveTintColor: "violet",
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="dropbox" size={24} color={color} />
              )

            }}
          />
          <Tab.Screen
            name="ScreenTwo"
            component={ScreenTwo}
            options={{
              title: "Mapa Guia",
              tabBarActiveTintColor: "violet",
              tabBarIcon: ({ size, color }) => (
                <Entypo name="map" size={24} color={color} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

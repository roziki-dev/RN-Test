import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  Categories,
  Detail
} from '../views'

const Stack = createStackNavigator()

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='categories'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="categories" component={Categories} />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default RootNavigation

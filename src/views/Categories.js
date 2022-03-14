import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { styles } from '../styles'

const Categories = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Text>Categories</Text>
    </View>
  )
}

export default Categories

import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"

import { colors, styles } from '../styles'
import { dataCategory } from '../const'
import { CategoryItemTitle, HeaderDefault } from '../components'

const Categories = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.statusBar} barStyle={'light-content'} />
      <HeaderDefault
        right={(
          <TouchableOpacity>
            <Icon name='md-search' color={colors.black} size={24} />
          </TouchableOpacity>
        )}
      />
      <View style={Style.wrapOmg}>
        <Text style={Style.omg}>OMG! <Text style={Style.war}>STAR WARS</Text></Text>
      </View>
      <FlatList
        data={dataCategory}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item, index }) => (
          <CategoryItemTitle title={item} isFocus={index === 0} />
        )}
        horizontal={true}
        contentContainerStyle={{
          paddingHorizontal: 20
        }}
      />
    </View>
  )
}

const Style = StyleSheet.create({
  wrapOmg: {
    paddingHorizontal: 28,
    paddingTop: 24
  },
  omg: {
    fontWeight: 'bold',
    fontSize: 12,
    color: colors.textDisabled
  },
  war: {
    fontWeight: '300'
  }
})

export default Categories

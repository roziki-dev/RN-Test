import { StyleSheet, Dimensions } from 'react-native'
import { colors } from './colors'

export const screen = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})

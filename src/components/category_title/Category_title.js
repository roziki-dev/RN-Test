import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../styles'

const CategoryItemTitle = ({ title, isFocus, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.containerTitle}>
        <Text style={[styles.title, {
          color: isFocus ? colors.black : colors.textDisabled,
          fontWeight: isFocus ? 'bold' : '400'
        }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

CategoryItemTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isFocus: PropTypes.bool.isRequired,
  onPress: PropTypes.func
}

CategoryItemTitle.defaultProps = {
  title: '',
  isFocus: false,
  onPress: () => { }
}

const styles = StyleSheet.create({
  containerTitle: {
    paddingHorizontal: 8
  },
  title: {
    fontSize: 28,
    textTransform: 'uppercase'
  }
})

export default CategoryItemTitle

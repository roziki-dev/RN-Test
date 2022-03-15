import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../styles'

const HeaderDefault = ({ title, onBack, right, containerStyle, iconBackColor }) => {
  return (
    <View style={[styles.wrapHeader, containerStyle]}>
      <View style={styles.lefrigth}>
        {onBack && (
          <TouchableOpacity onPress={onBack}>
            <Icon name='md-arrow-back' size={24} color={iconBackColor || colors.black} />
          </TouchableOpacity>)
        }
      </View>
      <View style={styles.center}>
        <Text>{title}</Text>
      </View>
      <View style={styles.lefrigth}>
        {right && right}
      </View>
    </View>
  )
}

HeaderDefault.propTypes = {
  title: PropTypes.string,
  onBack: PropTypes.func,
  right: PropTypes.element,
  containerStyle: PropTypes.object,
  iconBackColor: PropTypes.string
}

HeaderDefault.defaultProps = {
  title: '',
  iconBackColor: '',
  isFocus: false,
  onPress: () => { }
}

const styles = StyleSheet.create({
  wrapHeader: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  center: {
    flex: 1,
    paddingHorizontal: 17
  },
  lefrigth: {
    width: 42
  }
})
export default HeaderDefault

import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImagePropTypes } from 'react-native'
import { colors, screen } from '../../styles'

const CardDefault = ({ title, sourceImg, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={Style.cardWrap}>
        <View style={Style.wrapImage}>
          <Image source={sourceImg} />
        </View>
        <View style={Style.cardBody}>
          <Text numberOfLines={2} style={Style.cardTitle}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

CardDefault.propTypes = {
  title: PropTypes.string.isRequired,
  sourceImg: PropTypes.object,
  onPress: PropTypes.func
}

CardDefault.defaultProps = {
  title: '',
  onPress: () => { }
}

const Style = StyleSheet.create({
  cardWrap: {
    width: (screen.width * 0.3) - 6,
    margin: 6,
    backgroundColor: colors.white,
    borderBottomRightRadius: 20,
    elevation: 2

  },
  wrapImage: {
    width: '100%',
    height: 100,
    // height: ((screen.width * 0.3) - 20) * 2,
    padding: 5,
    // margin: 5,
    backgroundColor: colors.gray
  },
  cardBody: {
    padding: 10
  },
  cardTitle: {
    fontSize: 14,
    textAlign: 'center'
  }
})

export default CardDefault

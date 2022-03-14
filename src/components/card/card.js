import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native'
import { colors, screen } from '../../styles'

const CardDefault = ({ title, source, typeImg, imgName, onPress }) => {
  // const l = require('../../assets/' + typeImg + '/' + imgName)
  // console.log(l)
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={Style.cardWrap}>
        <View style={Style.wrapImage}>
          <Image
            source={source}
            // source={{ uri: `asset:/${typeImg}/${imgName}` }}
            style={Style.img} />
        </View>
        <View style={Style.cardBody}>
          <Text numberOfLines={2} style={Style.cardTitle}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

CardDefault.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.object,
  typeImg: PropTypes.string,
  imgName: PropTypes.string,
  onPress: PropTypes.func
}

CardDefault.defaultProps = {
  title: '',
  onPress: () => { }
}

const Style = StyleSheet.create({
  cardWrap: {
    width: (screen.width * 0.3) - 6,
    marginHorizontal: 6,
    marginVertical: 10,
    backgroundColor: colors.white,
    borderBottomRightRadius: 20,
    elevation: 2

  },
  wrapImage: {
    width: '100%',
    // height: 100,
    height: ((screen.width * 0.3) - 20) * 1.7,
    padding: 5
    // margin: 5,
    // backgroundColor: colors.gray
  },
  cardBody: {
    padding: 10
  },
  cardTitle: {
    fontSize: 14,
    textAlign: 'center'
  },
  img: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.gray
  }
})

export default CardDefault

import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native'
import { colors, screen } from '../../styles'
import { SvgXml } from 'react-native-svg'
import { bgCardSvg } from './svgCard'

const CardDefault = ({ title, source, typeImg, imgName, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        onLayout={(event) => {
          const { width, height } = event.nativeEvent.layout
          console.log(width, 'x', height)
        }}
        style={Style.cardWrap}>
        <View style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          height: (screen.width * 0.3) - 6,
          width: (screen.width * 0.3) - 6
        }}>
          <SvgXml xml={bgCardSvg} width="118" height="229" />
        </View>

        <View pointerEvents='box-only' style={Style.wrapImage}>
          <Image
            source={source}
            style={Style.img} />
        </View>
        <View pointerEvents='box-only' style={Style.cardBody}>
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
    borderBottomRightRadius: 12,
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

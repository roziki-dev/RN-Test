import React, { memo, useEffect, useMemo, useState } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet, ActivityIndicator
} from 'react-native'
import PropTypes from 'prop-types'
import { colors, screen } from '../../styles'
import request from '../../lib/axios'
import { Romawi } from '../../tools'

const HEIGHT_LAYER = screen.height * 0.16
const DEFAULT_IMG_WIDTH = screen.width * 0.8

const Starship = ({ imgUrl, detailData }) => {
  const [dataEpisode, setDataEpisode] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getdata(detailData?.films || [])
    return () => {
      setDataEpisode([])
    }
  }, [detailData?.films])

  const getdata = async (arrData) => {
    setLoading(true)
    for (const item in arrData) {
      const url = arrData[item]
      await request({
        url: url,
        method: 'GET'
      }).then(rsp => {
        const result = {
          episode: Romawi(rsp.episode_id),
          title: rsp.title
        }
        setDataEpisode(dataEpisode => [...dataEpisode, result])
      }).finally(() => {
        setLoading(false)
      })
    }
  }

  const removeDuplicates = (arr) => {
    const s = new Set(arr)
    const it = s.values()
    return Array.from(it)
  }

  const dataEpi = useMemo(() => {
    return removeDuplicates(dataEpisode)
  }, [dataEpisode])
  return (
    <>
      <View style={Style.topLayer} />
      <View style={Style.bodyContainerDetail} >
        <View style={Style.ImgWrapDetail}>
          <Image source={{ uri: imgUrl }}
            style={Style.img} />
        </View>

        {/* Detail */}
        <View style={Style.titleWarapDetail}>
          <View style={Style.lineDetail} />
          <Text numberOfLines={2} style={Style.titleDetail}>{detailData?.name || detailData?.title}</Text>
          <View style={Style.lineDetail} />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text numberOfLines={2} style={Style.starship_class}>{detailData?.model}</Text>
          <View style={Style.wrapEpisode}>
            {
              loading
                ? <ActivityIndicator size="large" color={colors.primary} />
                : dataEpi.map((item, index) => (
                  <Text key={index} numberOfLines={2} style={Style.detail_episode}>{`Episode ${item.episode}: `} <Text style={[Style.detail_episode, { fontWeight: 'bold' }]}>{item?.title}</Text></Text>
                ))
            }
          </View>
        </View>
      </View>
      <View style={Style.inlineDetail}>
        <View style={[Style.boxDetail, { flex: 1 }]}>
          <Text numberOfLines={2} style={Style.labelboxDetail}>MODEL</Text>
          <Text numberOfLines={2} style={Style.textValueBox}>{detailData?.model}</Text>
        </View>
        <View style={[Style.boxDetail, { flex: 1.7 }]}>
          <Text numberOfLines={2} style={Style.labelboxDetail}>MANUFACTURER</Text>
          <Text numberOfLines={3} style={Style.textValueBox}>{detailData?.manufacturer}</Text>
        </View>
      </View>
    </>
  )
}

Starship.propTypes = {
  detailData: PropTypes.any,
  imgUrl: PropTypes.string
}

const Style = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.background
  },
  topLayer: {
    height: HEIGHT_LAYER,
    backgroundColor: colors.primary
  },
  bodyContainerDetail: {
    backgroundColor: colors.white,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center'
  },
  ImgWrapDetail: {
    alignItems: 'center',
    padding: 4,
    backgroundColor: colors.white,
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 6,
    marginTop: -(DEFAULT_IMG_WIDTH * 0.35),
    width: DEFAULT_IMG_WIDTH + 8,
    height: DEFAULT_IMG_WIDTH * 0.6 + 8
  },
  img: {
    width: DEFAULT_IMG_WIDTH,
    height: DEFAULT_IMG_WIDTH * 0.6,
    borderRadius: 5
  },
  titleWarapDetail: {
    paddingVertical: 10,
    paddingHorizontal: 32,
    marginHorizontal: 24,
    marginTop: 20,
    width: '100%'
  },
  titleDetail: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.title,
    marginVertical: 20
  },
  lineDetail: {
    flex: 1,
    backgroundColor: colors.primary,
    height: 2
  },

  starship_class: {
    color: colors.textDisabled,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },

  inlineDetail: {
    // marginVertical: 5,

    flex: 1,
    paddingHorizontal: 17,
    flexDirection: 'row'
  },
  boxDetail: {
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 10,
    margin: 3,
    marginVertical: 5
  },
  labelboxDetail: {
    fontWeight: 'bold',
    fontSize: 12,
    color: colors.textDisabled
  },
  textValueBox: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 20
  },
  wrapEpisode: {
    marginVertical: 42
  },
  detail_episode: {
    color: colors.black,
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 2
  }
})

export default memo(Starship)

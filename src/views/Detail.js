import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  InteractionManager
} from 'react-native'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderDefault } from '../components'
import { colors, styles } from '../styles'
import { getDetail } from '../store/action'

import Starship from './detail/Starship'

const Detail = (props) => {
  const dispatch = useDispatch()
  const [imgUrl] = useState(props.route.params.imgUrl || '')
  const detailData = useSelector(state => state.detail.data)

  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(() => {
      dispatch(getDetail({ url: props.route.params.url, detailType: props.route.params.typeData, id: props.route.params.id }))
    })
    return () => {
      task.cancel()
    }
  }, [props.route.params.typeData, props.route.params.id, props.route.params.url])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
      <HeaderDefault
        onBack={() => props.navigation.goBack()}
        containerStyle={{
          backgroundColor: colors.primary
        }}
        iconBackColor={'#4C2C00'}
      />
      <ScrollView style={Style.content}>
        <Starship detailData={detailData} imgUrl={imgUrl} />
      </ScrollView>
    </SafeAreaView>
  )
}

Detail.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object
}

const Style = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.background
  }
})

export default Detail

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'

import { colors, screen, styles } from '../styles'
import { dataCategory } from '../const'
import { CardDefault, CategoryItemTitle, HeaderDefault } from '../components'
import { getCategory } from '../store/action'

const Categories = (props) => {
  const dispatch = useDispatch()
  const listData = useSelector(state => state.categoryList.data)
  const loadingData = useSelector(state => state.categoryList.loading)
  const errorInfo = useSelector(state => state.categoryList.error)
  const [selectedCategory, setSelectedCategory] = useState(dataCategory[0] || '')

  useEffect(() => {
    dispatch(getCategory({ category: selectedCategory }))
  }, [selectedCategory])

  const onSelectCategory = (item) => {
    requestAnimationFrame(() => {
      setSelectedCategory(item)
    })
  }

  const data = useMemo(() => {
    return listData
  }, [listData])

  const openDetail = useCallback((item, index) => {
    requestAnimationFrame(() => {
      if (selectedCategory === 'starships') {
        props.navigation.navigate('detail', {
          id: index + 1,
          typeData: selectedCategory,
          data: item,
          url: selectedCategory === 'starships' ? item.url : '',
          imgUrl: item?.imgPath || ''
        })
      } else {
        alert('Sorry!\nPlease Open detail only Starships')
      }
    })
  }, [selectedCategory])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.statusBar} barStyle={'light-content'} />
      <HeaderDefault
        right={(
          <TouchableOpacity>
            <Icon name='md-search' color={colors.black} size={24} />
          </TouchableOpacity>
        )}
      />
      <FlatList
        data={loadingData ? [] : data}
        keyExtractor={(item, index) => String(index)}
        style={Style.content}
        numColumns={3}
        renderItem={({ item, index }) => (
          <CardDefault
            title={item?.name || item?.title}
            source={{ uri: item?.imgPath }}
            onPress={() => openDetail(item, index)}
          />
        )}
        ListHeaderComponent={(
          <>
            <View style={Style.wrapOmg}>
              <Text style={Style.omg}>OMG! <Text style={Style.war}>STAR WARS</Text></Text>
            </View>
            <FlatList
              data={dataCategory}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item, index }) => (
                <CategoryItemTitle
                  title={item}
                  isFocus={item === selectedCategory}
                  onPress={() => onSelectCategory(item)} />
              )}
              horizontal={true}
              style={{ marginHorizontal: -20, marginBottom: 24 }}
              contentContainerStyle={{ paddingHorizontal: 20 }}
              showsHorizontalScrollIndicator={false}
            />
          </>
        )}
        ListEmptyComponent={() =>
          <>
            {
              loadingData
                ? <View style={Style.loading}>
                  <ActivityIndicator color={colors.primary} size={48} />
                </View>
                : errorInfo
                  ? <View style={Style.empty}>
                    <Text style={Style.WrongHead}>Something went wrong!</Text>
                    <Text style={Style.WrongInfo}>{errorInfo}</Text>
                  </View>
                  : <View style={Style.empty}>
                    <Text style={Style.emptyText}>No data</Text>
                  </View>
            }
          </>
        }
        contentContainerStyle={{
          paddingHorizontal: 10
        }}
      />
    </SafeAreaView>
  )
}

const Style = StyleSheet.create({
  wrapOmg: {
    paddingHorizontal: 10,
    paddingTop: 24,
    marginBottom: 1
  },
  omg: {
    fontWeight: 'bold',
    fontSize: 12,
    color: colors.textDisabled
  },
  war: {
    fontWeight: '300'
  },
  content: {
    flex: 1
  },
  empty: {
    height: screen.height * 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    height: screen.height * 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  WrongHead: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: colors.textDisabled
  },
  WrongInfo: {
    marginTop: 5,
    fontSize: 17,
    textAlign: 'center',
    color: colors.textDisabled
  }
})

export default Categories

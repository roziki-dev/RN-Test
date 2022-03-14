import React from 'react'
import RootNavigation from './navigation/root'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './store/reducer'

const store = createStore(reducers, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  )
}

export default App

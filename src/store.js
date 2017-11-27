import { createStore, applyMiddleware, compose } from 'redux'

import { routerMiddleware } from 'react-router-redux'

import thunk from 'redux-thunk'

import reducers from './reducers' // Or wherever you keep your reducers

import DevTools from './DevTools'

export default (history, initialState = {}) => {

    const enhancers = [
        applyMiddleware(thunk),
        applyMiddleware(routerMiddleware(history)),
    ]

    if (process.env.NODE_ENV === 'development') {
            // Enable DevTools only when rendering on client and during development.
        enhancers.push(
            window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
        )
    }

    // Add the reducer to your store on the `router` key
    // Also apply our middleware for navigating
    const store = createStore(
      reducers,
      initialState,
      compose(...enhancers)
    )

    return store
}

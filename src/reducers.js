import intl from './lib/intl/reducer'
import theme from './lib/theme/reducer'
import menu from './lib/menu/reducer'
import search from './lib/search/reducer'

import { routerReducer } from 'react-router-redux'

import { combineReducers } from 'redux'

export default combineReducers({
    ...intl,
    ...theme,
    ...menu,
    ...search,
    router: routerReducer,
})

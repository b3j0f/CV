import { CHANGE_THEME, ADD_THEME, REMOVE_THEME } from './actions'

import light from 'material-ui/styles/baseThemes/lightBaseTheme'
import dark from 'material-ui/styles/baseThemes/darkBaseTheme'

const initialThemeState = 'light'

const theme = (state = initialThemeState, action) => {
    switch (action.type) {
    case CHANGE_THEME: return action.payload
    default: return state
    }
}

const initialThemesState = {
    light,
    dark,
}

const themes = (state = initialThemesState, action) => {
    switch (action.type) {
    case ADD_THEME: return {
        ...state,
        [action.payload.name]: action.payload.theme
    }
    case REMOVE_THEME:
        const result = Object.assign({}, state)
        delete result[action.payload]
        return result
    default: return state
    }
}


export default { theme, themes }

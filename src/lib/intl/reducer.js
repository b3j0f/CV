import { enabledLanguages, localizationData } from './setup'
import { SWITCH_LANGUAGE } from './actions'

const initLocale = (global.navigator && global.navigator.language.slice(0, 2)) || 'en'

const initialState = {
    locale: initLocale,
    enabledLanguages,
    ...(localizationData[initLocale] || {}),
}

const intl = (state = initialState, action) => {
    switch (action.type) {
    case SWITCH_LANGUAGE: {
        const { type, ...actionWithoutType } = action // eslint-disable-line
        return { ...state, ...actionWithoutType }
    }

    default:
        return state
    }
}

export default { intl }

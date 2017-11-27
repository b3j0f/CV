import { TOGGLE_MENU } from './actions'

const initialShowMenuState = false

function showMenu(state = initialShowMenuState, action) {
    switch (action.type) {
    case TOGGLE_MENU: {
        return action.payload === null ? (!state) : action.payload
    }
    default: return state
    }
}

export default { showMenu }

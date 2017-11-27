import { SEARCH } from './actions'

const initialSearchState = ''

function search(state = initialSearchState, action) {
    switch (action.type) {
    case SEARCH: return action.payload
    default: return state
    }
}

export default { search }

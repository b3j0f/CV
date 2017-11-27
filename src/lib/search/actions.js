export const SEARCH = 'SEARCH'

export const search = (input = '') => ({
    type: SEARCH, payload: input
})

export const CHANGE_THEME = 'CHANGE_THEME'
export const ADD_THEME = 'ADD_THEME'
export const REMOVE_THEME = 'REMOVE_THEME'

export const changeTheme = (name = 'light') => ({
    type: CHANGE_THEME, payload: name
})

export const addTheme = (name, theme) => ({
    type: ADD_THEME, payload: { name, theme }
})

export const removeTheme = name => ({
    type: REMOVE_THEME, payload: name
})

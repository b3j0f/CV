import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const baseMuiTheme = {
    userAgent: 'all',
}

class Theme extends Component {
    render() {
        const { theme, themes, children } = this.props

        const uiTheme = {
            ...baseMuiTheme,
            ...themes[theme],
        }

        const muiTheme = getMuiTheme(uiTheme)

        return (
          <MuiThemeProvider muiTheme={muiTheme}>
          {children}
          </MuiThemeProvider>
        )
    }
}

Theme.propTypes = {
    theme: PropTypes.string.isRequired,
    themes: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    theme: state.theme,
    themes: state.themes,
})

export default connect(mapStateToProps)(Theme)

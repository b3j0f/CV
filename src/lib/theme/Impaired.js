import React, { Component } from 'react'

import PropTypes from 'prop-types'

// Import Style
import './Impaired.css'

import { changeTheme } from './actions'

import { connect } from 'react-redux'

import { FormattedMessage } from 'react-intl'

import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye'

import IconButton from 'material-ui/IconButton'
import { white, black } from 'material-ui/styles/colors'

class Impaired extends Component {
    constructor(props) {
        super(props)
        this.state = {
            impaired: props.impaired || false,
        }
    }
    handleSwitch = impaired => {
        const { switchTheme } = this.props
        this.setState({ impaired })
        switchTheme(impaired ? 'dark' : this.theme)
    }
    render() {
        const { theme } = this.props

        if (theme !== 'dark') {
            this.theme = theme
        }

        const { impaired } = this.state

        return (
          <IconButton className="impaired" touch tooltip={<FormattedMessage id={impaired ? 'paired' : 'impaired'} />} onClick={() => this.handleSwitch(!impaired)}>
            <RemoveRedEye color={impaired ? white : black}/>
          </IconButton>
        )
    }
}

Impaired.propTypes = {
    theme: PropTypes.string.isRequired,
    impaired: PropTypes.bool,
    switchTheme: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    theme: state.theme,
})

const mapDispatchToProps = dispatch => ({
    switchTheme: newTheme => {
        dispatch(changeTheme(newTheme))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Impaired)

import React, { Component } from 'react'

import { connect } from 'react-redux'

import { switchLanguage } from '../actions'

import PropTypes from 'prop-types'

import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'

import flags from './img/main'

import style from './Flags.css'

class Flags extends Component {
    handleChange = (event, index, value) => this.setState({ value })
    flag(language) {
        return (
          <img alt={language} src={flags[language]} className={style.flag} />
        )
    }
    switchLanguage = (evt, idx, lang) => {
        this.props.switchLanguage(lang)
    }
    render() {
        const { locale, languages } = this.props

        return (
          <SelectField
            value={locale}
            onChange={this.switchLanguage}
            id="flags"
            style={{width: '30%'}}
          >
            {
              languages.map(
                  language =>
                    <MenuItem
                      value={language}
                      key={language}
                      primaryText={this.flag(language)}
                    />
              )
            }
          </SelectField>
        )
    }
}

Flags.propTypes = {
    languages: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    locale: PropTypes.string.isRequired,
    switchLanguage: PropTypes.func.isRequired,
}

// Retrieve data from store as props
const mapStateToProps = store => ({
    languages: store.intl.enabledLanguages,
    locale: store.intl.locale,
})

const mapDispatchToProps = dispatch => ({
    switchLanguage: language => dispatch(switchLanguage(language)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Flags)

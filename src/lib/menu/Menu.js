import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { toggleMenu } from './actions'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

// Import Style
import style from './Menu.css'

import { FormattedMessage } from 'react-intl'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

import pages from '../../pages/pages'

class Menu extends Component {
    render() {
        const { showMenu, toggleMenu } = this.props

        const fpages = pages.map(
            page => page.split(':')[0]
        )

        const menuItems = fpages.map(
            page => {
                const route = `/${page}`
                return (
                  <Link to={route} key={page}>
                    <MenuItem onClick={toggleMenu} primaryText={
                        <FormattedMessage id={page} />
                    } />
                  </Link>
                )
            }
        )

        return (
          <Drawer open={showMenu} docked={false} onRequestChange={this.props.toggleMenu} className={style.menu}>
            <AppBar title={<FormattedMessage id="pages" />} showMenuIconButton={false} />
              {menuItems}
          </Drawer>
        )
    }
}

Menu.propTypes = {
    showMenu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    showMenu: state.showMenu,
})

const mapDispatchToProps = dispatch => ({
    toggleMenu: () => dispatch(toggleMenu()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)

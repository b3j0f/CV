import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import { ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar'

import { FormattedMessage } from 'react-intl'

import { connect } from 'react-redux'

import { toggleMenu } from '../../lib/menu/actions'

import { push } from 'react-router-redux'

import Flags from '../../lib/intl/flags/Flags'
import Menu from '../../lib/menu/Menu'
import Search from '../../lib/search/Search'
import Impaired from '../../lib/theme/Impaired'

class Header extends Component {
    render() {
        return (
          <div className="header no-print">
            <Menu />
            <AppBar
              title={<FormattedMessage id="website" values={{ name: 'Jonathan labéjof' }} />}
              onLeftIconButtonTouchTap={this.props.toggleMenu}
              onTitleTouchTap={this.props.goToHome}
            >
              <ToolbarGroup>
                <Search />
                <ToolbarSeparator />
                <Flags />
                <Impaired />
              </ToolbarGroup>
            </AppBar>
          </div>
        )
    }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch => ({
    toggleMenu: () => dispatch(toggleMenu()),
    goTohome: () => dispatch(push('/'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

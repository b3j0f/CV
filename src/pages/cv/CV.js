import React, { Component } from 'react'

import { FormattedMessage } from 'react-intl'

import { connect } from 'react-redux'

import { Switch, Route } from 'react-router'

import { push } from 'react-router-redux'

import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'

import ProfileIcon from 'material-ui/svg-icons/action/account-circle'
import SkillsIcon from 'material-ui/svg-icons/social/poll'
import HobbiesIcon from 'material-ui/svg-icons/social/mood'
import AllIcon from 'material-ui/svg-icons/content/content-paste'
import HistoryIcon from 'material-ui/svg-icons/action/history'
import ContactIcon from 'material-ui/svg-icons/communication/import-contacts'

import Profile from '../../components/cv/profile/Profile'
import Skills from '../../components/cv/skills/Skills'
import Hobbies from '../../components/cv/hobbies/Hobbies'
import Contact from '../../components/cv/contact/Contact'
import History from '../../components/cv/history/History'

const All = () => (
  <div className="CV">
  <div className="row">
    <Profile />
    <History />
    <Skills />
    <div className="row">
    <div className="col s12 m6">
    <Hobbies />
    </div>
    <div className="col s12 m6">
    <Contact />
    </div>
    </div>
    </div>
  </div>
)

const content = {
    All: {
        component: All,
        Icon: AllIcon,
    },
    Profile: {
        component: Profile,
        Icon: ProfileIcon,
    },
    History: {
        component: History,
        Icon: HistoryIcon,
    },
    Skills: {
        component: Skills,
        Icon: SkillsIcon,
    },
    Hobbies: {
        component: Hobbies,
        Icon: HobbiesIcon,
    },
    Contact: {
        component: Contact,
        Icon: ContactIcon,
    }
}

class CV extends Component {
    render() {
        const { push, location } = this.props

        const names = Object.keys(content).map(
            name => `/cv/${name.toLowerCase()}`
        )

        const index = names.indexOf(location)

        return (
          <div id="cv">
            <Switch>
              {
                  Object.entries(content).map(
                      ([name, { component }]) => (
                          <Route
                            key={name}
                            path={`/cv/${name.toLowerCase()}`}
                            component={component}
                          />
                      )
                  )
              }
            </Switch>
            <div className="no-print">
            <BottomNavigation selectedIndex={index}>
              {
                  Object.entries(content).map(
                      ([name, { Icon }], index) => (
                        <BottomNavigationItem
                          key={name}
                          label={<FormattedMessage id={name.toLowerCase()} />}
                          icon={<Icon />}
                          onClick={() => push(`/cv/${name.toLowerCase()}`)}
                        />
                      )
                  )
              }
            </BottomNavigation>
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => ({
    location: state.router.location,
})

const mapDispatchToProps = dispatch => ({
    push: path => dispatch(push(path)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CV)

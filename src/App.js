import React, { Component } from 'react'

// import styles
import './App.css'
import 'c3/c3.css'

import DevTools from './DevTools'

import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter } from 'react-router-redux'

import Theme from './lib/theme/Theme'
import Intl from './lib/intl/wrapper'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'

import defaultRoutes from './routes'

import createStore from './store'

import 'materialize-css/dist/css/materialize.min.css'

// Create a history of your choosing (we're using a browser history in this case)
const defaultHistory = createHistory()

class App extends Component {
    render() {
        const { routes = defaultRoutes, history = defaultHistory } = this.props

        const store = this.props.store || createStore(history)

        return (
          <Provider store={store}>
            <Theme>
              <Intl>
                <ConnectedRouter
                  history={history}
                >
                  <div>
                    {
                        process.env.NODE_ENV === 'development' && <DevTools />
                    }
                    <Header />
                    <div className="container">
                    {routes}
                    </div>
                    <Footer />
                  </div>
                </ConnectedRouter>
              </Intl>
            </Theme>
          </Provider>
        )
    }
}

export default App

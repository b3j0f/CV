import React, { Component } from 'react'

import PropTypes from 'prop-types'

// Import Style
import './Search.css'

import { connect } from 'react-redux'

import SearchBar from 'material-ui-search-bar'

import { search } from './actions'

class Search extends Component {
    render() {
        const { search } = this.props

        return (
          <SearchBar
            value={search}
            className="search"
            onChange={this.props.handleSearch}
            onRequestSearch={() => null}
            dataSource={[]}
          />
        )
    }
}

Search.propTypes = {
    search: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    search: state.search,
})

const mapDispatchToProps = dispatch => ({
    handleSearch: input => dispatch(search(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import fetchData from '../utils/fetchData'

export default (OriginalComponent, url) =>
  class WithFetchData extends Component {
    static propTypes = {
      url: PropTypes.string
    }

    state = {
      data: null,
      loading: false,
      error: false
    }

    componentDidMount() {
      if (!this.state.loading) this.loadData()
    }

    loadData() {
      const path = this.props.url || url
      if (path) {
        this.setState({ loading: true, error: false })
        fetchData(path)
          .then((json) => this.setState({ data: json, loading: false }))
          .catch((error) => this.setState({ error: true, loading: false }))
      }
    }

    render() {
      return <OriginalComponent {...this.props} {...this.state} />
    }
  }

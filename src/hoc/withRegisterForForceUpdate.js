import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

export default (OriginalComponent, url) =>
  class WithRegisterForForceUpdate extends Component {
    static defaultProps = {
      register: true,
      router: PropTypes.object
    }

    static propTypes = {
      register: PropTypes.bool
    }

    state = {
      id: uuid()
    }

    componentDidMount() {
      const { router, register } = this.props
      if (register) {
        window.addEventListener('popstate', this.popHandler)
        router.register(this.state.id, this)
      }
    }

    componentWillUnmount() {
      const { router, register } = this.props
      if (register) {
        router.unregister(this.state.id)
        window.removeEventListener('popstate', this.popHandler)
      }
    }

    popHandler = () => {
      this.forceUpdate()
    }

    render() {
      return <OriginalComponent {...this.props} />
    }
  }

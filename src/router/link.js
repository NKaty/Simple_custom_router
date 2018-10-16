import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withRouterContext from '../hoc/withRouterContext'

class Link extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    replace: PropTypes.bool,
    router: PropTypes.object
  }

  clickHandler = (event) => {
    const { to, replace, router } = this.props

    event.preventDefault()

    replace
      ? window.history.replaceState({}, null, to)
      : window.history.pushState({}, null, to)

    Object.values(router.routes).forEach((route) => route.forceUpdate())
  }

  render() {
    const { to, children, style } = this.props

    return (
      <a style={style} href={to} onClick={this.clickHandler}>
        {children}
      </a>
    )
  }
}

export default withRouterContext(Link)

import React, { Component } from 'react'

import matchPath from '../utils/matchPath'
import withRouterContext from '../hoc/withRouterContext'
import withRegisterForForceUpdate from '../hoc/withRegisterForForceUpdate'

class Switch extends Component {
  render() {
    let element, match, isRoute

    React.Children.forEach(this.props.children, (child) => {
      if (!match) {
        element = child
        isRoute = !!child.props.path
        match = matchPath(window.location.pathname, {
          path: child.props.path || child.props.from,
          exact: child.props.exact
        })
      }
    })

    return match
      ? isRoute
        ? React.cloneElement(element, { register: false })
        : element
      : null
  }
}

export default withRouterContext(withRegisterForForceUpdate(Switch))

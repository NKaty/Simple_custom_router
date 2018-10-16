import { createElement, Component } from 'react'
import PropTypes from 'prop-types'

import withRouterContext from '../hoc/withRouterContext'
import matchPath from '../utils/matchPath'
import withRegisterForForceUpdate from '../hoc/withRegisterForForceUpdate'

class Route extends Component {
  static propTypes = {
    exact: PropTypes.bool,
    path: PropTypes.string,
    component: PropTypes.func,
    render: PropTypes.func,
    children: PropTypes.func
  }

  render() {
    const { exact, path, component, render, children } = this.props
    const match = matchPath(window.location.pathname, { path, exact })

    if (children && !match) return children({ match: null })

    if (children && match) return children({ match })

    if (!match) return null

    if (component) return createElement(component, { match })

    if (render) return render({ match })

    return null
  }
}

export default withRouterContext(withRegisterForForceUpdate(Route))

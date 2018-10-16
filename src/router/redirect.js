import { Component } from 'react'
import PropTypes from 'prop-types'
import withRouterContext from '../hoc/withRouterContext'

class Redirect extends Component {
  static defaultProps = {
    push: false
  }

  static propTypes = {
    to: PropTypes.string.isRequired,
    from: PropTypes.string,
    push: PropTypes.bool.isRequired,
    router: PropTypes.object
  }

  componentDidMount() {
    const { to, push, router } = this.props

    push
      ? window.history.replaceState({}, null, to)
      : window.history.pushState({}, null, to)

    Object.values(router.routes).forEach((route) => route.forceUpdate())
  }

  render() {
    return null
  }
}

export default withRouterContext(Redirect)

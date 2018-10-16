import React from 'react'
import { RouterContext } from '../context/router'

const withRouterContext = (OriginalComponent) => {
  return function WithRouterContext(props) {
    return (
      <RouterContext.Consumer>
        {(context) => <OriginalComponent {...props} router={context} />}
      </RouterContext.Consumer>
    )
  }
}

export default withRouterContext

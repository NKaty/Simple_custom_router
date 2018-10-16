import React from 'react'
import PropTypes from 'prop-types'

import Route from './route'
import Link from './link'

const NavLink = ({ to, exact, activeStyle, style: styleProp, ...rest }) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        const style = match ? { ...styleProp, ...activeStyle } : styleProp
        return <Link style={style} to={to} {...rest} />
      }}
    />
  )
}

NavLink.propTypes = {
  to: PropTypes.string,
  exact: PropTypes.bool,
  activeStyle: PropTypes.object,
  style: PropTypes.object
}

export default NavLink

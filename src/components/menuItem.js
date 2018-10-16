import React from 'react'
import NavLink from '../router/navLink'

const MenuItem = ({ children, ...rest }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <NavLink
        {...rest}
        activeStyle={{ color: 'red' }}
        style={{ padding: '0 10px' }}
      >
        {children}
      </NavLink>
    </div>
  )
}

export default MenuItem

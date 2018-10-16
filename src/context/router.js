import React, { createContext, Component } from 'react'

export const RouterContext = createContext()

export class RouterProvider extends Component {
  state = {
    routes: {},
    register: (id, component) =>
      this.setState((state) => ({
        routes: { ...state.routes, [id]: component }
      })),
    unregister: (id) =>
      this.setState((state) => {
        const routes = { ...state.routes }
        delete routes[id]
        return {
          routes
        }
      })
  }

  render() {
    return (
      <RouterContext.Provider value={this.state}>
        {this.props.children}
      </RouterContext.Provider>
    )
  }
}

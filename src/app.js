import React, { Component } from 'react'

import Route from './router/route'
import Switch from './router/switch'
import Redirect from './router/redirect'
import Home from './components/home'
import Articles from './components/articles'
import Comments from './components/comments'
import Error from './components/error'
import Menu, { MenuItem } from './components/menu'
import { RouterProvider } from './context/router'

class App extends Component {
  render() {
    return (
      <RouterProvider>
        <div>
          <Menu>
            <MenuItem to="/" exact>
              Home
            </MenuItem>
            <MenuItem to="/articles">Articles</MenuItem>
            <MenuItem to="/comments">Comments</MenuItem>
          </Menu>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/articles" component={Articles} />
            <Route path="/comments" component={Comments} />
            <Route path="/error" component={Error} />
            <Redirect from="/redirect" to="/articles" />
            <Route render={() => <h1>Not found page</h1>} exact />
          </Switch>
        </div>
      </RouterProvider>
    )
  }
}

export default App

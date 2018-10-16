import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NavLink from '../router/navLink'
import Route from '../router/route'
import Article from './article'
import withFetchData from '../hoc/withFetchData'
import Redirect from '../router/redirect'

class Articles extends Component {
  static propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.bool
  }

  get articles() {
    return (
      <div>
        <ul>
          {this.props.data.map((article) => (
            <li key={article.id}>
              <NavLink
                to={`/articles/${article.id}`}
                activeStyle={{ color: 'red' }}
              >
                {article.title}
              </NavLink>
            </li>
          ))}
        </ul>
        {this.props.data.map((article) => (
          <Route
            key={article.id}
            path={`/articles/${article.id}`}
            render={() => <Article url={`/api/articles/${article.id}`} />}
          />
        ))}
      </div>
    )
  }

  render() {
    const { loading, error, data } = this.props

    if (error) return <Redirect to="/error" />

    if (loading) return <h3>...Loading</h3>

    if (!data) return null

    return this.articles
  }
}

export default withFetchData(Articles, '/api/articles')

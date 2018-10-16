import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Route from '../router/route'
import withFetchData from '../hoc/withFetchData'
import ArticleComments from './articleComments'
import Link from '../router/link'
import Redirect from '../router/redirect'

class Article extends Component {
  static propTypes = {
    data: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.bool
  }

  render() {
    const { loading, error, data } = this.props

    if (error) return <Redirect to="/error" />

    if (loading) return <h3>...Loading</h3>

    if (!data) return null

    return (
      <div>
        <p>{data.text}</p>
        <Route
          path={`/articles/${data.id}/comments`}
          children={({ match }) => {
            if (!match)
              return <Link to={`/articles/${data.id}/comments`}>Comments</Link>

            return <ArticleComments url={`/api/comments?article=${data.id}`} />
          }}
        />
      </div>
    )
  }
}

export default withFetchData(Article)

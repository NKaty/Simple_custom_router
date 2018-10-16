import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withFetchData from '../hoc/withFetchData'
import Comment from './comment'
import Redirect from '../router/redirect'

export class Comments extends Component {
  static propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.bool
  }

  get comments() {
    return (
      <ul>
        {this.props.data.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const { loading, error, data } = this.props

    if (error) return <Redirect to="/error" />

    if (loading) return <h3>...Loading</h3>

    if (!data) return null

    return data.length ? <div>{this.comments}</div> : <p>No comments yet</p>
  }
}

export default withFetchData(Comments)

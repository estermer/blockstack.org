'use strict'

import {Component}  from 'react'

class Loading extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="loading-container">
        <div className="m-b-20">
          <h3 className="m-b-10">
            LOADING TITLE LOADING TITLE
          </h3>
          <p>LOADING CONTENT LOADING CONTENT</p>
          <p>LOADING CONTENT LOADING CONTENT</p>
          <div className="post-meta">
            <span className="post-author">LOADING META LOADING META</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Loading

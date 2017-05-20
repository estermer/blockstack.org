'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'

class MobileNav extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="collapse navbar-collapse" id="mobile-nav" aria-expanded="false">
        <ul className="nav nav-justified">
          <li className="nav-item">
            <Link to="/intro" className="nav-link">
              Intro
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/docs" className="nav-link">
              Docs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/papers" className="nav-link">
              Papers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/videos" className="nav-link">
              Videos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faqs" className="nav-link">
              FAQs
            </Link>
          </li>
          <li role="separator" className="divider"></li>
          <li className="nav-item m-b-1">
            <Link to="https://github.com/blockstack" className="nav-link" target="_blank">
              <i className="fa fa-github"></i>
              <span>Code</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }

}

export default MobileNav

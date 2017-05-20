'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'
import MobileNav from './MobileNav'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="container nav-header">
        <nav className="navbar navbar-toggleable-xs">
          <button className="navbar-toggler pull-xs-right" type="button" data-toggle="collapse" data-target="#mobile-nav" aria-controls="mobile-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar landing-sandwich-icon"></span>
            <span className="icon-bar landing-sandwich-icon"></span>
            <span className="icon-bar landing-sandwich-icon"></span>
          </button>
          <Link className="navbar-brand brand-bug" to="/">
            <img src="/images/logos/blockstack-bug-rev.svg" />
          </Link>
          <Link className="navbar-brand brand-logo" to="/">
            <img src="/images/logos/blockstack-logo-landscape-rev.svg" />
          </Link>
          <ul className="nav navbar-nav desktop-nav">
            <li className="nav-item">
              <Link to="/install" className="nav-link">
                Install
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tutorials" className="nav-link">
                Tutorials
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
            <li className="nav-item pull-xs-right hidden-sm-down">
              <Link to="https://github.com/blockstack" className="nav-link" target="_blank">
                <i className="fa fa-github"></i>
                <span>Code</span>
              </Link>
            </li>
          </ul>
        </nav>
        <MobileNav />
      </header>
    )
  }

}

export default Header

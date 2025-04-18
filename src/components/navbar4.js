import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar4.css'

const Navbar4 = (props) => {
  return (
    <header className="navbar4-container">
      <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
        <img
          alt={props.logoAlt}
          src="https://www.mgwebdev.eu/index_files/logo.jpg"
          className="navbar4-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
          <nav className="navbar4-links1">
            <Link to="/" className="navbar4-link11 thq-link thq-body-small">
              {props.link1 ?? (
                <Fragment>
                  <span className="navbar4-text5">Home</span>
                </Fragment>
              )}
            </Link>
            <a
              href="https://privacy.mgwebdev.eu"
              target="_blank"
              rel="noreferrer noopener"
              className="navbar4-link21 thq-link thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="navbar4-text3">Privacy Portal</span>
                </Fragment>
              )}
            </a>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar4-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
          <div className="navbar4-nav">
            <div className="navbar4-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar4-logo"
              />
              <div data-thq="thq-close-menu" className="navbar4-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar4-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar4-links2">
              <a href={props.link1Url} className="thq-link thq-body-small">
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar4-text5">Home</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link2Url} className="thq-link thq-body-small">
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar4-text3">Privacy Portal</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link3Url} className="thq-link thq-body-small">
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar4-text2">Events</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link4Url} className="thq-link thq-body-small">
                {props.link4 ?? (
                  <Fragment>
                    <span className="navbar4-text1">Membership</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link5Url} className="thq-link thq-body-small">
                {props.link5 ?? (
                  <Fragment>
                    <span className="navbar4-text4">Contact</span>
                  </Fragment>
                )}
              </a>
            </nav>
          </div>
          <div className="navbar4-buttons">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar4.defaultProps = {
  link5Url: 'https://www.teleporthq.io',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link1Url: 'https://www.teleporthq.io',
  link3Url: 'https://www.teleporthq.io',
  link4: undefined,
  logoAlt: 'Kajakclub de Waterratjes Logo',
  link3: undefined,
  link4Url: 'https://www.teleporthq.io',
  link2: undefined,
  link5: undefined,
  link1: undefined,
  link2Url: 'https://www.teleporthq.io',
}

Navbar4.propTypes = {
  link5Url: PropTypes.string,
  logoSrc: PropTypes.string,
  link1Url: PropTypes.string,
  link3Url: PropTypes.string,
  link4: PropTypes.element,
  logoAlt: PropTypes.string,
  link3: PropTypes.element,
  link4Url: PropTypes.string,
  link2: PropTypes.element,
  link5: PropTypes.element,
  link1: PropTypes.element,
  link2Url: PropTypes.string,
}

export default Navbar4

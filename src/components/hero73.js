import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero73.css'

const Hero73 = (props) => {
  return (
    <div
      className={`hero73-header23 thq-section-padding ${props.rootClassName} `}
    >
      <div className="hero73-max-width thq-section-max-width">
        <div className="hero73-content">
          <div className="hero73-container">
            <h1 className="hero73-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero73-text4">
                    Galerij
                    <span>{/*locale-text_c5WX3d*/}</span>
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero73-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero73-text3">
                    <span>{/*locale-text_p3yMlH*/}</span>
                    Bekijk de nieuwste media en foto&apos;s hier!
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero73.defaultProps = {
  content1: undefined,
  heading1: undefined,
  rootClassName: '',
}

Hero73.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Hero73

import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero7.css'

const Hero7 = (props) => {
  return (
    <div
      className={`hero7-header23 thq-section-padding ${props.rootClassName} `}
    >
      <span className="hero7-text1 thq-heading-2">
        {props.heading11 ?? (
          <Fragment>
            <span className="hero7-text4">
              <span>{/*locale-text_eB9juV*/}</span>
              Over ons
            </span>
          </Fragment>
        )}
      </span>
      <div className="hero7-max-width thq-section-max-width">
        <div className="hero7-content"></div>
      </div>
      <p className="hero7-text2 thq-body-large">
        {props.content11 ?? (
          <Fragment>
            <span className="hero7-text3">
              Alle informatie over uw (toekomstige) sportclub!
              <span>{/*locale-text_qdk9KI*/}</span>
            </span>
          </Fragment>
        )}
      </p>
    </div>
  )
}

Hero7.defaultProps = {
  content11: undefined,
  heading11: undefined,
  rootClassName: '',
}

Hero7.propTypes = {
  content11: PropTypes.element,
  heading11: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Hero7

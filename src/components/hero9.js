import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="hero9-container1"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-container2">
          <div className="hero9-content">
            <h1 className="hero9-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero9-text6">
                    Galerij
                    <span>{/*locale-text_75SKsl*/}</span>
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero9-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero9-text5">
                    Bekijk de nieuwste foto&apos;s in onze galerij!
                    <span>{/*locale-text_St-Ou-*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
            <button type="button" className="hero9-button button">
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="hero9-text4">
                      <span>{/*locale-text_CxOSLK*/}</span>
                      Bekijk foto&apos;s
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  button: undefined,
  content1: undefined,
  rootClassName: '',
  heading1: undefined,
}

Hero9.propTypes = {
  button: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
}

export default Hero9

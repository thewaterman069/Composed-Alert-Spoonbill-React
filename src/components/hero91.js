import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero91.css'

const Hero91 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="hero91-container1"></div>
      <div className="hero91-max-width thq-section-max-width">
        <div className="hero91-container2">
          <div className="hero91-content">
            <h1 className="hero91-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero91-text4">
                    <span>{/*locale-text_75SKsl*/}</span>
                    Galerij
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero91-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero91-text6">
                    Bekijk de nieuwste foto&apos;s in onze galerij!
                    <span>{/*locale-text_St-Ou-*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
            <button type="button" className="hero91-button button">
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="hero91-text5">
                      Bekijk foto&apos;s
                      <span>{/*locale-text_CxOSLK*/}</span>
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

Hero91.defaultProps = {
  heading1: undefined,
  button: undefined,
  content1: undefined,
}

Hero91.propTypes = {
  heading1: PropTypes.element,
  button: PropTypes.element,
  content1: PropTypes.element,
}

export default Hero91

import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero1.css'

const Hero1 = (props) => {
  return (
    <div className="hero1-header1 thq-section-padding">
      <div className="hero1-max-width thq-section-max-width">
        <div className="thq-flex-row hero1-container1">
          <div className="hero1-column">
            <div className="hero1-content">
              <h1 className="hero1-heading1 thq-heading-1">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="hero1-text1">
                      <span>{/*locale-text_RW7WRL*/}</span>
                      lid worden van Kajakclub de Waterratjes
                    </span>
                  </Fragment>
                )}
              </h1>
              <p className="thq-body-large hero1-content1">
                {props.content1 ?? (
                  <Fragment>
                    <span className="hero1-text2">
                      <span>{/*locale-text_bsNWR8*/}</span>
                      Wordt lid van Kajakclub de Waterratjes door je in te
                      schrijven op deze pagina.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="hero1-actions">
              <button className="hero1-button thq-button-filled">
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero1-text3">
                        <span>{/*locale-text_CnKMva*/}</span>
                        word lid!
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero1-container2">
        <div className="hero1-container3">
          <Script
            html={`<iframe
  width="500"
  height="215"
  src="https://www.youtube.com/embed/dYKLVtmS2ak"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero1.defaultProps = {
  heading1: undefined,
  content1: undefined,
  action1: undefined,
}

Hero1.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
}

export default Hero1

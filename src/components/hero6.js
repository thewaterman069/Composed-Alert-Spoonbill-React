import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero6.css'

const Hero6 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="hero6-container1">
        <div className="hero6-max-width thq-flex-row thq-section-max-width">
          <div className="hero6-container2">
            <div className="hero6-column">
              <div className="hero6-content">
                <h1 className="hero6-text1 thq-heading-1">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="hero6-text2">
                        <span>
                          Kayak is not a sport,
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br></br>
                        <span>it&apos;s a lifestyle.</span>
                        <span>{/*locale-text_tzGtJg*/}</span>
                      </span>
                    </Fragment>
                  )}
                </h1>
              </div>
            </div>
            <img
              alt={props.imageAlt}
              src="/external/stats-500w-500w.png"
              className="hero6-image"
            />
          </div>
          <img
            alt={props.image1Alt}
            src="/external/dscf6295-1400w-1400w.jpg"
            className="hero6-hero-image thq-img-ratio-4-3"
          />
        </div>
      </div>
    </div>
  )
}

Hero6.defaultProps = {
  imageAlt: 'image',
  image1Alt: 'Hero Image',
  rootClassName: '',
  heading1: undefined,
}

Hero6.propTypes = {
  imageAlt: PropTypes.string,
  image1Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
}

export default Hero6

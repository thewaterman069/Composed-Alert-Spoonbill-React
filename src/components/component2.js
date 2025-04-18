import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container thq-section-padding">
      <div className="component2-max-width thq-section-max-width">
        <div className="component2-content">
          <h2 className="component2-heading1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="component2-text">
                  <span>{/*locale-text_n-XEHE*/}</span>
                  Privacy Policy
                </span>
              </Fragment>
            )}
          </h2>
        </div>
      </div>
    </div>
  )
}

Component2.defaultProps = {
  heading1: undefined,
}

Component2.propTypes = {
  heading1: PropTypes.element,
}

export default Component2

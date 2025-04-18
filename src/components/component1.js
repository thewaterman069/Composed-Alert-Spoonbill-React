import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className={`component1-container ${props.rootClassName} `}>
      <a
        href={props.buttonUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="component1-link button"
      >
        <span>
          {props.button ?? (
            <Fragment>
              <span className="component1-text2">
                <span>{/*locale-text_G838g4*/}</span>
                KLIK HIER OM U LID TE MAKEN
              </span>
            </Fragment>
          )}
        </span>
      </a>
    </div>
  )
}

Component1.defaultProps = {
  buttonUrl:
    'https://static.twizzit.com/v2/public/form/87d072651a727a00a2aba7a85548a42b',
  button: undefined,
  rootClassName: '',
}

Component1.propTypes = {
  buttonUrl: PropTypes.string,
  button: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Component1

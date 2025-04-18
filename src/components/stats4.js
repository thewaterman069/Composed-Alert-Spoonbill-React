import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats4.css'

const Stats4 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="stats4-max-width thq-section-max-width">
        <div className="stats4-container2">
          <div className="stats4-container3">
            <h2 className="stats4-text10 thq-heading-2">
              {props.stat1 ?? (
                <Fragment>
                  <span className="stats4-text22">
                    50+
                    <span>{/*locale-text_1YX88h*/}</span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="stats4-text11 thq-body-small">
              {props.stat1Description ?? (
                <Fragment>
                  <span className="stats4-text25">
                    Leden
                    <span>{/*locale-text_Mzy4EJ*/}</span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="stats4-text12">
              {props.text ?? (
                <Fragment>
                  <span className="stats4-text26">
                    We hebben meer dan 50 leden die zijn aangesloten bij onze
                    club.
                    <span>{/*locale-text_2roUX0*/}</span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="stats4-container4">
            <h2 className="stats4-text13 thq-heading-2">
              {props.stat2 ?? (
                <Fragment>
                  <span className="stats4-text20">
                    40+
                    <span>{/*locale-text_7X4BkP*/}</span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="stats4-text14 thq-body-small">
              {props.stat2Description ?? (
                <Fragment>
                  <span className="stats4-text24">
                    <span>{/*locale-text_XmMHFR*/}</span>
                    Kajaks beschikbaar
                  </span>
                </Fragment>
              )}
            </span>
            <span className="stats4-text15">
              {props.text1 ?? (
                <Fragment>
                  <span className="stats4-text19">
                    Er is voldoende materiaal beschikbaar inclusief kajak&apos;s
                    en sup&apos;s.
                    <span>{/*locale-text_2M4IAe*/}</span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="stats4-container5">
            <h2 className="stats4-text16 thq-heading-2">
              {props.stat3 ?? (
                <Fragment>
                  <span className="stats4-text23">
                    10+
                    <span>{/*locale-text_WIYAXZ*/}</span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="stats4-text17 thq-body-small">
              {props.stat3Description ?? (
                <Fragment>
                  <span className="stats4-text21">
                    <span>{/*locale-text_xgjTP9*/}</span>
                    Begeleiders
                  </span>
                </Fragment>
              )}
            </span>
            <span className="stats4-text18">
              {props.text2 ?? (
                <Fragment>
                  <span className="stats4-text27">
                    <span>{/*locale-text_EndzCr*/}</span>
                    We hebben voldoende begeleders, die altijd klaar staan om je
                    te helpen.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
      <img
        alt={props.backgroundAlt}
        src="/external/20230625_115157-1500w-1500w.jpg"
        className="stats4-image"
      />
    </div>
  )
}

Stats4.defaultProps = {
  text1: undefined,
  stat2: undefined,
  stat3Description: undefined,
  stat1: undefined,
  stat3: undefined,
  stat2Description: undefined,
  backgroundAlt: 'image',
  stat1Description: undefined,
  rootClassName: '',
  text: undefined,
  text2: undefined,
}

Stats4.propTypes = {
  text1: PropTypes.element,
  stat2: PropTypes.element,
  stat3Description: PropTypes.element,
  stat1: PropTypes.element,
  stat3: PropTypes.element,
  stat2Description: PropTypes.element,
  backgroundAlt: PropTypes.string,
  stat1Description: PropTypes.element,
  rootClassName: PropTypes.string,
  text: PropTypes.element,
  text2: PropTypes.element,
}

export default Stats4

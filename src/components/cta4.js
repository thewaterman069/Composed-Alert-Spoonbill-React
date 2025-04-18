import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta4.css'

const CTA4 = (props) => {
  return (
    <div className="cta4-container1 thq-section-padding">
      <div className="cta4-max-width thq-section-max-width">
        <div className="cta4-container2 thq-flex-row">
          <div className="cta4-column">
            <span className="cta4-text1 thq-heading-2">
              {props.content1 ?? (
                <Fragment>
                  <span className="cta4-text8">
                    <span>{/*locale-text_8MOclX*/}</span>
                    Initiatie sup
                  </span>
                </Fragment>
              )}
            </span>
            <p className="cta4-text2 thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="cta4-text6">
                    We hebben een aantal supboards liggen, waarmee je eerst
                    onder begeleiding het water mee op kan. Initiaties beginnen
                    van april en eindigen eind oktober. Heb je ervaring genoeg?
                    Dan kan je ook in je ééntje met de sup een leuke namiddag op
                    de Spuikom beleven.
                    <span>{/*locale-text_PwlXAg*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
            <p className="cta4-text3 thq-body-small">
              {props.content21 ?? (
                <Fragment>
                  <span className="cta4-text7">
                    Iedereen die houdt van ongedwongen, gezellig samen sporten
                    zonder drukdoenerij kan bij ons in de club terrecht. De
                    leeftijd van de leden variëren. De enoge vereiste die
                    gesteld wordt is dat deelnemers over een zwembrevet
                    beschikken. Eigen materiaal is niet nodig, wij voorzien
                    alles. We beschikken over een tiental sup&apos;s.
                    <span>{/*locale-text_ggSVhJ*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="cta4-actions">
              <button type="button" className="cta4-button thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="cta4-text5">
                        Meer weten?
                        <span>{/*locale-text_0h9gHD*/}</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <img
            src="/external/img_9542-1400w-1400w.jpg"
            className="cta4-placeholder-image thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

CTA4.defaultProps = {
  action1: undefined,
  content2: undefined,
  content21: undefined,
  content1: undefined,
}

CTA4.propTypes = {
  action1: PropTypes.element,
  content2: PropTypes.element,
  content21: PropTypes.element,
  content1: PropTypes.element,
}

export default CTA4

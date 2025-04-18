import React, { Fragment } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './steps12.css'

const Steps12 = (props) => {
  return (
    <div
      className={`steps12-container1 thq-section-padding ${props.rootClassName} `}
    >
      <h1 className="steps12-text10">
        {props.heading ?? (
          <Fragment>
            <span className="steps12-text29">
              <span>{/*locale-text_lA3Dur*/}</span>
              Laten we kennis maken...
            </span>
          </Fragment>
        )}
      </h1>
      <div className="steps12-max-width thq-section-max-width">
        <div className="steps12-container2">
          <div className="steps12-container3 thq-card">
            <Player
              src="https://lottie.host/02b25c5d-503f-4b17-96fc-2b1ab4567da5/XWqSjknzg5.json"
              loop
              speed="1"
              autoplay="true"
              background="transparent"
              className="steps12-lottie-node1"
            ></Player>
            <h2 className="steps12-text11 thq-heading-2">
              {props.step1Title ?? (
                <Fragment>
                  <span className="steps12-text20">
                    <span>Beschikbaar</span>
                    <br></br>
                    <span>materiaal</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="steps12-text12 thq-body-small">
              {props.step1Description ?? (
                <Fragment>
                  <span className="steps12-text28">
                    Eigen materiaal is geen vereiste bij ons. Wij stellen ons
                    materiaal open voor onze leden.
                    <span>{/*locale-text_0kemL1*/}</span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="steps12-container4 thq-card">
            <Player
              src="https://lottie.host/9162e276-fe6a-4464-a152-7a567788334e/86V1BWStBc.json"
              loop
              speed="1"
              autoplay="true"
              background="transparent"
              className="steps12-lottie-node2"
            ></Player>
            <h2 className="steps12-text13 thq-heading-2">
              {props.step2Title ?? (
                <Fragment>
                  <span className="steps12-text30">
                    Sportkampen
                    <span>{/*locale-text_1si0Rh*/}</span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="steps12-text14 thq-body-small">
              {props.step2Description ?? (
                <Fragment>
                  <span className="steps12-text31">
                    <span>{/*locale-text_sOBtAO*/}</span>
                    Op de sportkampen laten we je kennis maken met kajak, kano
                    en sup. We leren jullie de kneepjes van watersporten.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="steps12-container5">
          <div className="steps12-container6 thq-card">
            <Player
              src="https://lottie.host/6630f75f-7b8e-47d6-977c-84e4b270c922/PPCd3I7rKl.json"
              loop
              speed="1"
              autoplay="true"
              background="transparent"
              className="steps12-lottie-node3"
            ></Player>
            <h2 className="steps12-text15 thq-heading-2">
              {props.step3Title ?? (
                <Fragment>
                  <span className="steps12-text25">
                    Eten en drinken
                    <span>{/*locale-text_DFBY96*/}</span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="steps12-text16 thq-body-small">
              {props.step3Description ?? (
                <Fragment>
                  <span className="steps12-text19">
                    <span>{/*locale-text_A2aBH0*/}</span>
                    Binnen de cub is er een gezellige bar. Na een kajak-moment
                    kunnen we hier gezellig bijpraten met elkaar of een kleine
                    snack benutten.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="steps12-container7 thq-card">
            <Player
              src="https://lottie.host/3594a8c5-2ba9-4a76-badf-d1018f05fa4e/wCv9442MTO.json"
              loop
              speed="1"
              autoplay="true"
              background="transparent"
              className="steps12-lottie-node4"
            ></Player>
            <h2 className="steps12-text17 thq-heading-2">
              {props.step4Title ?? (
                <Fragment>
                  <span className="steps12-text27">
                    <span>{/*locale-text_0XMm4Z*/}</span>
                    Uitstappen
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="steps12-text18 thq-body-small">
              {props.step4Description ?? (
                <Fragment>
                  <span className="steps12-text26">
                    <span>{/*locale-text_kShe3_*/}</span>
                    We treken regelmatig naar zee. Als je een iets rustigere
                    plek zoekt kun je mee op verschillende toertochten.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps12.defaultProps = {
  step3Description: undefined,
  rootClassName: '',
  step1Title: undefined,
  step3Title: undefined,
  step4Description: undefined,
  step4Title: undefined,
  step1Description: undefined,
  heading: undefined,
  step2Title: undefined,
  step2Description: undefined,
}

Steps12.propTypes = {
  step3Description: PropTypes.element,
  rootClassName: PropTypes.string,
  step1Title: PropTypes.element,
  step3Title: PropTypes.element,
  step4Description: PropTypes.element,
  step4Title: PropTypes.element,
  step1Description: PropTypes.element,
  heading: PropTypes.element,
  step2Title: PropTypes.element,
  step2Description: PropTypes.element,
}

export default Steps12

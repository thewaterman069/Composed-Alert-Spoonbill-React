import React, { Fragment } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './steps1.css'

const Steps1 = (props) => {
  return (
    <div className="steps1-container1 thq-section-padding">
      <div className="steps1-max-width thq-section-max-width">
        <div className="steps1-container2">
          <div className="steps1-container3 thq-card">
            <Player
              src="https://lottie.host/02b25c5d-503f-4b17-96fc-2b1ab4567da5/XWqSjknzg5.json"
              loop
              speed="1"
              autoplay="true"
              background="transparent"
              className="steps1-lottie-node1"
            ></Player>
            <h2 className="steps1-text10 thq-heading-2">
              {props.step1Title ?? (
                <Fragment>
                  <span className="steps1-text23">
                    Introduction to Kayaking and Stand-Up Paddleboarding
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text11 thq-body-small">
              {props.step1Description ?? (
                <Fragment>
                  <span className="steps1-text22">
                    Learn the basics of kayaking and stand-up paddleboarding
                    with our experienced instructors.
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text12 thq-heading-3">01</label>
          </div>
          <div className="steps1-container4 thq-card">
            <Player
              src="https://lottie.host/9162e276-fe6a-4464-a152-7a567788334e/86V1BWStBc.json"
              loop
              speed="1"
              autoplay="true"
              background="transparent"
              className="steps1-lottie-node2"
            ></Player>
            <h2 className="steps1-text13 thq-heading-2">
              {props.step2Title ?? (
                <Fragment>
                  <span className="steps1-text27">
                    Skill Development Sessions
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text14 thq-body-small">
              {props.step2Description ?? (
                <Fragment>
                  <span className="steps1-text26">
                    Improve your techniques and skills through our structured
                    training sessions on the water.
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text15 thq-heading-3">02</label>
          </div>
        </div>
        <div className="steps1-container5">
          <div className="steps1-container6 thq-card">
            <Player
              src="https://lottie.host/6630f75f-7b8e-47d6-977c-84e4b270c922/PPCd3I7rKl.json"
              loop
              speed="1"
              autoplay="true"
              background="transparent"
              className="steps1-lottie-node3"
            ></Player>
            <h2 className="steps1-text16 thq-heading-2">
              {props.step3Title ?? (
                <Fragment>
                  <span className="steps1-text24">
                    Guided Tours and Excursions
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text17 thq-body-small">
              {props.step3Description ?? (
                <Fragment>
                  <span className="steps1-text28">
                    Explore scenic waterways and nature reserves on our guided
                    tours led by knowledgeable guides.
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text18 thq-heading-3">03</label>
          </div>
          <div className="steps1-container7 thq-card">
            <Player
              src="https://lottie.host/3594a8c5-2ba9-4a76-badf-d1018f05fa4e/wCv9442MTO.json"
              loop
              speed="1"
              autoplay="true"
              background="transparent"
              className="steps1-lottie-node4"
            ></Player>
            <h2 className="steps1-text19 thq-heading-2">
              {props.step4Title ?? (
                <Fragment>
                  <span className="steps1-text25">Relaxation Activities</span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text20 thq-body-small">
              {props.step4Description ?? (
                <Fragment>
                  <span className="steps1-text29">
                    Unwind and socialize with fellow members during our
                    relaxation activities and events.
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text21 thq-heading-3">04</label>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps1.defaultProps = {
  step1Description: undefined,
  step1Title: undefined,
  step3Title: undefined,
  step4Title: undefined,
  step2Description: undefined,
  step2Title: undefined,
  step3Description: undefined,
  step4Description: undefined,
}

Steps1.propTypes = {
  step1Description: PropTypes.element,
  step1Title: PropTypes.element,
  step3Title: PropTypes.element,
  step4Title: PropTypes.element,
  step2Description: PropTypes.element,
  step2Title: PropTypes.element,
  step3Description: PropTypes.element,
  step4Description: PropTypes.element,
}

export default Steps1

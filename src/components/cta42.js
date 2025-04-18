import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta42.css'

const CTA42 = (props) => {
  return (
    <div className="cta42-container1 thq-section-padding">
      <div className="cta42-max-width thq-section-max-width">
        <div className="cta42-container2 thq-flex-row">
          <img
            alt={props.imageAlt2}
            src={props.imageSrc2}
            className="cta42-image1"
          />
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="cta42-image2"
          />
          <div className="cta42-column">
            <span className="thq-heading-2">
              {props.content1 ?? (
                <Fragment>
                  <span className="cta42-text3">
                    <span>{/*locale-text__8N01i*/}</span>
                    G-sport
                  </span>
                </Fragment>
              )}
            </span>
            <p className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="cta42-text4">
                    Ook mensen met beperkingen zijn bij ons welkom. Het
                    watervlak is zeer vlot bereikbaar voor rolstoelgebruikers.
                    De enigste vereiste is een zwembrevet van 25 meter. Wil je
                    met familie, vrienden, collega&apos;s en leuke activiteit
                    beleven, dn kun je ons steeds contacteren. Dit kan enkel in
                    het weekend. Tijdens de schoolvakanties kan dit eventueel
                    buiten het weekend.
                    <span>{/*locale-text_NRLo8r*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="cta42-actions"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA42.defaultProps = {
  content1: undefined,
  content2: undefined,
  imageAlt3: 'image',
  imageAlt2: 'image',
  imageSrc2: '/external/gspr1-500h-500h.jpg',
  imageSrc3: '/external/gspr2-400h-400h.jpg',
}

CTA42.propTypes = {
  content1: PropTypes.element,
  content2: PropTypes.element,
  imageAlt3: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc3: PropTypes.string,
}

export default CTA42

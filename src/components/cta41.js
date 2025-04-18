import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta41.css'

const CTA41 = (props) => {
  return (
    <div className="cta41-container1 thq-section-padding">
      <div className="cta41-max-width thq-section-max-width">
        <div className="cta41-container2 thq-flex-row">
          <div className="cta41-column">
            <span className="thq-heading-2">
              {props.content1 ?? (
                <Fragment>
                  <span className="cta41-text6">
                    Initiaties kajak
                    <span>{/*locale-text_x3iNQ7*/}</span>
                  </span>
                </Fragment>
              )}
            </span>
            <p className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="cta41-text7">
                    Wil je nog wat meer informatie, of sta je to popelen om eens
                    in een kajak te springen, geen probleem! De initiatie kajak
                    gaat door vanaf begin april tot eind oktober aan de Spuikom.
                    Ook in de winter blijven we actief met het leren eskimoteren
                    in het zwembad (van november tot maart). Dit telkens elke
                    zaterdag van 14u tot 16u. Je mag vrijblijvend eens komen
                    proefvaren. Maak een afspraak via email en we zorgen ervoor
                    dat iemand klaar zal staan om je wegwijs te maken in de club
                    en op het water.
                    <span>{/*locale-text_3dwfnU*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
            <p className="thq-body-small">
              {props.content21 ?? (
                <Fragment>
                  <span className="cta41-text5">
                    <span>{/*locale-text_aRksIN*/}</span>
                    Wil je op een ander tijdstip komen varen? Neem dan contact
                    met ons op voor een afspraak.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="cta41-actions">
              <a
                href="mailto:info@waterratjes.be.eu.org?subject=Afspraak kajak"
                className="cta41-link thq-button-filled"
              >
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="cta41-text8">
                        Mail ons
                        <span>{/*locale-text_bsOY9U*/}</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </a>
            </div>
          </div>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="cta41-image1"
          />
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="cta41-image2"
          />
        </div>
      </div>
    </div>
  )
}

CTA41.defaultProps = {
  imageAlt: 'image',
  imageSrc1: '/external/int-243-400h-400h.jpg',
  content21: undefined,
  imageSrc: 'a795c99c-db11-4a54-a222-0842601e8143',
  content1: undefined,
  imageAlt1: 'image',
  content2: undefined,
  action1: undefined,
}

CTA41.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  content21: PropTypes.element,
  imageSrc: PropTypes.string,
  content1: PropTypes.element,
  imageAlt1: PropTypes.string,
  content2: PropTypes.element,
  action1: PropTypes.element,
}

export default CTA41

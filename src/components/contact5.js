import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact5.css'

const Contact5 = (props) => {
  return (
    <div className="contact5-container thq-section-padding">
      <div className="contact5-max-width thq-section-max-width">
        <div className="contact5-section-title">
          <div className="contact5-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact5-text23">
                    Contacteer ons
                    <span>{/*locale-text_FZiTQl*/}</span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="contact5-text11 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact5-text24">
                    <span>
                      Indien u contact met ons wenst op te nemen met ons in
                      verband met vragen en/of klachten kunt u onderstaande info
                      gebruiken of lunt u het contactformulier onderaan deze
                      pagina invullen.
                    </span>
                    <br></br>
                    <span>
                      Complimenten zijn natuurlijk ook altijd welkom :-).
                    </span>
                    <br></br>
                    <span>{/*locale-text_4N-8s-*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact5-content2 thq-flex-row">
          <div className="contact5-content3">
            <div className="contact5-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact5-contact-info1">
                <h3 className="contact5-text12 thq-heading-3">
                  <span>{/*locale-text_7DSsNw*/}</span>
                  E-mail
                </h3>
                <p className="thq-body-large">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="contact5-text20">
                        Altijd beschikbaar. We beantwoorden uw mail binnen 3-5
                        werkdagen.
                        <span>{/*locale-text_-JMkqZ*/}</span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.email ?? (
                    <Fragment>
                      <span className="contact5-text30">
                        info@waterratjes.be.eu.org
                        <span>{/*locale-text_BlPrxe*/}</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact5-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact5-contact-info2">
                <h3 className="contact5-text14 thq-heading-3">
                  Telefoon
                  <span>{/*locale-text_BrRM1b*/}</span>
                </h3>
                <p className="thq-body-large">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="contact5-text19">
                        Bel ons, beschikbaar op werkdagen, telkens van 09u - 16u
                        <span>{/*locale-text_ZR9ckO*/}</span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.phone1 ?? (
                    <Fragment>
                      <span className="contact5-text29">
                        +32 (0)459 54 29 78
                        <span>{/*locale-text_1I71UQ*/}</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact5-content6">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact5-contact-info3">
                <h3 className="contact5-text17 thq-heading-3">
                  Adres
                  <span>{/*locale-text_vFiH7q*/}</span>
                </h3>
                <p className="thq-body-large">
                  {props.content5 ?? (
                    <Fragment>
                      <span className="contact5-text21">
                        Heeft u een afspraak vastegelegd? Kom gerust naar ons
                        hoofdkantoor.
                        <span>{/*locale-text_yAZAd3*/}</span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <span className="thq-body-small">
                  {props.address1 ?? (
                    <Fragment>
                      <span className="contact5-text22">
                        <span>{/*locale-text_rWd0jh*/}</span>
                        Schietbaanstraat 100, 8400 Oostende
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps?q=Schietbaanstraat 100 inside outside&amp;output=embed"
            address="Schietbaanstraat 100 inside outside"
            className="contact5-google-maps"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

Contact5.defaultProps = {
  content3: undefined,
  content2: undefined,
  content5: undefined,
  address1: undefined,
  heading1: undefined,
  content1: undefined,
  phone1: undefined,
  email: undefined,
}

Contact5.propTypes = {
  content3: PropTypes.element,
  content2: PropTypes.element,
  content5: PropTypes.element,
  address1: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  phone1: PropTypes.element,
  email: PropTypes.element,
}

export default Contact5

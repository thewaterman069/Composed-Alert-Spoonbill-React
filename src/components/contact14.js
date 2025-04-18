import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact14.css'

const Contact14 = (props) => {
  return (
    <div className="contact14-contact20 thq-section-padding">
      <div className="contact14-max-width thq-section-max-width">
        <div className="contact14-content1">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
          </svg>
          <div className="contact14-contact-info1">
            <div className="contact14-content2">
              <h3 className="contact14-text10 thq-heading-3">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact14-text24">
                      E-mail
                      <span>{/*locale-text_nw8pYP*/}</span>
                    </span>
                  </Fragment>
                )}
              </h3>
            </div>
            <span className="contact14-email thq-body-small">
              {props.email1 ?? (
                <Fragment>
                  <span className="contact14-text23">
                    <span>{/*locale-text_MkCKz-*/}</span>
                    info@waterratjes.be.eu.org
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="contact14-content3">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
          </svg>
          <div className="contact14-contact-info2">
            <div className="contact14-content4">
              <h3 className="contact14-text11 thq-heading-3">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="contact14-text16">
                      <span>{/*locale-text_bSnuCl*/}</span>
                      Bel ons
                    </span>
                  </Fragment>
                )}
              </h3>
            </div>
            <a
              href="tel:+32495542978"
              className="contact14-phone1 thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="contact14-text25">
                    +32 (0)495 54 29 78
                    <span>{/*locale-text_wA_lG5*/}</span>
                  </span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="contact14-content5">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
          </svg>
          <div className="contact14-contact-info3">
            <div className="contact14-content6">
              <h3 className="contact14-text12 thq-heading-3">
                {props.heading3 ?? (
                  <Fragment>
                    <span className="contact14-text15">
                      Adres
                      <span>{/*locale-text_CuOMy7*/}</span>
                    </span>
                  </Fragment>
                )}
              </h3>
            </div>
            <span className="contact14-phone2 thq-body-small">
              {props.phone1 ?? (
                <Fragment>
                  <span className="contact14-text18">
                    <span>Schietbaanstraat 100</span>
                    <br></br>
                    <span>8400 Oostende</span>
                    <br></br>
                    <span>{/*locale-text_s2DL_g*/}</span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="contact14-content7">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            className="contact14-icon16"
          >
            <path
              d="M10.05 18a20.5 20.5 0 0 0 .62 4.93h6.48v-9.48h-6.57a20.6 20.6 0 0 0-.53 4.55"
              fill="currentColor"
              className="clr-i-solid clr-i-solid-path-1"
            ></path>
            <path
              d="M18.85 13.45v9.48h6.48A20.5 20.5 0 0 0 26 18a20.6 20.6 0 0 0-.52-4.55Z"
              fill="currentColor"
              className="clr-i-solid clr-i-solid-path-2"
            ></path>
            <path
              d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m12.22 22.71H26.6a21.8 21.8 0 0 1-3 6a14 14 0 0 1-3 .92a20.2 20.2 0 0 0 4.18-6.94h-5.92v7.15h-1.69v-7.13h-5.95a20.2 20.2 0 0 0 4.18 6.95a14 14 0 0 1-2.94-.9a21.8 21.8 0 0 1-3-6.05H5.78a14 14 0 0 1-.83-1.81h4a22.2 22.2 0 0 1-.58-4.9a22 22 0 0 1 .48-4.55H4.76a14 14 0 0 1 .76-1.81h3.81A22.3 22.3 0 0 1 12.61 5a14 14 0 0 1 2.87-.84a20.1 20.1 0 0 0-4.4 7.45h6.09V4h1.69v7.64h6.09a20.1 20.1 0 0 0-4.39-7.44a14 14 0 0 1 2.87.8a22.3 22.3 0 0 1 3.27 6.59h3.77a14 14 0 0 1 .76 1.81h-4.06a22 22 0 0 1 .49 4.6a22.2 22.2 0 0 1-.57 4.93h4a14 14 0 0 1-.87 1.78"
              fill="currentColor"
              className="clr-i-solid clr-i-solid-path-3"
            ></path>
            <path d="M0 0h36v36H0z" fill="none"></path>
          </svg>
          <div className="contact14-contact-info4">
            <div className="contact14-content8">
              <h3 className="contact14-text13 thq-heading-3">
                {props.heading4 ?? (
                  <Fragment>
                    <span className="contact14-text17">
                      Inside-Outside Oostende
                      <span>{/*locale-text_UEDCuA*/}</span>
                    </span>
                  </Fragment>
                )}
              </h3>
            </div>
            <a
              href="https://inout-oostende.be"
              target="_blank"
              rel="noreferrer noopener"
              className="contact14-website thq-body-small"
            >
              {props.address1 ?? (
                <Fragment>
                  <span className="contact14-text14">
                    <span>{/*locale-text_eD-2up*/}</span>
                    inout-oostende.be
                  </span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact14.defaultProps = {
  address1: undefined,
  heading3: undefined,
  heading2: undefined,
  heading4: undefined,
  phone1: undefined,
  email1: undefined,
  heading1: undefined,
  link1: undefined,
}

Contact14.propTypes = {
  address1: PropTypes.element,
  heading3: PropTypes.element,
  heading2: PropTypes.element,
  heading4: PropTypes.element,
  phone1: PropTypes.element,
  email1: PropTypes.element,
  heading1: PropTypes.element,
  link1: PropTypes.element,
}

export default Contact14

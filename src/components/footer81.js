import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer81.css'

const Footer81 = (props) => {
  return (
    <footer
      className={`footer81-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer81-max-width thq-section-max-width">
        <div className="footer81-content">
          <div className="footer81-container2">
            <div className="footer81-contact-info">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="footer81-image"
              />
              <span className="footer81-content-title1 thq-body-small">
                <span className="footer81-text10">Contactinformatie</span>
                <span className="footer81-text11">:</span>
                <br className="footer81-text12"></br>
                <span className="footer81-text13">
                  Schietbaanstraat 100, 8400 Oostende
                </span>
                <br className="footer81-text14"></br>
                <span className="footer81-text15">Tel. +32 495 54 29 78</span>
                <br className="footer81-text16"></br>
                <span className="footer81-text17">
                  Email:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="footer81-text18">
                  info@waterratjes.be.eu.org
                </span>
                <br className="footer81-text19"></br>
                <span>{/*locale-contentTitle1_NprEju*/}</span>
              </span>
              <span className="footer81-content2 thq-body-small">
                <span className="footer81-text20">
                  <span>{/*locale-text_FHLMfD*/}</span>
                  Contact
                </span>
                <br className="footer81-text21"></br>
                <span>
                  <span>{/*locale-text_atb1CA*/}</span>+
                </span>
                <span className="footer81-text23">
                  <span>{/*locale-text_-Q0tqd*/}</span>
                  1234567890
                </span>
                <br></br>
                <span className="footer81-text25">
                  info@contact.support
                  <span>{/*locale-text_K_SVtg*/}</span>
                </span>
                <br></br>
              </span>
              <div className="footer81-social-links">
                <div className="footer81-container3">
                  <a
                    href="https://www.facebook.com/KajakClubDeWaterratjes"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer81-link14"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="footer81-icon1 thq-icon-small"
                    >
                      <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/kajakclub_de_waterratjes/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer81-link15"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="footer81-icon3 thq-icon-small"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@mgwebdevltd/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer81-link16"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="footer81-icon5 thq-icon-small"
                    >
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer81-links">
            <div className="footer81-column1">
              <strong className="thq-body-large footer81-column1-title">
                {props.column1Title ?? (
                  <Fragment>
                    <span className="footer81-text33">
                      Menu
                      <span>{/*locale-text_QjhMer*/}</span>
                    </span>
                  </Fragment>
                )}
              </strong>
              <div className="footer81-footer-links1">
                <Link to="/" className="footer81-link1 thq-body-small">
                  {props.link1 ?? (
                    <Fragment>
                      <span className="footer81-text43">
                        Home
                        <span>{/*locale-text_uh4Kve*/}</span>
                      </span>
                    </Fragment>
                  )}
                </Link>
                <Link to="/about" className="footer81-link2 thq-body-small">
                  {props.link2 ?? (
                    <Fragment>
                      <span className="footer81-text30">
                        Over ons
                        <span>{/*locale-text_uupVCZ*/}</span>
                      </span>
                    </Fragment>
                  )}
                </Link>
                <Link to="/contact" className="footer81-link3 thq-body-small">
                  {props.link3 ?? (
                    <Fragment>
                      <span className="footer81-text47">
                        <span>{/*locale-text_GQAsII*/}</span>
                        Contact
                      </span>
                    </Fragment>
                  )}
                </Link>
                <Link
                  to="/inschrijven"
                  className="footer81-link4 thq-body-small"
                >
                  {props.link4 ?? (
                    <Fragment>
                      <span className="footer81-text38">
                        <span>{/*locale-text_Ss0tJH*/}</span>
                        Inschrijven
                      </span>
                    </Fragment>
                  )}
                </Link>
                <a
                  href="https://shop.waterratjes.be.eu.org/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer81-link5 thq-body-small"
                >
                  {props.link5 ?? (
                    <Fragment>
                      <span className="footer81-text37">
                        <span>{/*locale-text_p3Er4V*/}</span>
                        Winkel
                      </span>
                    </Fragment>
                  )}
                </a>
                <Link
                  to="/calendar"
                  className="footer81-link111 thq-body-small"
                >
                  {props.link51 ?? (
                    <Fragment>
                      <span className="footer81-text29">
                        <span>{/*locale-text_iMeOKr*/}</span>
                        Kalender
                      </span>
                    </Fragment>
                  )}
                </Link>
              </div>
            </div>
            <div className="footer81-column2">
              <strong className="thq-body-large footer81-column2-title">
                {props.column2Title ?? (
                  <Fragment>
                    <span className="footer81-text28">
                      Snel naar...
                      <span>{/*locale-text_DFJbs_*/}</span>
                    </span>
                  </Fragment>
                )}
              </strong>
              <div className="footer81-footer-links2">
                <Link to="/contact" className="footer81-link6 thq-body-small">
                  {props.link6 ?? (
                    <Fragment>
                      <span className="footer81-text31">
                        <span>{/*locale-text_dXc_Hj*/}</span>
                        Contact opnemen
                      </span>
                    </Fragment>
                  )}
                </Link>
                <a
                  href="https://www.inout-oostende.be/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer81-link7 thq-body-small"
                >
                  {props.link7 ?? (
                    <Fragment>
                      <span className="footer81-text35">
                        Inside-Outside Oostende
                        <span>{/*locale-text_kSml1K*/}</span>
                      </span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://www.sport.vlaanderen/sporten-in-mijn-omgeving/vind-een-route/vind-een-kajak-kano-suproute?zoomLevel=8.4&amp;lat=50.99035270516344&amp;lng=4.499683189703228"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer81-link8 thq-body-small"
                >
                  {props.link8 ?? (
                    <Fragment>
                      <span className="footer81-text45">
                        Kajakroutes Vlaanderen
                        <span>{/*locale-text_kBivJq*/}</span>
                      </span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://shop.waterratjes.be.eu.org/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer81-link10 thq-body-small"
                >
                  {props.link10 ?? (
                    <Fragment>
                      <span className="footer81-text27">
                        Webshop
                        <span>{/*locale-text_RV9SCB*/}</span>
                      </span>
                    </Fragment>
                  )}
                </a>
                <a
                  href="https://shop.waterratjes.be.eu.org/kayak-sport"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer81-link9 thq-body-small"
                >
                  {props.link9 ?? (
                    <Fragment>
                      <span className="footer81-text44">
                        Kayaksport
                        <span>{/*locale-text_hSmtHW*/}</span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer81-credits">
          <div className="footer81-row">
            <span className="thq-body-small">
              {props.copyright ?? (
                <Fragment>
                  <span className="footer81-text46">
                    © 2025 Kajakclub de Waterratjes
                    <span>{/*locale-text_NKdL9J*/}</span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="footer81-footer-links3">
              <Link to="/privacy" className="footer81-link112 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer81-text34">
                      Privacy Policy
                      <span>{/*locale-text_NPRyps*/}</span>
                    </span>
                  </Fragment>
                )}
              </Link>
              <a
                href="https://privacy.mgwebdev.eu/document/terms-of-use/"
                target="_blank"
                rel="noreferrer noopener"
                className="footer81-link12 thq-body-small"
              >
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer81-text36">
                      <span>{/*locale-text_fTrCNy*/}</span>
                      Terms of Service
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://privacy.mgwebdev.eu/document/cookie-policy/"
                target="_blank"
                rel="noreferrer noopener"
                className="footer81-link13 thq-body-small"
              >
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer81-text32">
                      <span>{/*locale-text_Mmvx9X*/}</span>
                      Cookies Settings
                    </span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://mgwebdev.eu"
        target="_blank"
        rel="noreferrer noopener"
        className="footer81-powered-by"
      >
        {props.text2 ?? (
          <Fragment>
            <span className="footer81-text39">
              <span>
                Website door
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="footer81-text41">MG WebDev Ltd</span>
              <span className="footer81-text42">.</span>
              <span>{/*locale-text_KCCx2W*/}</span>
            </span>
          </Fragment>
        )}
      </a>
    </footer>
  )
}

Footer81.defaultProps = {
  link10: undefined,
  imageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3524e4de-f33a-4bd9-9689-1c132fa78f6d/fa53d188-703c-4d23-a30b-81b7c28c3fd0?org_if_sml=1&force_format=original',
  column2Title: undefined,
  link51: undefined,
  link2: undefined,
  rootClassName: '',
  link6: undefined,
  cookiesLink: undefined,
  column1Title: undefined,
  privacyLink: undefined,
  link7: undefined,
  termsLink: undefined,
  link5: undefined,
  link4: undefined,
  text2: undefined,
  link1: undefined,
  imageAlt: 'image',
  link9: undefined,
  link8: undefined,
  copyright: undefined,
  link3: undefined,
}

Footer81.propTypes = {
  link10: PropTypes.element,
  imageSrc: PropTypes.string,
  column2Title: PropTypes.element,
  link51: PropTypes.element,
  link2: PropTypes.element,
  rootClassName: PropTypes.string,
  link6: PropTypes.element,
  cookiesLink: PropTypes.element,
  column1Title: PropTypes.element,
  privacyLink: PropTypes.element,
  link7: PropTypes.element,
  termsLink: PropTypes.element,
  link5: PropTypes.element,
  link4: PropTypes.element,
  text2: PropTypes.element,
  link1: PropTypes.element,
  imageAlt: PropTypes.string,
  link9: PropTypes.element,
  link8: PropTypes.element,
  copyright: PropTypes.element,
  link3: PropTypes.element,
}

export default Footer81
